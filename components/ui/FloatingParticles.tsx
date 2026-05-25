'use client'

import { motion } from 'framer-motion'

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: `${10 + (i * 7) % 80}%`,
  y: `${15 + (i * 11) % 70}%`,
  size: 4 + (i % 3) * 2,
  delay: i * 0.4,
}))

export default function FloatingParticles({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-br from-violet-400/40 to-blue-400/30"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 4 + (p.id % 3),
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
