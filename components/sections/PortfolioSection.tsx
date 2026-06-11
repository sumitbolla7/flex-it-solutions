'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Plus, ArrowUpRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import GradientBlob from '@/components/ui/GradientBlob'
import PremiumButton from '@/components/ui/PremiumButton'
import type { Portfolio } from '@prisma/client'

const staticProjects = [
  {
    name: 'ChoiceTime',
    slug: 'choicetime',
    liveUrl: 'https://www.choicetime.in',
    shortDescription: 'Premium web design agency landing page with 3D visuals and conversion-focused layout.',
    category: 'Agency Website',
    thumbnail: null as string | null,
    placeholder: false,
  },
  {
    name: 'Nalvik',
    slug: 'nalvik',
    liveUrl: 'https://nalvik.com',
    shortDescription: 'SaaS product website with clean UI, feature showcase, and optimized onboarding flow.',
    category: 'SaaS / Product',
    thumbnail: null,
    placeholder: false,
  },
  {
    name: 'The Top Percentile',
    slug: 'the-top-percentile',
    liveUrl: 'https://thetoppercentile.co.in',
    shortDescription: 'EdTech platform with course listings, student portal, and performance-first architecture.',
    category: 'EdTech Platform',
    thumbnail: null,
    placeholder: false,
  },
]

const accents = ['#7c3aed', '#2563eb', '#059669', '#6b7280']

interface PortfolioSectionProps {
  projects?: Portfolio[]
}

export default function PortfolioSection({ projects: cmsProjects = [] }: PortfolioSectionProps) {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  const items =
    cmsProjects.length > 0
      ? cmsProjects.map((p, i) => ({
          name: p.name,
          slug: p.slug,
          liveUrl: p.liveUrl || '',
          shortDescription: p.shortDescription,
          category: p.category || 'Project',
          thumbnail: p.thumbnail,
          placeholder: false,
          accent: accents[i % accents.length],
        }))
      : [
          ...staticProjects.map((p, i) => ({ ...p, accent: accents[i] })),
          {
            name: 'Upcoming Project',
            slug: '',
            liveUrl: '',
            shortDescription: 'Your project could be featured here. Book a free consultation to get started.',
            category: 'Available',
            thumbnail: null,
            placeholder: true,
            accent: '#6b7280',
          },
        ]

  return (
    <section id="portfolio" className="py-24 sm:py-28 relative overflow-hidden section-alt">
      <GradientBlob className="top-0 left-0" color="purple" size="md" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          label="Our Work"
          title="Portfolio"
          description="A selection of websites we've designed and built for clients across India."
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {items.map((proj, i) => (
            <motion.article
              key={proj.slug || proj.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-premium overflow-hidden bg-white border border-gray-100 shadow-soft card-hover"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-violet-50 to-blue-50">
                {proj.placeholder ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-text-secondary">
                    <Plus className="w-14 h-14 mb-3 opacity-40" />
                    <p className="text-sm font-medium">Upcoming Client Project</p>
                  </div>
                ) : (
                  <>
                    {proj.thumbnail ? (
                      <Image src={proj.thumbnail} alt={proj.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <p className="font-display text-4xl sm:text-5xl font-bold opacity-90" style={{ color: proj.accent }}>
                          {proj.name}
                        </p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                      {proj.liveUrl && <span className="text-white text-sm font-medium">{proj.liveUrl}</span>}
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 sm:p-7">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{ color: proj.accent, backgroundColor: `${proj.accent}12`, border: `1px solid ${proj.accent}25` }}
                >
                  {proj.category}
                </span>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">{proj.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{proj.shortDescription}</p>

                {proj.placeholder ? (
                  <PremiumButton onClick={scrollToContact} variant="secondary" size="sm">
                    Start Your Project <ArrowUpRight className="w-4 h-4" />
                  </PremiumButton>
                ) : (
                  <div className="flex gap-3 flex-wrap">
                    {proj.liveUrl && (
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-violet hover:text-accent-blue transition">
                        View Live Site <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {proj.slug && (
                      <Link href={`/portfolio/${proj.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition">
                        Case Study <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
