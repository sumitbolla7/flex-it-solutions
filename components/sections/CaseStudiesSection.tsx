'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const caseStudies = [
  {
    client: 'E-commerce Brand',
    subtitle: 'Client Goals',
    desc: 'Increase online sales and improve customer retention through a redesigned shopping experience with streamlined checkout and product discovery.',
    results: ['Improved product discoverability', 'Streamlined checkout flow', 'Mobile-first responsive design', 'Integrated analytics tracking'],
    metric: '+240%',
    metricLabel: 'Conversion Growth',
    metricTag: 'Improvements',
    barHeights: [30, 45, 55, 65, 75, 95],
    accentColor: '#7c3aed',
  },
  {
    client: 'EdTech Startup',
    subtitle: 'Client Goals',
    desc: 'Design a high-performance course platform with improved page load speeds, better UX flow, and modern visual design to reduce bounce rates.',
    results: ['3x faster page load speed', 'Modern course catalog UI', 'Improved student dashboard', 'SEO-optimized architecture'],
    metric: '3x',
    metricLabel: 'Performance Faster',
    metricTag: 'Speed',
    barHeights: [20, 35, 50, 60, 75, 88],
    accentColor: '#2563eb',
    testimonial: { name: 'Rahul M.', role: 'Founder, EdTech Startup' },
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Proven Results"
          title="Case Studies"
          description="Real projects, real outcomes. Here's how we've helped businesses transform digitally."
        />

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-2 gap-0 rounded-premium overflow-hidden border border-gray-100 shadow-card"
            >
              <div className="p-8 sm:p-10 bg-gradient-to-br from-violet-50/80 to-white">
                <p className="text-text-secondary text-xs font-semibold uppercase tracking-wider mb-1">{cs.subtitle}</p>
                <h3 className="font-display text-xl font-bold text-text-primary mb-3">{cs.client}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{cs.desc}</p>
                <ul className="space-y-2.5">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-accent-violet" />
                      {r}
                    </li>
                  ))}
                </ul>
                {cs.testimonial && (
                  <div className="mt-6 flex items-center gap-3 pt-6 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-violet to-accent-blue flex items-center justify-center text-white text-xs font-bold">
                      {cs.testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-text-primary text-sm font-medium">{cs.testimonial.name}</p>
                      <p className="text-text-secondary text-xs">{cs.testimonial.role}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 sm:p-10 bg-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-text-secondary text-sm font-medium">{cs.metricLabel}</p>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        color: cs.accentColor,
                        border: `1px solid ${cs.accentColor}30`,
                        background: `${cs.accentColor}10`,
                      }}
                    >
                      {cs.metricTag}
                    </span>
                  </div>
                  <p className="font-display text-5xl sm:text-6xl font-bold text-gradient mb-1">{cs.metric}</p>
                </div>

                <div className="flex items-end gap-2 h-28 mt-8">
                  {cs.barHeights.map((h, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.08 }}
                      className="flex-1 rounded-t-lg min-h-[4px]"
                      style={{
                        background: `linear-gradient(to top, ${cs.accentColor}, ${cs.accentColor}50)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
