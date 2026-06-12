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

// Seeding with descending createdAt dates to enforce exact visual ordering
const portfoliosData = [
  {
    name: 'The Top Percentile',
    slug: 'the-toppercentile',
    category: 'EdTech Platform',
    liveUrl: 'https://thetoppercentile.co.in',
    shortDescription: 'A premium, high-performance educational portal with online courses, dashboard utilities, and fast page loads.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    thumbnail: '/portfolio/thetoppercentile.png',
    featured: true,
    published: true,
    createdAt: new Date('2026-06-12T10:00:00Z')
  },
  {
    name: 'Nalvik',
    slug: 'nalvik',
    category: 'SaaS / Product',
    liveUrl: 'https://nalvik.com',
    shortDescription: 'A premium SaaS landing page featuring a clean, responsive layout, dark theme UI, and optimized registration funnel.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Prisma'],
    thumbnail: '/portfolio/nalvik.png',
    featured: true,
    published: true,
    createdAt: new Date('2026-06-12T09:00:00Z')
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
    published: true,
    createdAt: new Date('2026-06-12T08:00:00Z')
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
    published: true,
    createdAt: new Date('2026-06-12T07:00:00Z')
  },
  {
    name: 'StylishBubbles',
    slug: 'stylishbubbles',
    category: 'eCommerce / Apparel',
    liveUrl: 'https://stylishbubbles.in',
    shortDescription: 'An elegant and premium e-commerce storefront for ethnic apparel and designer wear, featuring a clean layout and seamless shopping experience.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Shopify'],
    thumbnail: '/portfolio/stylishbubbles.png',
    featured: true,
    published: true,
    createdAt: new Date('2026-06-12T06:30:00Z')
  },
  {
    name: 'StyleTrending',
    slug: 'styletrending',
    category: 'eCommerce / Watches & Fashion',
    liveUrl: 'https://styletrending.in',
    shortDescription: 'A contemporary and chic e-commerce store presenting curated watch and fashion collections with high conversion-focused navigation.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'Elementor'],
    thumbnail: '/portfolio/styletrending.png',
    featured: true,
    published: true,
    createdAt: new Date('2026-06-12T06:00:00Z')
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
    published: true,
    createdAt: new Date('2026-06-12T05:30:00Z')
  },
  {
    name: 'UI/UX Development Portfolio',
    slug: 'ui-ux-development-portfolio',
    category: 'UI/UX Development',
    liveUrl: '/portfolio/ui-ux-development-portfolio.pdf',
    shortDescription: 'Modern branding identity, creative logo design, and high-fidelity typography styles for digital products.',
    technologies: ['UI/UX Design', 'Figma', 'Branding', 'Visual Identity'],
    thumbnail: '/portfolio/ui-ux-development-portfolio.png',
    featured: true,
    published: true,
    createdAt: new Date('2026-06-12T05:00:00Z')
  }
]

async function main() {
  console.log('Clearing existing portfolios...')
  await prisma.portfolio.deleteMany({})

  console.log('Seeding portfolio items in specific order...')
  for (const item of portfoliosData) {
    const res = await prisma.portfolio.create({
      data: item
    })
    console.log(`Created portfolio item: ${res.name} (slug: ${res.slug}, orderDate: ${res.createdAt.toISOString()})`)
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
