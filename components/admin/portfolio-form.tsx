'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { portfolioSchema, type PortfolioFormData } from '@/lib/validations/portfolio'
import { slugify } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { RichTextEditor } from '@/components/admin/rich-text-editor'
import { ImageUpload } from '@/components/admin/image-upload'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { createPortfolio, updatePortfolio } from '@/lib/actions/portfolio'
import { useRouter } from 'next/navigation'
import type { Portfolio } from '@prisma/client'

interface PortfolioFormProps {
  project?: Portfolio
}

export function PortfolioForm({ project }: PortfolioFormProps) {
  const router = useRouter()
  const [techInput, setTechInput] = useState(project?.technologies?.join(', ') || '')
  const [gallery, setGallery] = useState<string[]>(project?.gallery || [])
  const [saving, setSaving] = useState(false)

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<PortfolioFormData>({
    resolver: zodResolver(portfolioSchema) as any,
    defaultValues: project
      ? {
          name: project.name,
          slug: project.slug,
          thumbnail: project.thumbnail,
          bannerImage: project.bannerImage,
          shortDescription: project.shortDescription,
          caseStudy: project.caseStudy || '',
          liveUrl: project.liveUrl || '',
          category: project.category || '',
          clientName: project.clientName || '',
          completionDate: project.completionDate
            ? new Date(project.completionDate).toISOString().split('T')[0]
            : '',
          gallery: project.gallery,
          technologies: project.technologies,
          featured: project.featured,
          published: project.published,
        }
      : {
          name: '',
          slug: '',
          shortDescription: '',
          caseStudy: '',
          technologies: [],
          gallery: [],
          featured: false,
          published: true,
        },
  })

  const name = watch('name')

  useEffect(() => {
    if (!project && name) setValue('slug', slugify(name))
  }, [name, project, setValue])

  const onSubmit = async (data: PortfolioFormData) => {
    setSaving(true)
    try {
      data.technologies = techInput.split(',').map((t) => t.trim()).filter(Boolean)
      data.gallery = gallery
      if (project) {
        await updatePortfolio(project.id, data)
        toast.success('Project updated')
      } else {
        await createPortfolio(data)
        toast.success('Project created')
      }
      router.push('/admin/portfolio')
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Failed to save')
    }
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Project Name *</Label>
          <Input {...register('name')} />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>Slug *</Label>
          <Input {...register('slug')} />
        </div>
        <div className="space-y-2">
          <Label>Client Name</Label>
          <Input {...register('clientName')} />
        </div>
        <div className="space-y-2">
          <Label>Category</Label>
          <Input {...register('category')} placeholder="SaaS / EdTech" />
        </div>
        <div className="space-y-2">
          <Label>Live URL</Label>
          <Input {...register('liveUrl')} placeholder="https://" />
        </div>
        <div className="space-y-2">
          <Label>Completion Date</Label>
          <Input type="date" {...register('completionDate')} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Thumbnail</Label>
          <ImageUpload value={watch('thumbnail')} onChange={(url) => setValue('thumbnail', url)} folder="portfolio" />
        </div>
        <div className="space-y-2">
          <Label>Banner Image</Label>
          <ImageUpload value={watch('bannerImage')} onChange={(url) => setValue('bannerImage', url)} folder="portfolio" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Gallery Images</Label>
        <ImageUpload multiple values={gallery} onMultipleChange={setGallery} folder="portfolio" />
      </div>

      <div className="space-y-2">
        <Label>Short Description *</Label>
        <Textarea {...register('shortDescription')} rows={3} />
      </div>

      <div className="space-y-2">
        <Label>Case Study</Label>
        <RichTextEditor
          value={watch('caseStudy') || ''}
          onChange={(html) => setValue('caseStudy', html)}
        />
      </div>

      <div className="space-y-2">
        <Label>Technologies (comma separated)</Label>
        <Input value={techInput} onChange={(e) => setTechInput(e.target.value)} />
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
        <Button type="submit" disabled={saving}>{saving ? 'Saving...' : project ? 'Update' : 'Create'}</Button>
        <Button type="button" variant="ghost" onClick={() => router.back()}>Cancel</Button>
      </div>
    </form>
  )
}
