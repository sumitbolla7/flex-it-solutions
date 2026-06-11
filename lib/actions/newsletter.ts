'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function subscribeNewsletter(email: string) {
  const normalized = email.toLowerCase().trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    throw new Error('Invalid email')
  }

  const existing = await prisma.newsletterSubscriber.findUnique({
    where: { email: normalized },
  })
  if (existing) return { success: true, message: 'Already subscribed' }

  await prisma.newsletterSubscriber.create({ data: { email: normalized } })
  revalidatePath('/admin/newsletter')
  return { success: true, message: 'Subscribed successfully' }
}

export async function getSubscribers(search?: string, page = 1, limit = 20) {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')

  const where = search ? { email: { contains: search } } : {}

  const [subscribers, total] = await Promise.all([
    prisma.newsletterSubscriber.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.newsletterSubscriber.count({ where }),
  ])

  return { subscribers, total, pages: Math.ceil(total / limit) }
}

export async function deleteSubscriber(id: string) {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
  await prisma.newsletterSubscriber.delete({ where: { id } })
  revalidatePath('/admin/newsletter')
}

export async function getAllSubscribersForExport() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
  return prisma.newsletterSubscriber.findMany({ orderBy: { createdAt: 'desc' } })
}
