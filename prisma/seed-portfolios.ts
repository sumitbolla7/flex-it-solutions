import fs from 'fs'
import path from 'path'
import { PrismaClient } from '@prisma/client'

// Manually load .env file
try {
  const envPath = path.resolve(process.cwd(), '.env')
  if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf-8')
    envFile.split('\n').forEach((line) => {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) return
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx !== -1) {
        const key = trimmed.substring(0, eqIdx).trim()
        let val = trimmed.substring(eqIdx + 1).trim()
        if (val.startsWith('"') && val.endsWith('"')) {
          val = val.substring(1, val.length - 1)
        } else if (val.startsWith("'") && val.endsWith("'")) {
          val = val.substring(1, val.length - 1)
        }
        process.env[key] = val
      }
    })
  }
} catch (e) {
  console.error('Error loading env file:', e)
}

const prisma = new PrismaClient()

const portfoliosData = [
  {
    name: 'Nalvik',
    slug: 'nalvik',
    category: 'SaaS / Product',
    liveUrl: 'https://nalvik.com',
    shortDescription: 'A premium SaaS landing page featuring a clean, responsive layout, dark theme UI, and optimized registration funnel.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Prisma'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    featured: true,
    published: true
  },
  {
    name: 'ChoiceTime',
    slug: 'choicetime',
    category: 'eCommerce / Watch Store',
    liveUrl: 'https://www.choicetime.in/',
    shortDescription: 'An elegant classic and smart watch storefront featuring 3D visuals, high-converting product pages, and dynamic reviews.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
    thumbnail: '/portfolio/choicetime.png',
    featured: true,
    published: true
  },
  {
    name: 'The Top Percentile',
    slug: 'the-toppercentile',
    category: 'EdTech Platform',
    liveUrl: 'https://thetoppercentile.co.in',
    shortDescription: 'A modern, high-performance educational portal with online courses, dashboard utilities, and fast page loads.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    featured: true,
    published: true
  },
  {
    name: 'HotGadget',
    slug: 'hotgadget',
    category: 'eCommerce / Watch Store',
    liveUrl: 'https://hotgadget.in',
    shortDescription: 'A conversion-focused e-commerce storefront for smartwatches and premium gadgets, designed for high performance and trust.',
    technologies: ['Next.js', 'Tailwind CSS', 'Shopify API', 'React'],
    thumbnail: '/portfolio/hotgadget.png',
    featured: true,
    published: true
  },
  {
    name: 'Product Design Portfolio',
    slug: 'product-design-portfolio',
    category: 'Product Design',
    liveUrl: '/portfolio/product-design-portfolio.pdf',
    shortDescription: 'Comprehensive design systems, user journey maps, wireframes, and prototype documentation by Sumit.',
    technologies: ['Figma', 'UI/UX Research', 'Wireframing', 'Product Strategy'],
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80',
    featured: true,
    published: true
  },
  {
    name: 'UI/UX Development Portfolio',
    slug: 'ui-ux-development-portfolio',
    category: 'UI/UX Development',
    liveUrl: '/portfolio/ui-ux-development-portfolio.pdf',
    shortDescription: 'Modern branding identity, creative logo design, and high-fidelity typography styles for digital products.',
    technologies: ['UI/UX Design', 'Figma', 'Branding', 'Visual Identity'],
    thumbnail: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=800&q=80',
    featured: true,
    published: true
  }
]

async function main() {
  console.log('Clearing existing portfolios...')
  await prisma.portfolio.deleteMany({})

  console.log('Seeding portfolio items...')
  for (const item of portfoliosData) {
    const res = await prisma.portfolio.create({
      data: item
    })
    console.log(`Created portfolio item: ${res.name} (slug: ${res.slug})`)
  }
  console.log('Seeding finished successfully!')
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
