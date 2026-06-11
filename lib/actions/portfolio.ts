'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { portfolioSchema, type PortfolioFormData } from '@/lib/validations/portfolio'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
}

export async function getPortfolios(admin = false) {
  return prisma.portfolio.findMany({
    where: admin ? {} : { published: true },
    orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
  })
}

export async function getPortfolioBySlug(slug: string) {
  return prisma.portfolio.findUnique({ where: { slug } })
}

export async function getPortfolioById(id: string) {
  return prisma.portfolio.findUnique({ where: { id } })
}

export async function createPortfolio(data: PortfolioFormData) {
  await requireAuth()
  const parsed = portfolioSchema.parse({
    ...data,
    liveUrl: data.liveUrl || null,
  })

  const portfolio = await prisma.portfolio.create({
    data: {
      ...parsed,
      liveUrl: parsed.liveUrl || null,
      technologies: parsed.technologies || [],
      gallery: parsed.gallery || [],
      completionDate: parsed.completionDate ? new Date(parsed.completionDate) : null,
    },
  })

  revalidatePath('/')
  revalidatePath('/admin/portfolio')
  return portfolio
}

export async function updatePortfolio(id: string, data: PortfolioFormData) {
  await requireAuth()
  const parsed = portfolioSchema.parse({ ...data, liveUrl: data.liveUrl || null })

  const portfolio = await prisma.portfolio.update({
    where: { id },
    data: {
      ...parsed,
      liveUrl: parsed.liveUrl || null,
      technologies: parsed.technologies || [],
      gallery: parsed.gallery || [],
      completionDate: parsed.completionDate ? new Date(parsed.completionDate) : null,
    },
  })

  revalidatePath('/')
  revalidatePath(`/portfolio/${portfolio.slug}`)
  revalidatePath('/admin/portfolio')
  return portfolio
}

export async function deletePortfolio(id: string) {
  await requireAuth()
  await prisma.portfolio.delete({ where: { id } })
  revalidatePath('/')
  revalidatePath('/admin/portfolio')
}
