import { z } from 'zod'

export const portfolioSchema = z.object({
  name: z.string().min(2, 'Project name required'),
  slug: z.string().min(2, 'Slug required'),
  thumbnail: z.string().optional().nullable(),
  bannerImage: z.string().optional().nullable(),
  shortDescription: z.string().min(10),
  caseStudy: z.string().optional().nullable(),
  liveUrl: z.string().optional().nullable(),
  technologies: z.array(z.string()),
  category: z.string().optional().nullable(),
  clientName: z.string().optional().nullable(),
  completionDate: z.string().optional().nullable(),
  gallery: z.array(z.string()),
  featured: z.boolean(),
  published: z.boolean(),
})

export type PortfolioFormData = z.infer<typeof portfolioSchema>
