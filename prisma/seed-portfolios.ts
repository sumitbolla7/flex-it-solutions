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

const testimonialsData = [
  {
    clientName: 'Dr. Vikram Amale',
    designation: 'Founder',
    companyName: 'The Top Percentile',
    review: 'FLEX IT Solutions built a premium, high-performance educational portal for The Top Percentile. The online course delivery is seamless, and page loads are incredibly fast!',
    rating: 5,
    featured: true,
    published: true,
    order: 1
  },
  {
    clientName: 'Naveen Rawat',
    designation: 'Co-Founder',
    companyName: 'Nalvik',
    review: 'The SaaS landing page designed by FLEX IT Solutions completely transformed our onboarding process. High-fidelity layouts, dark theme UI, and optimized funnel structure led to a 40% increase in signups!',
    rating: 5,
    featured: true,
    published: true,
    order: 2
  },
  {
    clientName: 'Rajesh Shah',
    designation: 'Managing Director',
    companyName: 'ChoiceTime',
    review: "ChoiceTime's new e-commerce storefront is spectacular. The watch collections look incredibly premium, and the high-converting checkout flow has boosted our sales significantly.",
    rating: 5,
    featured: true,
    published: true,
    order: 3
  },
  {
    clientName: 'Preeti Sen',
    designation: 'Founder',
    companyName: 'StylishBubbles',
    review: 'FLEX IT Solutions delivered an elegant, high-converting storefront for StylishBubbles. Our customers love the seamless checkout and clean product presentation.',
    rating: 5,
    featured: true,
    published: true,
    order: 4
  },
  {
    clientName: 'Ananya Roy',
    designation: 'Marketing Director',
    companyName: 'StyleTrending',
    review: 'The contemporary design and fashion catalog layouts built for StyleTrending are beautiful and easy to manage. A truly professional team!',
    rating: 5,
    featured: true,
    published: true,
    order: 5
  }
]

async function main() {
  console.log('Clearing existing portfolios...')
  await prisma.portfolio.deleteMany({})

  console.log('Clearing existing testimonials...')
  await prisma.testimonial.deleteMany({})

  console.log('Seeding portfolio items in specific order...')
  for (const item of portfoliosData) {
    const res = await prisma.portfolio.create({
      data: item
    })
    console.log(`Created portfolio item: ${res.name} (slug: ${res.slug}, orderDate: ${res.createdAt.toISOString()})`)
  }

  console.log('Seeding testimonials related to portfolio items...')
  for (const item of testimonialsData) {
    const res = await prisma.testimonial.create({
      data: item
    })
    console.log(`Created testimonial: ${res.clientName} (${res.companyName})`)
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
