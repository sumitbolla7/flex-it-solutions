import { getTestimonialById } from '@/lib/actions/testimonials'
import { AdminHeader } from '@/components/admin/header'
import { TestimonialForm } from '@/components/admin/testimonial-form'
import { notFound } from 'next/navigation'

export default async function EditTestimonialPage({ params }: { params: { id: string } }) {
  const testimonial = await getTestimonialById(params.id)
  if (!testimonial) notFound()

  return (
    <div>
      <AdminHeader title="Edit Testimonial" />
      <TestimonialForm testimonial={testimonial} />
    </div>
  )
}
