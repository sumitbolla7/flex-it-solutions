import { z } from 'zod'

export const blogSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug is required'),
  thumbnail: z.string().optional().nullable(),
  shortDescription: z.string().min(10, 'Short description required'),
  content: z.string().min(20, 'Content must be at least 20 characters'),
  category: z.string().optional().nullable(),
  tags: z.array(z.string()),
  seoTitle: z.string().optional().nullable(),
  metaDescription: z.string().optional().nullable(),
  author: z.string(),
  readTime: z.coerce.number().min(1),
  featured: z.boolean(),
  published: z.boolean(),
})

export type BlogFormData = z.infer<typeof blogSchema>
