'use client'

import { useState } from 'react'
import { AdminHeader } from '@/components/admin/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { updateMessageStatus, deleteMessage, getAllMessagesForExport } from '@/lib/actions/messages'
import { exportToCSV } from '@/lib/utils'
import { DeleteDialog } from '@/components/admin/delete-dialog'
import { toast } from 'sonner'
import { Download, Trash2, Mail, Phone, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { ContactMessage } from '@prisma/client'

const statusVariant: Record<string, 'default' | 'success' | 'secondary'> = {
  new: 'default',
  contacted: 'success',
  closed: 'secondary',
}

export function MessagesClient({
  messages,
  total,
  pages,
  currentPage,
  statusFilter,
  search,
}: {
  messages: ContactMessage[]
  total: number
  pages: number
  currentPage: number
  statusFilter?: string
  search?: string
}) {
  const router = useRouter()
  const [selected, setSelected] = useState<ContactMessage | null>(messages[0] || null)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [searchInput, setSearchInput] = useState(search || '')

  const handleStatus = async (id: string, status: string) => {
    await updateMessageStatus(id, status)
    toast.success('Status updated')
    router.refresh()
  }

  const handleExport = async () => {
    const all = await getAllMessagesForExport()
    const csv = exportToCSV(
      all.map((m) => ({
        ...m,
        createdAt: new Date(m.createdAt).toISOString(),
      })),
      [
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone' },
        { key: 'message', label: 'Message' },
        { key: 'status', label: 'Status' },
        { key: 'createdAt', label: 'Date' },
      ]
    )
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'contact-leads.csv'
    a.click()
  }

  const handleDelete = async () => {
    if (!deleteId) return
    setLoading(true)
    await deleteMessage(deleteId)
    toast.success('Deleted')
    router.refresh()
    setLoading(false)
    setDeleteId(null)
  }

  return (
    <div>
      <AdminHeader
        title="Contact Leads"
        description={`${total} messages`}
        action={
          <Button variant="outline" onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" /> Export CSV
          </Button>
        }
      />

      <div className="flex flex-wrap gap-3 mb-6">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            router.push(`/admin/messages?q=${searchInput}&status=${statusFilter || ''}`)
          }}
          className="flex gap-2 flex-1 max-w-md"
        >
          <Input placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
          <Button type="submit" variant="secondary"><Search className="w-4 h-4" /></Button>
        </form>
        <Select
          value={statusFilter || 'all'}
          onValueChange={(v) =>
            router.push(`/admin/messages?status=${v === 'all' ? '' : v}${search ? `&q=${search}` : ''}`)
          }
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="contacted">Contacted</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-white divide-y max-h-[600px] overflow-y-auto">
          {messages.length === 0 ? (
            <p className="p-8 text-center text-gray-500">No messages</p>
          ) : (
            messages.map((m) => (
              <div
                key={m.id}
                onClick={() => setSelected(m)}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${selected?.id === m.id ? 'bg-violet-50 border-l-2 border-violet-500' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <p className="font-medium text-sm">{m.name}</p>
                  <Badge variant={statusVariant[m.status] || 'secondary'}>{m.status}</Badge>
                </div>
                <p className="text-xs text-gray-500 truncate">{m.email}</p>
              </div>
            ))
          )}
        </div>

        {selected && (
          <div className="rounded-2xl border bg-white p-6">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold text-lg">{selected.name}</h3>
              <Button variant="ghost" size="icon" onClick={() => setDeleteId(selected.id)}>
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            </div>
            <div className="space-y-3 text-sm mb-6">
              <a href={`mailto:${selected.email}`} className="flex items-center gap-2 text-violet-600">
                <Mail className="w-4 h-4" /> {selected.email}
              </a>
              <a href={`tel:${selected.phone}`} className="flex items-center gap-2 text-violet-600">
                <Phone className="w-4 h-4" /> {selected.phone}
              </a>
              <p className="text-gray-600 leading-relaxed pt-2">{selected.message}</p>
              <p className="text-xs text-gray-400">{new Date(selected.createdAt).toLocaleString('en-IN')}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(['new', 'contacted', 'closed'] as const).map((s) => (
                <Button
                  key={s}
                  size="sm"
                  variant={selected.status === s ? 'default' : 'outline'}
                  onClick={() => handleStatus(selected.id, s)}
                >
                  Mark {s}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <DeleteDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)} onConfirm={handleDelete} loading={loading} />
    </div>
  )
}
