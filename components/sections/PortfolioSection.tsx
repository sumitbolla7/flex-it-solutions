'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Plus, ArrowUpRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import GradientBlob from '@/components/ui/GradientBlob'
import PremiumButton from '@/components/ui/PremiumButton'

const projects = [
  {
    name: 'ChoiceTime',
    url: 'https://www.choicetime.in',
    desc: 'Premium web design agency landing page with 3D visuals and conversion-focused layout.',
    tag: 'Agency Website',
    gradient: 'from-violet-100 to-blue-50',
    accent: '#7c3aed',
  },
  {
    name: 'Nalvik',
    url: 'https://nalvik.com',
    desc: 'SaaS product website with clean UI, feature showcase, and optimized onboarding flow.',
    tag: 'SaaS / Product',
    gradient: 'from-blue-100 to-cyan-50',
    accent: '#2563eb',
  },
  {
    name: 'The Top Percentile',
    url: 'https://thetoppercentile.co.in',
    desc: 'EdTech platform with course listings, student portal, and performance-first architecture.',
    tag: 'EdTech Platform',
    gradient: 'from-emerald-100 to-teal-50',
    accent: '#059669',
  },
  {
    name: 'Upcoming Project',
    url: '',
    desc: 'Your project could be featured here. Book a free consultation to get started.',
    tag: 'Available',
    gradient: 'from-gray-50 to-gray-100',
    accent: '#6b7280',
    placeholder: true,
  },
]

export default function PortfolioSection() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

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
          {projects.map((proj, i) => (
            <motion.article
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-premium overflow-hidden bg-white border border-gray-100 shadow-soft card-hover"
            >
              <div className={`relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br ${proj.gradient}`}>
                {proj.placeholder ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-text-secondary">
                    <Plus className="w-14 h-14 mb-3 opacity-40" />
                    <p className="text-sm font-medium">Upcoming Client Project</p>
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <p
                        className="font-display text-4xl sm:text-5xl font-bold opacity-90"
                        style={{ color: proj.accent }}
                      >
                        {proj.name}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                      <span className="text-white text-sm font-medium">{proj.url}</span>
                      {!proj.placeholder && (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition"
                        >
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
                  style={{
                    color: proj.accent,
                    backgroundColor: `${proj.accent}12`,
                    border: `1px solid ${proj.accent}25`,
                  }}
                >
                  {proj.tag}
                </span>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">{proj.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{proj.desc}</p>

                {proj.placeholder ? (
                  <PremiumButton onClick={scrollToContact} variant="secondary" size="sm">
                    Start Your Project
                    <ArrowUpRight className="w-4 h-4" />
                  </PremiumButton>
                ) : (
                  <div className="flex gap-3">
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent-violet hover:text-accent-blue transition"
                    >
                      View Live Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition"
                    >
                      Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
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
