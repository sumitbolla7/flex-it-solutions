'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { settingsSchema, type SettingsFormData } from '@/lib/validations/settings'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ImageUpload } from '@/components/admin/image-upload'
import { updateSettings } from '@/lib/actions/settings'
import { toast } from 'sonner'
import { useState } from 'react'
import type { SiteSettings } from '@prisma/client'

export function SettingsForm({ settings }: { settings: SiteSettings }) {
  const [saving, setSaving] = useState(false)
  const { register, handleSubmit, watch, setValue } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema) as any,
    defaultValues: {
      companyName: settings.companyName,
      logo: settings.logo,
      phone: settings.phone || '',
      email: settings.email || '',
      address: settings.address || '',
      instagram: settings.instagram || '',
      linkedin: settings.linkedin || '',
      twitter: settings.twitter || '',
      github: settings.github || '',
      seoTitle: settings.seoTitle || '',
      seoDescription: settings.seoDescription || '',
      footerText: settings.footerText || '',
      testimonialTitle: settings.testimonialTitle,
      testimonialSubtitle: settings.testimonialSubtitle,
    },
  })

  const onSubmit = async (data: SettingsFormData) => {
    setSaving(true)
    try {
      await updateSettings(data)
      toast.success('Settings saved')
    } catch {
      toast.error('Failed to save')
    }
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-3xl">
      <section className="space-y-4 p-6 rounded-2xl border bg-white">
        <h2 className="font-semibold text-lg">Company Info</h2>
        <div className="space-y-2">
          <Label>Company Name</Label>
          <Input {...register('companyName')} />
        </div>
        <div className="space-y-2">
          <Label>Logo</Label>
          <ImageUpload value={watch('logo')} onChange={(url) => setValue('logo', url)} folder="settings" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input {...register('email')} />
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <Input {...register('phone')} />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Address</Label>
          <Input {...register('address')} />
        </div>
      </section>

      <section className="space-y-4 p-6 rounded-2xl border bg-white">
        <h2 className="font-semibold text-lg">Social Links</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2"><Label>Instagram</Label><Input {...register('instagram')} /></div>
          <div className="space-y-2"><Label>LinkedIn</Label><Input {...register('linkedin')} /></div>
          <div className="space-y-2"><Label>Twitter</Label><Input {...register('twitter')} /></div>
          <div className="space-y-2"><Label>GitHub</Label><Input {...register('github')} /></div>
        </div>
      </section>

      <section className="space-y-4 p-6 rounded-2xl border bg-white">
        <h2 className="font-semibold text-lg">Testimonials Section</h2>
        <div className="space-y-2">
          <Label>Section Title</Label>
          <Input {...register('testimonialTitle')} />
        </div>
        <div className="space-y-2">
          <Label>Section Subtitle</Label>
          <Textarea {...register('testimonialSubtitle')} rows={2} />
        </div>
      </section>

      <section className="space-y-4 p-6 rounded-2xl border bg-white">
        <h2 className="font-semibold text-lg">SEO Defaults</h2>
        <div className="space-y-2">
          <Label>Default SEO Title</Label>
          <Input {...register('seoTitle')} />
        </div>
        <div className="space-y-2">
          <Label>Default Meta Description</Label>
          <Textarea {...register('seoDescription')} rows={3} />
        </div>
        <div className="space-y-2">
          <Label>Footer Text</Label>
          <Textarea {...register('footerText')} rows={2} />
        </div>
      </section>

      <Button type="submit" disabled={saving}>{saving ? 'Saving...' : 'Save Settings'}</Button>
    </form>
  )
}
