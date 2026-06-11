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
    name: 'TickNTrack',
    slug: 'tickntrack',
    category: 'eCommerce / Watch Store',
    liveUrl: 'https://tickntrack.in',
    shortDescription: 'An elegant e-commerce site for luxury timepieces with custom order tracking and advanced product filtering.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Framer Motion'],
    thumbnail: '/portfolio/tickntrack.png',
    featured: true,
    published: true
  },
  {
    name: 'StyleTrending',
    slug: 'styletrending',
    category: 'eCommerce / Fashion',
    liveUrl: 'https://styletrending.in',
    shortDescription: 'A highly responsive fashion clothing storefront with immersive visual displays and conversion-optimized checkout.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Prisma'],
    thumbnail: '/portfolio/styletrending.png',
    featured: true,
    published: true
  },
  {
    name: 'ChoiceTime',
    slug: 'choicetime',
    category: 'eCommerce / Watch Store',
    liveUrl: 'https://www.choicetime.in/',
    shortDescription: 'A premium classic and smart watch storefront featuring 3D visuals, high-converting product pages, and dynamic reviews.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
    thumbnail: '/portfolio/choicetime.png',
    featured: true,
    published: true
  },
  {
    name: 'StylishBubbles',
    slug: 'stylishbubbles',
    category: 'eCommerce / Fashion',
    liveUrl: 'https://stylishbubbles.in',
    shortDescription: 'A trendy apparel and accessories storefront featuring creative bubble-themed layouts and optimized checkout flows.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    thumbnail: '/portfolio/stylishbubbles.png',
    featured: false,
    published: true
  },
  {
    name: 'SaariSanskar',
    slug: 'saarisanskar',
    category: 'eCommerce / Ethnic Wear',
    liveUrl: 'https://saarisanskar.in',
    shortDescription: 'A beautiful e-commerce platform for ethnic wear and traditional sarees, combining rich heritage visuals with performance.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB'],
    thumbnail: '/portfolio/saarisanskar.png',
    featured: false,
    published: true
  },
  {
    name: 'DynamicWorld',
    slug: 'dynamicworld',
    category: 'Business Website',
    liveUrl: 'https://dynamicworld.in',
    shortDescription: 'A corporate service portal and branding showcase for a global digital consultancy and software services agency.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    featured: false,
    published: true
  },
  {
    name: 'DankaChaat',
    slug: 'dankachaat',
    category: 'Food & Beverage',
    liveUrl: 'https://dankachaat.com',
    shortDescription: 'A delicious online food ordering and delivery web portal for gourmet Indian snacks and street food.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Express'],
    thumbnail: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80',
    featured: false,
    published: true
  },
  {
    name: 'KidzFa',
    slug: 'kidzfa',
    category: 'eCommerce / Kids Wear',
    liveUrl: 'https://kidzfa.in',
    shortDescription: 'A playful, secure e-commerce storefront for children\'s fashion wear and accessories.',
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'Shopify API'],
    thumbnail: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    published: true
  },
  {
    name: 'ShopzyFashion',
    slug: 'shopzyfashion',
    category: 'eCommerce / Fashion',
    liveUrl: 'https://shopzyfashion.in',
    shortDescription: 'A sleek multi-brand clothing store featuring high-fidelity carousels, size guides, and conversion optimization.',
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'Prisma'],
    thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    featured: false,
    published: true
  },
  {
    name: 'Product Design Portfolio',
    slug: 'product-design-portfolio',
    category: 'Product Design',
    liveUrl: '/portfolio/product-design-portfolio.pdf',
    shortDescription: 'Comprehensive design systems, user journey maps, wireframes, and prototype documentation by Sumit.',
    technologies: ['Figma', 'UI/UX Research', 'Wireframing', 'Product Strategy'],
    thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
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
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    featured: true,
    published: true
  }
]

async function main() {
  console.log('Seeding portfolio items...')
  for (const item of portfoliosData) {
    const res = await prisma.portfolio.upsert({
      where: { slug: item.slug },
      update: {
        name: item.name,
        category: item.category,
        liveUrl: item.liveUrl,
        shortDescription: item.shortDescription,
        technologies: item.technologies,
        thumbnail: item.thumbnail,
        featured: item.featured,
        published: item.published
      },
      create: {
        name: item.name,
        slug: item.slug,
        category: item.category,
        liveUrl: item.liveUrl,
        shortDescription: item.shortDescription,
        technologies: item.technologies,
        thumbnail: item.thumbnail,
        featured: item.featured,
        published: item.published
      }
    })
    console.log(`Upserted portfolio item: ${res.name} (slug: ${res.slug})`)
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
