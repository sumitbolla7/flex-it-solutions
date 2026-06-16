'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Lightbulb } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import GradientBlob from '@/components/ui/GradientBlob'

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
    <section id="about" className="py-24 sm:py-28 relative overflow-hidden section-alt">
      <GradientBlob className="top-0 right-0" color="blue" size="md" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-premium overflow-hidden aspect-[4/3] shadow-card border border-gray-100">
              <div className="w-full h-full bg-gradient-to-br from-violet-50 via-white to-blue-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-violet/20 to-accent-blue/20 mx-auto mb-4 flex items-center justify-center border border-violet-100">
                    <Users className="w-12 h-12 text-accent-violet" />
                  </div>
                  <p className="text-text-primary font-semibold">FLEX IT SOLUTIONS Team</p>
                  <p className="text-text-secondary text-sm mt-1">India</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 glass rounded-2xl p-5 border border-gray-100 shadow-card"
            >
              <div className="flex gap-8">
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-gradient">5+</p>
                  <p className="text-text-secondary text-xs mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-gradient">30+</p>
                  <p className="text-text-secondary text-xs mt-1">Team Members</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="About Us"
              title="Who We Are"
              description="FLEX IT SOLUTIONS is a premium web design and development agency. We build modern, high-performance websites that amplify brand credibility, capture leads, and drive measurable business growth."
              align="left"
              className="mb-8 !text-left [&_p]:mx-0"
            />

            <div className="space-y-6">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-soft card-hover"
                >
                  <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-accent-violet" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{p.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
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
