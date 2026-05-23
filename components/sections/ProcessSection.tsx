'use client'

import { motion } from 'framer-motion'
import { Search, LineChart, PenTool, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    desc: 'We dive deep into your business goals, target audience, competitors, and project requirements to build a solid foundation.',
    color: '#8b5cf6',
    bg: 'bg-purple-500/10 border-purple-500/30',
  },
  {
    icon: LineChart,
    title: 'Strategy',
    desc: 'We craft a comprehensive digital strategy covering sitemap, information architecture, technology stack, and project timeline.',
    color: '#3b82f6',
    bg: 'bg-blue-500/10 border-blue-500/30',
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'High-fidelity wireframes and pixel-perfect UI designs are created with your brand identity and conversion goals in mind.',
    color: '#ec4899',
    bg: 'bg-pink-500/10 border-pink-500/30',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'Clean, semantic, performance-optimized code built with modern frameworks. Regular updates and reviews throughout.',
    color: '#f97316',
    bg: 'bg-orange-500/10 border-orange-500/30',
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'Rigorous testing, final quality checks, and a smooth deployment process to get your website live and performing from day one.',
    color: '#10b981',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">How We Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Process</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A proven 5-step workflow that ensures every project is delivered on time, on budget, and beyond expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center lg:items-center"
              >
                {/* Icon circle */}
                <div className={`relative w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 z-10 ${step.bg}`}>
                  <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  {/* Step number */}
                  <div
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: step.color }}
                  >
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-display text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-[#0f0c1a] to-orange-900/30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/20 rounded-full blur-[100px]" />

          {/* Floating mock UI cards */}
          <div className="absolute left-8 bottom-0 opacity-30 hidden md:block">
            <div className="w-32 h-24 rounded-xl glass border border-purple-500/20 p-3">
              <div className="w-full h-2 bg-purple-500/30 rounded mb-2" />
              <div className="w-3/4 h-2 bg-white/10 rounded mb-2" />
              <div className="w-1/2 h-2 bg-white/10 rounded" />
            </div>
          </div>
          <div className="absolute right-8 top-6 opacity-30 hidden md:block">
            <div className="w-28 h-20 rounded-xl glass border border-orange-500/20 p-3">
              <div className="flex gap-1 mb-2">
                {[40, 60, 80, 55, 90].map((h, i) => (
                  <div key={i} className="flex-1 bg-orange-500/40 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 py-16 px-8 text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Let's Build Your<br />Next Website
            </h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              We create modern websites that increase trust, conversions, and brand value for businesses across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition"
              >
                Schedule Meeting
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold hover:bg-white/5 transition"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
