'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface PremiumButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function PremiumButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  type = 'button',
  disabled,
}: PremiumButtonProps) {
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-violet to-accent-blue text-white shadow-soft hover:shadow-glow',
    secondary:
      'bg-white/80 backdrop-blur-md border border-gray-200/80 text-text-primary shadow-soft hover:border-accent-violet/30 hover:shadow-card',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-gray-50',
  }

  const base = clsx(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300',
    sizes[size],
    variants[variant],
    disabled && 'opacity-60 cursor-not-allowed',
    className
  )

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.98 },
  }

  if (href) {
    return (
      <motion.a href={href} className={base} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
