'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Pencil, Trash2, ExternalLink } from 'lucide-react'
import { deletePortfolio } from '@/lib/actions/portfolio'
import { DeleteDialog } from '@/components/admin/delete-dialog'
import { useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import type { Portfolio } from '@prisma/client'

export function PortfolioTable({ projects }: { projects: Portfolio[] }) {
  const router = useRouter()
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    if (!deleteId) return
    setLoading(true)
    try {
      await deletePortfolio(deleteId)
      toast.success('Project deleted')
      router.refresh()
    } catch {
      toast.error('Failed to delete')
    }
    setLoading(false)
    setDeleteId(null)
  }

  if (!projects.length) {
    return (
      <div className="text-center py-16 rounded-2xl border border-dashed border-gray-200 bg-white">
        <p className="text-gray-500 mb-4">No portfolio projects yet.</p>
        <Button asChild><Link href="/admin/portfolio/new">Add Project</Link></Button>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-4">
        {projects.map((p) => (
          <div key={p.id} className="flex gap-4 p-4 rounded-2xl border border-gray-100 bg-white items-center">
            <div className="w-20 h-14 rounded-xl bg-gray-100 overflow-hidden relative flex-shrink-0">
              {p.thumbnail ? (
                <Image src={p.thumbnail} alt="" fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">No img</div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900">{p.name}</p>
              <p className="text-xs text-gray-500 truncate">{p.shortDescription}</p>
              <div className="flex gap-2 mt-1">
                <Badge variant={p.published ? 'success' : 'secondary'}>{p.published ? 'Live' : 'Draft'}</Badge>
                {p.featured && <Badge>Featured</Badge>}
              </div>
            </div>
            <div className="flex gap-1">
              {p.liveUrl && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4" /></a>
                </Button>
              )}
              <Button variant="ghost" size="icon" asChild>
                <Link href={`/admin/portfolio/${p.id}/edit`}><Pencil className="w-4 h-4" /></Link>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setDeleteId(p.id)}>
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <DeleteDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)} onConfirm={handleDelete} loading={loading} />
    </>
  )
}
