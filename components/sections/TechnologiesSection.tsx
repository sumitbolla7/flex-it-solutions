'use client'

import { motion } from 'framer-motion'

const technologies = [
  { name: 'React', color: '#61DAFB', letter: 'R', bg: 'from-cyan-500/20 to-cyan-500/5' },
  { name: 'Next.js', color: '#ffffff', letter: 'N', bg: 'from-white/10 to-white/5' },
  { name: 'Node.js', color: '#68A063', letter: 'N', bg: 'from-green-500/20 to-green-500/5' },
  { name: 'Shopify', color: '#96BF48', letter: 'S', bg: 'from-green-400/20 to-green-400/5' },
  { name: 'WordPress', color: '#21759B', letter: 'W', bg: 'from-blue-500/20 to-blue-500/5' },
  { name: 'Framer', color: '#0055FF', letter: 'F', bg: 'from-blue-600/20 to-blue-600/5' },
  { name: 'Firebase', color: '#FFCA28', letter: 'F', bg: 'from-yellow-500/20 to-yellow-500/5' },
  { name: 'Tailwind CSS', color: '#38BDF8', letter: 'T', bg: 'from-sky-500/20 to-sky-500/5' },
  { name: 'TypeScript', color: '#3178C6', letter: 'T', bg: 'from-blue-500/20 to-blue-500/5' },
  { name: 'MongoDB', color: '#47A248', letter: 'M', bg: 'from-green-600/20 to-green-600/5' },
  { name: 'PostgreSQL', color: '#336791', letter: 'P', bg: 'from-blue-700/20 to-blue-700/5' },
  { name: 'Figma', color: '#F24E1E', letter: 'F', bg: 'from-orange-500/20 to-orange-500/5' },
]

export default function TechnologiesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Technologies</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Technologies We Use</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Cutting-edge tools that power fast, scalable, and premium digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`rounded-2xl p-4 border border-white/8 bg-gradient-to-br ${tech.bg} flex flex-col items-center gap-3 card-hover group cursor-default`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold font-display border border-white/10 group-hover:scale-110 transition-transform"
                style={{ color: tech.color, background: `${tech.color}15` }}
              >
                {tech.letter}
              </div>
              <p className="text-white/60 text-xs font-medium text-center group-hover:text-white transition">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
