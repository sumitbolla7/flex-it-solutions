'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Zap, CheckCircle2 } from 'lucide-react'

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
    color: 'from-purple-600/20',
    accentColor: '#8b5cf6',
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
    color: 'from-orange-600/20',
    accentColor: '#f97316',
    testimonial: { name: 'Rahul M.', role: 'Founder, EdTech Startup' },
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-900/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Proven Results</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Case Studies</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Real projects, real outcomes. Here's how we've helped businesses transform digitally.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8"
            >
              {/* Left — goals */}
              <div className={`p-8 bg-gradient-to-br ${cs.color} to-[#0f0c1a]`}>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">{cs.subtitle}</p>
                <h3 className="font-display text-xl font-bold text-white mb-3">{cs.client}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{cs.desc}</p>
                <ul className="space-y-2">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: cs.accentColor }} />
                      {r}
                    </li>
                  ))}
                </ul>
                {cs.testimonial && (
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center text-white text-xs font-bold">
                      {cs.testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">{cs.testimonial.name}</p>
                      <p className="text-white/40 text-xs">{cs.testimonial.role}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right — metric */}
              <div className="p-8 bg-[#0d0a18] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white/60 text-sm font-medium">{cs.metricLabel}</p>
                    <span
                      className="text-xs px-2 py-1 rounded-full border"
                      style={{ color: cs.accentColor, borderColor: `${cs.accentColor}30`, background: `${cs.accentColor}10` }}
                    >
                      {cs.metricTag}
                    </span>
                  </div>
                  <p className="font-display text-6xl font-bold mb-1" style={{ color: cs.accentColor }}>
                    {cs.metric}
                  </p>
                  <p className="text-white/40 text-sm">{cs.metricLabel}</p>
                </div>

                {/* Bar chart */}
                <div className="flex items-end gap-2 h-28 mt-6">
                  {cs.barHeights.map((h, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.08 }}
                      className="flex-1 rounded-t-md"
                      style={{
                        background: `linear-gradient(to top, ${cs.accentColor}, ${cs.accentColor}60)`,
                        minHeight: '4px',
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
