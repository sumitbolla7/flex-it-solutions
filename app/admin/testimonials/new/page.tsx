import { AdminHeader } from '@/components/admin/header'
import { TestimonialForm } from '@/components/admin/testimonial-form'

export default function NewTestimonialPage() {
  return (
    <div>
      <AdminHeader title="Add Testimonial" />
      <TestimonialForm />
    </div>
  )
}
