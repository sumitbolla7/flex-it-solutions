'use client'

import { useState } from 'react'
import { AdminHeader } from '@/components/admin/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DeleteDialog } from '@/components/admin/delete-dialog'
import { deleteSubscriber, getAllSubscribersForExport } from '@/lib/actions/newsletter'
import { exportToCSV } from '@/lib/utils'
import { toast } from 'sonner'
import { Copy, Download, Trash2, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { NewsletterSubscriber } from '@prisma/client'

interface NewsletterClientProps {
  subscribers: NewsletterSubscriber[]
  total: number
  pages: number
  currentPage: number
  search?: string
}

export function NewsletterClient({
  subscribers,
  total,
  pages,
  currentPage,
  search: initialSearch,
}: NewsletterClientProps) {
  const router = useRouter()
  const [search, setSearch] = useState(initialSearch || '')
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/admin/newsletter?q=${encodeURIComponent(search)}`)
  }

  const handleExport = async () => {
    const all = await getAllSubscribersForExport()
    const csv = exportToCSV(all, [
      { key: 'email', label: 'Email' },
      { key: 'createdAt', label: 'Subscribed At' },
    ])
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'newsletter-subscribers.csv'
    a.click()
    toast.success('CSV exported')
  }

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    toast.success('Copied to clipboard')
  }

  const handleDelete = async () => {
    if (!deleteId) return
    setLoading(true)
    await deleteSubscriber(deleteId)
    toast.success('Subscriber removed')
    router.refresh()
    setLoading(false)
    setDeleteId(null)
  }

  return (
    <div>
      <AdminHeader
        title="Newsletter"
        description={`${total} subscribers`}
        action={
          <Button variant="outline" onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" /> Export CSV
          </Button>
        }
      />

      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search subscribers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button type="submit" variant="secondary">Search</Button>
      </form>

      <div className="rounded-2xl border bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4 hidden sm:table-cell">Subscribed</th>
              <th className="text-right p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{s.email}</td>
                <td className="p-4 hidden sm:table-cell text-gray-500">
                  {new Date(s.createdAt).toLocaleDateString('en-IN')}
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="icon" onClick={() => copyEmail(s.email)}>
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => setDeleteId(s.id)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              variant={p === currentPage ? 'default' : 'outline'}
              size="sm"
              onClick={() => router.push(`/admin/newsletter?page=${p}${search ? `&q=${search}` : ''}`)}
            >
              {p}
            </Button>
          ))}
        </div>
      )}

      <DeleteDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)} onConfirm={handleDelete} loading={loading} />
    </div>
  )
}
