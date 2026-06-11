'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Pencil, Trash2 } from 'lucide-react'
import { deleteBlog } from '@/lib/actions/blogs'
import { DeleteDialog } from '@/components/admin/delete-dialog'
import { useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import type { Blog } from '@prisma/client'

export function BlogsTable({ blogs }: { blogs: Blog[] }) {
  const router = useRouter()
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    if (!deleteId) return
    setLoading(true)
    try {
      await deleteBlog(deleteId)
      toast.success('Blog deleted')
      router.refresh()
    } catch {
      toast.error('Failed to delete')
    }
    setLoading(false)
    setDeleteId(null)
  }

  if (!blogs.length) {
    return (
      <div className="text-center py-16 rounded-2xl border border-dashed border-gray-200 bg-white">
        <p className="text-gray-500 mb-4">No blogs yet. Create your first article.</p>
        <Button asChild><Link href="/admin/blogs/new">Create Blog</Link></Button>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left p-4 font-medium text-gray-600">Title</th>
                <th className="text-left p-4 font-medium text-gray-600 hidden sm:table-cell">Category</th>
                <th className="text-left p-4 font-medium text-gray-600">Status</th>
                <th className="text-right p-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((b) => (
                <tr key={b.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="p-4">
                    <p className="font-medium text-gray-900">{b.title}</p>
                    <p className="text-xs text-gray-400">/{b.slug}</p>
                  </td>
                  <td className="p-4 hidden sm:table-cell text-gray-500">{b.category || '—'}</td>
                  <td className="p-4">
                    <Badge variant={b.published ? 'success' : 'secondary'}>
                      {b.published ? 'Published' : 'Draft'}
                    </Badge>
                    {b.featured && <Badge className="ml-1">Featured</Badge>}
                  </td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/admin/blogs/${b.id}/edit`}><Pencil className="w-4 h-4" /></Link>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setDeleteId(b.id)}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DeleteDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)} onConfirm={handleDelete} loading={loading} title="Delete this blog?" />
    </>
  )
}
