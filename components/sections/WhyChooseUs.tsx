'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Gauge, Search, Smartphone, Target, Cpu, HeadphonesIcon } from 'lucide-react'

const reasons = [
  {
    icon: Gauge,
    title: 'Fast Delivery',
    desc: 'We ship projects on time without sacrificing quality. Typical project delivery in 2-4 weeks.',
  },
  {
    icon: Search,
    title: 'SEO Optimized Websites',
    desc: 'Every website we build follows SEO best practices to rank higher and attract organic traffic.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Designed for mobile first, then scaled to larger screens for flawless experiences everywhere.',
  },
  {
    icon: Target,
    title: 'Conversion-Focused UI',
    desc: 'Every design decision is made to improve conversions — more leads, more sales, more revenue.',
  },
  {
    icon: Cpu,
    title: 'Modern Tech Stack',
    desc: 'We use Next.js, React, Tailwind CSS, and modern tools to build fast, scalable websites.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: 'Post-launch support and maintenance to keep your website running smoothly around the clock.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Companies choose us because we combine design excellence with technical precision to deliver results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl p-6 border border-white/8 bg-[#0f0c1a] card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600/30 to-orange-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <r.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition">{r.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
