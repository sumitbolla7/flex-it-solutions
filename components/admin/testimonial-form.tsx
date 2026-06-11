'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { testimonialSchema, type TestimonialFormData } from '@/lib/validations/testimonial'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { ImageUpload } from '@/components/admin/image-upload'
import { useState } from 'react'
import { toast } from 'sonner'
import { createTestimonial, updateTestimonial } from '@/lib/actions/testimonials'
import { useRouter } from 'next/navigation'
import type { Testimonial } from '@prisma/client'

export function TestimonialForm({ testimonial }: { testimonial?: Testimonial }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  const { register, handleSubmit, watch, setValue } = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema) as any,
    defaultValues: testimonial || {
      clientName: '',
      review: '',
      rating: 5,
      featured: false,
      order: 0,
      published: true,
    },
  })

  const onSubmit = async (data: TestimonialFormData) => {
    setSaving(true)
    try {
      if (testimonial) {
        await updateTestimonial(testimonial.id, data)
        toast.success('Testimonial updated')
      } else {
        await createTestimonial(data)
        toast.success('Testimonial created')
      }
      router.push('/admin/testimonials')
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Failed to save')
    }
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Client Name *</Label>
          <Input {...register('clientName')} />
        </div>
        <div className="space-y-2">
          <Label>Company Name</Label>
          <Input {...register('companyName')} />
        </div>
        <div className="space-y-2">
          <Label>Designation</Label>
          <Input {...register('designation')} />
        </div>
        <div className="space-y-2">
          <Label>Rating (1-5)</Label>
          <Input type="number" min={1} max={5} {...register('rating')} />
        </div>
        <div className="space-y-2">
          <Label>Display Order</Label>
          <Input type="number" {...register('order')} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Profile Image</Label>
          <ImageUpload
            value={watch('profileImage')}
            onChange={(url) => setValue('profileImage', url)}
            folder="testimonials"
          />
        </div>
        <div className="space-y-2">
          <Label>Company Logo</Label>
          <ImageUpload
            value={watch('companyLogo')}
            onChange={(url) => setValue('companyLogo', url)}
            folder="testimonials"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Review *</Label>
        <Textarea {...register('review')} rows={5} />
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2">
          <Switch checked={watch('featured')} onCheckedChange={(v) => setValue('featured', v)} />
          <span className="text-sm">Featured</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch checked={watch('published')} onCheckedChange={(v) => setValue('published', v)} />
          <span className="text-sm">Published</span>
        </label>
      </div>

      <div className="flex gap-3">
        <Button type="submit" disabled={saving}>{saving ? 'Saving...' : testimonial ? 'Update' : 'Create'}</Button>
        <Button type="button" variant="ghost" onClick={() => router.back()}>Cancel</Button>
      </div>
    </form>
  )
}
