'use client'

import { motion } from 'framer-motion'

interface GradientBlobProps {
  className?: string
  color?: 'purple' | 'blue' | 'mixed'
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'w-64 h-64',
  md: 'w-96 h-96',
  lg: 'w-[500px] h-[500px]',
}

const colors = {
  purple: 'from-violet-400/30 to-purple-300/20',
  blue: 'from-blue-400/25 to-indigo-300/15',
  mixed: 'from-violet-400/25 via-blue-400/20 to-indigo-300/15',
}

export default function GradientBlob({
  className = '',
  color = 'mixed',
  size = 'md',
}: GradientBlobProps) {
  return (
    <motion.div
      aria-hidden
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.6, 0.85, 0.6],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute rounded-full blur-[100px] bg-gradient-to-br pointer-events-none ${sizes[size]} ${colors[color]} ${className}`}
    />
  )
}
