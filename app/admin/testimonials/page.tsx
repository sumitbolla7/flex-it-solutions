import Link from 'next/link'
import { getTestimonials } from '@/lib/actions/testimonials'
import { AdminHeader } from '@/components/admin/header'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { TestimonialsTable } from '@/components/admin/testimonials-table'

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials(true)

  return (
    <div>
      <AdminHeader
        title="Testimonials"
        description="Manage client reviews and social proof"
        action={
          <Button asChild>
            <Link href="/admin/testimonials/new"><Plus className="w-4 h-4 mr-2" /> Add Testimonial</Link>
          </Button>
        }
      />
      <TestimonialsTable testimonials={testimonials} />
    </div>
  )
}
