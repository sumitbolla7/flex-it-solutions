'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { blogSchema, type BlogFormData } from '@/lib/validations/blog'
import { slugify } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { RichTextEditor } from '@/components/admin/rich-text-editor'
import { ImageUpload } from '@/components/admin/image-upload'
import { useState, useEffect, useCallback } from 'react'
import { toast } from 'sonner'
import { createBlog, updateBlog } from '@/lib/actions/blogs'
import { useRouter } from 'next/navigation'
import { Eye } from 'lucide-react'
import type { Blog } from '@prisma/client'

interface BlogFormProps {
  blog?: Blog
}

export function BlogForm({ blog }: BlogFormProps) {
  const router = useRouter()
  const [tagsInput, setTagsInput] = useState(blog?.tags?.join(', ') || '')
  const [saving, setSaving] = useState(false)

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema) as any,
    defaultValues: blog
      ? {
          title: blog.title,
          slug: blog.slug,
          thumbnail: blog.thumbnail,
          shortDescription: blog.shortDescription,
          content: blog.content,
          category: blog.category || '',
          tags: blog.tags,
          seoTitle: blog.seoTitle || '',
          metaDescription: blog.metaDescription || '',
          author: blog.author,
          readTime: blog.readTime,
          featured: blog.featured,
          published: blog.published,
        }
      : {
          title: '',
          slug: '',
          shortDescription: '',
          content: '',
          tags: [],
          author: 'FLEX IT SOLUTIONS',
          readTime: 5,
          featured: false,
          published: false,
        },
  })

  const title = watch('title')
  const content = watch('content')
  const published = watch('published')

  useEffect(() => {
    if (!blog && title) setValue('slug', slugify(title))
  }, [title, blog, setValue])

  const autosave = useCallback(async () => {
    if (!blog?.id || !title) return
    try {
      await updateBlog(blog.id, watch())
    } catch {
      /* silent autosave */
    }
  }, [blog?.id, title, watch])

  useEffect(() => {
    if (!blog?.id) return
    const t = setInterval(autosave, 30000)
    return () => clearInterval(t)
  }, [blog?.id, autosave])

  const onSubmit = async (data: BlogFormData) => {
    setSaving(true)
    try {
      data.tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean)
      if (blog) {
        await updateBlog(blog.id, data)
        toast.success('Blog updated')
      } else {
        await createBlog(data)
        toast.success('Blog created')
      }
      router.push('/admin/blogs')
      router.refresh()
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Failed to save')
    }
    setSaving(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Title *</Label>
          <Input {...register('title')} />
          {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>Slug *</Label>
          <Input {...register('slug')} />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Thumbnail</Label>
        <ImageUpload value={watch('thumbnail')} onChange={(url) => setValue('thumbnail', url)} folder="blogs" />
      </div>

      <div className="space-y-2">
        <Label>Short Description *</Label>
        <Textarea {...register('shortDescription')} rows={3} />
      </div>

      <div className="space-y-2">
        <Label>Content *</Label>
        <RichTextEditor value={watch('content')} onChange={(html) => setValue('content', html)} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Category</Label>
          <Input {...register('category')} placeholder="Web Design" />
        </div>
        <div className="space-y-2">
          <Label>Tags (comma separated)</Label>
          <Input value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Author</Label>
          <Input {...register('author')} />
        </div>
        <div className="space-y-2">
          <Label>Read Time (min)</Label>
          <Input type="number" {...register('readTime')} />
        </div>
        <div className="space-y-2">
          <Label>SEO Title</Label>
          <Input {...register('seoTitle')} />
        </div>
        <div className="space-y-2">
          <Label>Meta Description</Label>
          <Textarea {...register('metaDescription')} rows={2} />
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2">
          <Switch checked={watch('featured')} onCheckedChange={(v) => setValue('featured', v)} />
          <span className="text-sm">Featured</span>
        </label>
        <label className="flex items-center gap-2">
          <Switch checked={published} onCheckedChange={(v) => setValue('published', v)} />
          <span className="text-sm">Published</span>
        </label>
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit" disabled={saving}>{saving ? 'Saving...' : blog ? 'Update Blog' : 'Create Blog'}</Button>
        {blog && watch('slug') && (
          <Button type="button" variant="outline" asChild>
            <a href={`/blog/${watch('slug')}`} target="_blank" rel="noopener noreferrer">
              <Eye className="w-4 h-4 mr-2" /> Preview
            </a>
          </Button>
        )}
        <Button type="button" variant="ghost" onClick={() => router.back()}>Cancel</Button>
      </div>
    </form>
  )
}
