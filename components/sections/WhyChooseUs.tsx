'use client'

import { motion } from 'framer-motion'
import { Gauge, Search, Smartphone, Target, Cpu, HeadphonesIcon } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const reasons = [
  {
    icon: Gauge,
    title: 'Fast Delivery',
    desc: 'We ship projects on time without sacrificing quality. Typical project delivery in 2-4 weeks.',
    iconBg: 'bg-violet-100 text-violet-600',
  },
  {
    icon: Search,
    title: 'SEO Optimized Websites',
    desc: 'Every website we build follows SEO best practices to rank higher and attract organic traffic.',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Designed for mobile first, then scaled to larger screens for flawless experiences everywhere.',
    iconBg: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Target,
    title: 'Conversion-Focused UI',
    desc: 'Every design decision is made to improve conversions — more leads, more sales, more revenue.',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Cpu,
    title: 'Modern Tech Stack',
    desc: 'We use Next.js, React, Tailwind CSS, and modern tools to build fast, scalable websites.',
    iconBg: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: 'Post-launch support and maintenance to keep your website running smoothly around the clock.',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Why Choose Us"
          description="Companies choose us because we combine design excellence with technical precision to deliver results."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-premium p-7 bg-white border border-gray-100 shadow-soft card-hover group h-full"
            >
              <div className={`w-12 h-12 rounded-xl ${r.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <r.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2 group-hover:text-gradient transition-colors">
                {r.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
