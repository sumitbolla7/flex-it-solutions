'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Zap, Sparkles } from 'lucide-react'
import PremiumButton from '@/components/ui/PremiumButton'
import GradientBlob from '@/components/ui/GradientBlob'
import GridBackground from '@/components/ui/GridBackground'
import FloatingParticles from '@/components/ui/FloatingParticles'

const floatingCards = [
  { top: '8%', left: '-2%', label: 'Lead Gen', val: '+315%', delay: 0.5 },
  { top: '12%', right: '-2%', label: 'Fast Load', val: '52%', delay: 0.6 },
  { bottom: '18%', left: '0%', label: 'Projects', val: '100+', delay: 0.7 },
  { bottom: '14%', right: '0%', label: 'Clients', val: '80+', delay: 0.8 },
]

const heroStats = [
  { n: '100+', label: 'Projects Delivered' },
  { n: '80+', label: 'Happy Clients' },
  { n: '5+', label: 'Years Experience' },
  { n: '99%', label: 'Satisfaction Rate' },
]

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-white"
    >
      <GridBackground />
      <GradientBlob className="top-20 -left-32" color="purple" size="lg" />
      <GradientBlob className="bottom-20 -right-32" color="blue" size="lg" />
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-100 text-sm font-medium text-accent-violet mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Available for new projects</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-text-primary mb-6"
            >
              Premium{' '}
              <span className="block">Web Design</span>
              <span className="text-gradient block">Agency</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
            >
              We create modern websites that increase trust, conversions, and
              brand value. Based in Pune, serving clients worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <PremiumButton onClick={() => scrollTo('contact')} size="lg">
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </PremiumButton>
              <PremiumButton onClick={() => scrollTo('portfolio')} variant="secondary" size="lg">
                <Play className="w-4 h-4 text-accent-violet" />
                View Portfolio
              </PremiumButton>
            </motion.div>
          </div>

          <div className="relative flex justify-center items-center h-[420px] sm:h-[480px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 animate-float"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-100 to-blue-50 border border-violet-100/80 shadow-glow-lg" />
              <div className="absolute inset-4 rounded-[1.5rem] bg-white/90 backdrop-blur-sm border border-white shadow-card flex items-center justify-center">
                <div className="w-20 h-20 flex items-center justify-center rotate-3 transition-transform hover:scale-105">
                  <img src="/logo.svg" alt="FLEX IT logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet-400/20 to-blue-400/20 blur-2xl -z-10" />
            </motion.div>

            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay }}
                className="absolute glass rounded-2xl px-4 py-3 border border-gray-100 shadow-soft min-w-[120px]"
                style={{
                  top: card.top,
                  left: card.left,
                  right: card.right,
                  bottom: card.bottom,
                }}
              >
                <p className="text-xl font-bold font-display text-gradient">{card.val}</p>
                <p className="text-xs text-text-secondary mt-0.5">{card.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {heroStats.map((s) => (
            <div key={s.n} className="text-center sm:text-left">
              <span className="font-display text-2xl sm:text-3xl font-bold text-gradient block">{s.n}</span>
              <span className="text-text-secondary text-sm mt-1 block">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
