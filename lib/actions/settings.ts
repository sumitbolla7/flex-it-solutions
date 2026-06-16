'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { settingsSchema, type SettingsFormData } from '@/lib/validations/settings'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function getSettings() {
  let settings = await prisma.siteSettings.findFirst()
  if (!settings) {
    settings = await prisma.siteSettings.create({
      data: {
        companyName: 'FLEX IT SOLUTIONS',
        email: 'sumitdigitalpartner@gmail.com',
        phone: '+91 9527352323',
        address: 'India',
        testimonialTitle: 'What Clients Say',
        testimonialSubtitle:
          "Hear directly from the clients whose businesses we've helped transform.",
      },
    })
  }
  return settings
}

export async function updateSettings(data: SettingsFormData) {
  const session = await getServerSession(authOptions)
  if (!session) throw new Error('Unauthorized')

  const parsed = settingsSchema.parse(data)
  const existing = await prisma.siteSettings.findFirst()

  const settings = existing
    ? await prisma.siteSettings.update({
        where: { id: existing.id },
        data: { ...parsed, email: parsed.email || null },
      })
    : await prisma.siteSettings.create({
        data: { ...parsed, email: parsed.email || null },
      })

  revalidatePath('/')
  revalidatePath('/admin/settings')
  return settings
}
