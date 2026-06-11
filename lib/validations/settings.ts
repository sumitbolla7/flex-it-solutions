import { z } from 'zod'

export const settingsSchema = z.object({
  companyName: z.string().min(1),
  logo: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  email: z.string().email().optional().or(z.literal('')),
  address: z.string().optional().nullable(),
  instagram: z.string().optional().nullable(),
  linkedin: z.string().optional().nullable(),
  twitter: z.string().optional().nullable(),
  github: z.string().optional().nullable(),
  seoTitle: z.string().optional().nullable(),
  seoDescription: z.string().optional().nullable(),
  footerText: z.string().optional().nullable(),
  testimonialTitle: z.string().optional(),
  testimonialSubtitle: z.string().optional(),
})

export type SettingsFormData = z.infer<typeof settingsSchema>
