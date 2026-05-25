'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-14 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
