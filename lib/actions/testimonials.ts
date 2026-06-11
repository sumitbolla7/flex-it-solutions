'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { testimonialSchema, type TestimonialFormData } from '@/lib/validations/testimonial'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')
}

export async function getTestimonials(admin = false) {
  return prisma.testimonial.findMany({
    where: admin ? {} : { published: true },
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
  })
}

export async function getTestimonialById(id: string) {
  return prisma.testimonial.findUnique({ where: { id } })
}

export async function createTestimonial(data: TestimonialFormData) {
  await requireAuth()
  const parsed = testimonialSchema.parse(data)
  const t = await prisma.testimonial.create({ data: parsed })
  revalidatePath('/')
  revalidatePath('/admin/testimonials')
  return t
}

export async function updateTestimonial(id: string, data: TestimonialFormData) {
  await requireAuth()
  const parsed = testimonialSchema.parse(data)
  const t = await prisma.testimonial.update({ where: { id }, data: parsed })
  revalidatePath('/')
  revalidatePath('/admin/testimonials')
  return t
}

export async function deleteTestimonial(id: string) {
  await requireAuth()
  await prisma.testimonial.delete({ where: { id } })
  revalidatePath('/')
  revalidatePath('/admin/testimonials')
}
