'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Plus } from 'lucide-react'

const projects = [
  {
    name: 'ChoiceTime',
    url: 'https://www.choicetime.in',
    desc: 'Premium web design agency landing page with 3D visuals and conversion-focused layout.',
    tag: 'Agency Website',
    color: 'from-purple-600/30 to-orange-500/20',
    border: 'hover:border-purple-500/50',
    accent: '#8b5cf6',
  },
  {
    name: 'Nalvik',
    url: 'https://nalvik.com',
    desc: 'SaaS product website with clean UI, feature showcase, and optimized onboarding flow.',
    tag: 'SaaS / Product',
    color: 'from-blue-600/30 to-cyan-500/20',
    border: 'hover:border-blue-500/50',
    accent: '#3b82f6',
  },
  {
    name: 'The Top Percentile',
    url: 'https://thetoppercentile.co.in',
    desc: 'EdTech platform with course listings, student portal, and performance-first architecture.',
    tag: 'EdTech Platform',
    color: 'from-emerald-600/30 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
    accent: '#10b981',
  },
  {
    name: 'Upcoming Project',
    url: '',
    desc: 'Your project could be featured here. Book a free consultation to get started.',
    tag: 'Available',
    color: 'from-white/5 to-white/2',
    border: 'hover:border-white/20',
    accent: '#ffffff',
    placeholder: true,
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Our Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Portfolio</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A selection of websites we've designed and built for clients across India.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden border border-white/8 bg-gradient-to-br ${proj.color} ${proj.border} transition-all duration-300`}
            >
              {/* Mock browser window */}
              <div className="p-5 pb-0">
                <div className="rounded-t-xl overflow-hidden border border-white/10">
                  {/* Browser chrome */}
                  <div className="bg-[#1a1530] px-4 py-2.5 flex items-center gap-2 border-b border-white/8">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    {!proj.placeholder && (
                      <div className="flex-1 mx-3 bg-white/5 rounded-md px-3 py-1 text-xs text-white/30 truncate">
                        {proj.url}
                      </div>
                    )}
                  </div>

                  {/* Content area */}
                  <div
                    className="h-48 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${proj.accent}15 0%, #08060e 100%)` }}
                  >
                    {proj.placeholder ? (
                      <div className="flex flex-col items-center gap-3 text-white/20">
                        <Plus className="w-12 h-12" />
                        <p className="text-sm">Upcoming Client Project</p>
                      </div>
                    ) : (
                      <div className="text-center px-6">
                        <p
                          className="font-display text-3xl font-bold mb-2"
                          style={{ color: proj.accent }}
                        >
                          {proj.name}
                        </p>
                        <p className="text-white/40 text-sm">Premium Website</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full border"
                        style={{ color: proj.accent, borderColor: `${proj.accent}40`, background: `${proj.accent}10` }}
                      >
                        {proj.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white mb-1">{proj.name}</h3>
                    <p className="text-white/50 text-sm">{proj.desc}</p>
                  </div>
                  {!proj.placeholder && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 flex-shrink-0 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
