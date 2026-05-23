'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Clock, Lightbulb } from 'lucide-react'

const points = [
  {
    icon: Users,
    title: 'Mission and Vision',
    desc: 'We drive digital transformation by combining creativity and technology to build websites that truly grow businesses.',
  },
  {
    icon: Clock,
    title: 'Years of Experience',
    desc: 'With 5+ years of hands-on experience, we bring deep expertise and a proven track record across industries.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Philosophy',
    desc: 'Our design-first approach ensures every pixel serves a purpose — beautiful, fast, and built to convert.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {/* Dark gradient image placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-[#1a1030] via-[#0f0c1a] to-[#08060e] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600/40 to-orange-500/40 mx-auto mb-4 flex items-center justify-center border border-purple-500/20">
                    <Users className="w-12 h-12 text-purple-300" />
                  </div>
                  <p className="text-white/40 text-sm">FLEX IT SOLUTIONS Team</p>
                  <p className="text-white/20 text-xs mt-1">Pune, India</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-purple-500/20 rounded-2xl" />
              {/* Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-purple-600/10 blur-xl -z-10" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 glass rounded-xl p-4 border border-white/10"
            >
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-gradient">5+</p>
                  <p className="text-white/40 text-xs mt-1">Years of Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-gradient">30+</p>
                  <p className="text-white/40 text-xs mt-1">Team Members</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-3">About Us</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">Who We Are</h2>
            <p className="text-white/50 leading-relaxed mb-8">
              FLEX IT SOLUTIONS is a Pune-based premium web design and development agency. We build
              modern, high-performance websites that amplify brand credibility, capture leads, and
              drive measurable business growth for clients across India and beyond.
            </p>

            <div className="space-y-6">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <p.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{p.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
