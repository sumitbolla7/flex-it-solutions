'use client'

import { motion } from 'framer-motion'
import { Search, LineChart, PenTool, Code2, Rocket } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import PremiumButton from '@/components/ui/PremiumButton'

const steps = [
  { icon: Search, title: 'Discovery', desc: 'We dive deep into your business goals, target audience, competitors, and project requirements.', color: '#7c3aed', iconBg: 'bg-violet-100 text-violet-600' },
  { icon: LineChart, title: 'Strategy', desc: 'We craft a comprehensive digital strategy covering sitemap, architecture, and timeline.', color: '#2563eb', iconBg: 'bg-blue-100 text-blue-600' },
  { icon: PenTool, title: 'Design', desc: 'High-fidelity wireframes and pixel-perfect UI designs aligned with your brand identity.', color: '#6366f1', iconBg: 'bg-indigo-100 text-indigo-600' },
  { icon: Code2, title: 'Development', desc: 'Clean, semantic, performance-optimized code built with modern frameworks.', color: '#8b5cf6', iconBg: 'bg-purple-100 text-purple-600' },
  { icon: Rocket, title: 'Launch', desc: 'Rigorous testing and smooth deployment to get your website live from day one.', color: '#059669', iconBg: 'bg-emerald-100 text-emerald-600' },
]

export default function ProcessSection() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="py-24 sm:py-28 relative overflow-hidden section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="How We Work"
          title="Process"
          description="A proven 5-step workflow that ensures every project is delivered on time, on budget, and beyond expectations."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className={`relative w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center mb-5 z-10 shadow-soft`}>
                  <step.icon className="w-6 h-6" />
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: step.color }}
                  >
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-base font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 relative rounded-premium overflow-hidden border border-gray-100 shadow-card"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-200/40 rounded-full blur-[80px]" />

          <div className="relative z-10 py-16 px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Let&apos;s Build Your Next Website
            </h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              We create modern websites that increase trust, conversions, and brand value for businesses across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PremiumButton onClick={scrollToContact}>Schedule Meeting</PremiumButton>
              <PremiumButton onClick={scrollToContact} variant="secondary">
                Get Free Consultation
              </PremiumButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
