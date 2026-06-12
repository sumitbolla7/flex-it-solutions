'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShoppingCart, GraduationCap, Building2, Palette, RefreshCw, Smartphone } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import GradientBlob from '@/components/ui/GradientBlob'

const services = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    desc: 'High-converting online stores with seamless checkout, inventory management, and payment gateway integrations.',
    gradient: 'from-violet-500/10 to-violet-600/5',
    iconBg: 'bg-violet-100 text-violet-600',
    slug: 'ecommerce-development',
  },
  {
    icon: GraduationCap,
    title: 'Educational Platforms',
    desc: 'Feature-rich LMS platforms, course portals, and student management systems built for scale.',
    gradient: 'from-blue-500/10 to-blue-600/5',
    iconBg: 'bg-blue-100 text-blue-600',
    slug: 'educational-platforms',
  },
  {
    icon: Building2,
    title: 'Custom Business Websites',
    desc: 'Professional business websites that communicate your brand story and drive qualified leads.',
    gradient: 'from-indigo-500/10 to-indigo-600/5',
    iconBg: 'bg-indigo-100 text-indigo-600',
    slug: 'custom-business-websites',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'User-centered design that combines aesthetics with functionality for unforgettable digital experiences.',
    gradient: 'from-purple-500/10 to-purple-600/5',
    iconBg: 'bg-purple-100 text-purple-600',
    slug: 'ui-ux-design',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    desc: 'Transform your outdated website into a modern, conversion-optimized digital powerhouse.',
    gradient: 'from-emerald-500/10 to-emerald-600/5',
    iconBg: 'bg-emerald-100 text-emerald-600',
    slug: 'website-redesign',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Development',
    desc: 'Responsive websites and PWAs built mobile-first to deliver flawless experiences across all devices.',
    gradient: 'from-cyan-500/10 to-cyan-600/5',
    iconBg: 'bg-cyan-100 text-cyan-600',
    slug: 'mobile-first-development',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28 relative overflow-hidden bg-white">
      <GradientBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" size="lg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          label="What We Do"
          title="Services"
          description="From concept to launch, we deliver end-to-end digital solutions that grow your business."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={s.title} href={`/services/${s.slug}`} className="block h-full cursor-pointer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`card-glow-hover relative rounded-premium p-7 bg-gradient-to-br ${s.gradient} bg-white border border-gray-100 shadow-soft card-hover group h-full flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="w-7 h-7" />
                </div>

                <h3 className="font-display text-xl font-semibold text-text-primary mb-3 group-hover:text-gradient transition-colors">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-grow">{s.desc}</p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent-violet opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
