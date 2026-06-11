'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { blogSchema, type BlogFormData } from '@/lib/validations/blog'
import { slugify, calculateReadTime } from '@/lib/utils'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
}

export async function getBlogs(admin = false) {
  return prisma.blog.findMany({
    where: admin ? {} : { published: true },
    orderBy: [{ featured: 'desc' }, { publishedAt: 'desc' }, { createdAt: 'desc' }],
  })
}

export async function getBlogBySlug(slug: string) {
  return prisma.blog.findUnique({ where: { slug } })
}

export async function getBlogById(id: string) {
  return prisma.blog.findUnique({ where: { id } })
}

export async function createBlog(data: BlogFormData) {
  await requireAuth()
  const parsed = blogSchema.parse(data)
  const slug = parsed.slug || slugify(parsed.title)

  const blog = await prisma.blog.create({
    data: {
      ...parsed,
      slug,
      tags: parsed.tags || [],
      readTime: parsed.readTime || calculateReadTime(parsed.content),
      publishedAt: parsed.published ? new Date() : null,
    },
  })

  revalidatePath('/')
  revalidatePath('/blog')
  revalidatePath('/admin/blogs')
  return blog
}

export async function updateBlog(id: string, data: BlogFormData) {
  await requireAuth()
  const parsed = blogSchema.parse(data)
  const existing = await prisma.blog.findUnique({ where: { id } })

  const blog = await prisma.blog.update({
    where: { id },
    data: {
      ...parsed,
      tags: parsed.tags || [],
      readTime: parsed.readTime || calculateReadTime(parsed.content),
      publishedAt:
        parsed.published && !existing?.publishedAt
          ? new Date()
          : existing?.publishedAt,
    },
  })

  revalidatePath('/')
  revalidatePath('/blog')
  revalidatePath(`/blog/${blog.slug}`)
  revalidatePath('/admin/blogs')
  return blog
}

export async function deleteBlog(id: string) {
  await requireAuth()
  await prisma.blog.delete({ where: { id } })
  revalidatePath('/')
  revalidatePath('/blog')
  revalidatePath('/admin/blogs')
}

export async function toggleBlogPublish(id: string, published: boolean) {
  await requireAuth()
  return prisma.blog.update({
    where: { id },
    data: {
      published,
      publishedAt: published ? new Date() : null,
    },
  })
}
