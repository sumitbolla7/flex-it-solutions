'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Pencil, Trash2, Star } from 'lucide-react'
import { deleteTestimonial } from '@/lib/actions/testimonials'
import { DeleteDialog } from '@/components/admin/delete-dialog'
import { useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import type { Testimonial } from '@prisma/client'

export function TestimonialsTable({ testimonials }: { testimonials: Testimonial[] }) {
  const router = useRouter()
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    if (!deleteId) return
    setLoading(true)
    try {
      await deleteTestimonial(deleteId)
      toast.success('Deleted')
      router.refresh()
    } catch {
      toast.error('Failed')
    }
    setLoading(false)
    setDeleteId(null)
  }

  return (
    <>
      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="flex gap-4 p-4 rounded-2xl border bg-white items-start">
            <div className="w-12 h-12 rounded-full bg-violet-100 overflow-hidden relative flex-shrink-0">
              {t.profileImage ? (
                <Image src={t.profileImage} alt="" fill className="object-cover" />
              ) : (
                <span className="flex items-center justify-center h-full text-violet-600 font-bold text-sm">
                  {t.clientName.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{t.clientName}</p>
              <p className="text-xs text-gray-500">{t.designation} {t.companyName && `@ ${t.companyName}`}</p>
              <div className="flex gap-0.5 my-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{t.review}</p>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" asChild>
                <Link href={`/admin/testimonials/${t.id}/edit`}><Pencil className="w-4 h-4" /></Link>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setDeleteId(t.id)}>
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
