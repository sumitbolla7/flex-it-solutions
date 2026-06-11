import prisma from '@/lib/prisma'
import type { Blog, Portfolio, Testimonial } from '@prisma/client'

export async function getPublishedBlogs(): Promise<Blog[]> {
  try {
    return await prisma.blog.findMany({
      where: { published: true },
      orderBy: [{ featured: 'desc' }, { publishedAt: 'desc' }],
    })
  } catch {
    return []
  }
}

export async function getPublishedPortfolio(): Promise<Portfolio[]> {
  try {
    return await prisma.portfolio.findMany({
      where: { published: true },
      orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
    })
  } catch {
    return []
  }
}

export async function getPublishedTestimonials(): Promise<{
  testimonials: Testimonial[]
  title: string
  subtitle: string
}> {
  try {
    const [testimonials, settings] = await Promise.all([
      prisma.testimonial.findMany({
        where: { published: true },
        orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
      }),
      prisma.siteSettings.findFirst(),
    ])
    return {
      testimonials,
      title: settings?.testimonialTitle || 'What Clients Say',
      subtitle:
        settings?.testimonialSubtitle ||
        "Hear directly from the clients whose businesses we've helped transform.",
    }
  } catch {
    return { testimonials: [], title: 'What Clients Say', subtitle: '' }
  }
}
