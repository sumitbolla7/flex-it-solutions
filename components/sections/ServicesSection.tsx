'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, GraduationCap, Building2, Palette, RefreshCw, Smartphone } from 'lucide-react'

const services = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    desc: 'High-converting online stores with seamless checkout, inventory management, and payment gateway integrations.',
    color: 'from-purple-600/20 to-purple-600/5',
    border: 'hover:border-purple-500/50',
    glow: 'rgba(139,92,246,0.2)',
  },
  {
    icon: GraduationCap,
    title: 'Educational Platforms',
    desc: 'Feature-rich LMS platforms, course portals, and student management systems built for scale.',
    color: 'from-blue-600/20 to-blue-600/5',
    border: 'hover:border-blue-500/50',
    glow: 'rgba(59,130,246,0.2)',
  },
  {
    icon: Building2,
    title: 'Custom Business Websites',
    desc: 'Professional business websites that communicate your brand story and drive qualified leads.',
    color: 'from-orange-600/20 to-orange-600/5',
    border: 'hover:border-orange-500/50',
    glow: 'rgba(249,115,22,0.2)',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'User-centered design that combines aesthetics with functionality for unforgettable digital experiences.',
    color: 'from-pink-600/20 to-pink-600/5',
    border: 'hover:border-pink-500/50',
    glow: 'rgba(236,72,153,0.2)',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    desc: 'Transform your outdated website into a modern, conversion-optimized digital powerhouse.',
    color: 'from-emerald-600/20 to-emerald-600/5',
    border: 'hover:border-emerald-500/50',
    glow: 'rgba(16,185,129,0.2)',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Development',
    desc: 'Responsive websites and PWAs built mobile-first to deliver flawless experiences across all devices.',
    color: 'from-cyan-600/20 to-cyan-600/5',
    border: 'hover:border-cyan-500/50',
    glow: 'rgba(6,182,212,0.2)',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">What We Do</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Services</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            From concept to launch, we deliver end-to-end digital solutions that grow your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 border border-white/8 bg-gradient-to-br ${s.color} card-hover group cursor-default ${s.border}`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)`, border: `1px solid ${s.glow}` }}
              >
                <s.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-gradient-purple transition">
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-2 text-sm text-white/30 group-hover:text-purple-400 transition">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
