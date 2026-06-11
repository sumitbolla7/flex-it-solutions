import { z } from 'zod'

export const testimonialSchema = z.object({
  clientName: z.string().min(2),
  companyName: z.string().optional().nullable(),
  designation: z.string().optional().nullable(),
  review: z.string().min(10),
  rating: z.coerce.number().min(1).max(5).default(5),
  profileImage: z.string().optional().nullable(),
  companyLogo: z.string().optional().nullable(),
  featured: z.boolean().default(false),
  order: z.coerce.number().default(0),
  published: z.boolean().default(true),
})

export type TestimonialFormData = z.infer<typeof testimonialSchema>
