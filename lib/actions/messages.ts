'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function createContactMessage(data: {
  name: string
  email: string
  phone: string
  message: string
}) {
  return prisma.contactMessage.create({
    data: { ...data, status: 'new' },
  })
}

export async function getMessages(search?: string, status?: string, page = 1, limit = 20) {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')

  const where: Record<string, unknown> = {}
  if (status) where.status = status
  if (search) {
    where.OR = [
      { name: { contains: search } },
      { email: { contains: search } },
      { message: { contains: search } },
    ]
  }

  const [messages, total] = await Promise.all([
    prisma.contactMessage.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.contactMessage.count({ where }),
  ])

  return { messages, total, pages: Math.ceil(total / limit) }
}

export async function updateMessageStatus(id: string, status: string) {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
  const msg = await prisma.contactMessage.update({
    where: { id },
    data: { status },
  })
  revalidatePath('/admin/messages')
  return msg
}

export async function deleteMessage(id: string) {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
  await prisma.contactMessage.delete({ where: { id } })
  revalidatePath('/admin/messages')
}

export async function getAllMessagesForExport() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
  return prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } })
}
