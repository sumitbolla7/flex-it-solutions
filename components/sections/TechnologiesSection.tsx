'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const technologies = [
  { name: 'React', color: '#61DAFB', letter: 'R' },
  { name: 'Next.js', color: '#111827', letter: 'N' },
  { name: 'Node.js', color: '#68A063', letter: 'N' },
  { name: 'Shopify', color: '#96BF48', letter: 'S' },
  { name: 'WordPress', color: '#21759B', letter: 'W' },
  { name: 'Framer', color: '#0055FF', letter: 'F' },
  { name: 'Firebase', color: '#FFCA28', letter: 'F' },
  { name: 'Tailwind CSS', color: '#38BDF8', letter: 'T' },
  { name: 'TypeScript', color: '#3178C6', letter: 'T' },
  { name: 'MongoDB', color: '#47A248', letter: 'M' },
  { name: 'PostgreSQL', color: '#336791', letter: 'P' },
  { name: 'Figma', color: '#F24E1E', letter: 'F' },
]

export default function TechnologiesSection() {
  return (
    <section className="py-24 sm:py-28 relative overflow-hidden section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Technologies"
          title="Technologies We Use"
          description="Cutting-edge tools that power fast, scalable, and premium digital experiences."
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-2xl p-4 bg-white border border-gray-100 shadow-soft flex flex-col items-center gap-3 card-hover group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold font-display border border-gray-100 group-hover:scale-110 transition-transform"
                style={{ color: tech.color, background: `${tech.color}12` }}
              >
                {tech.letter}
              </div>
              <p className="text-text-secondary text-xs font-medium text-center group-hover:text-text-primary transition">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
