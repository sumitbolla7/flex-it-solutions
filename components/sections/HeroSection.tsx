'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Zap } from 'lucide-react'

const stats = [
  { label: 'Lead Gen', value: '+315%', icon: TrendingUp },
  { label: 'Fast Load', value: '52%', icon: Zap },
]

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-sm text-purple-300 font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
            >
              Premium{' '}
              <span className="block">Web Design</span>
              <span className="text-gradient block">Agency</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-md"
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
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="px-7 py-3.5 rounded-full glass border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                View Portfolio
              </button>
            </motion.div>
          </div>

          {/* Right — abstract orb + floating stats */}
          <div className="relative flex justify-center items-center h-[480px]">
            {/* Orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-72 h-72 animate-float"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-ping-slow" />
              <div className="absolute inset-4 rounded-full border border-orange-500/20 animate-ping-slow" style={{ animationDelay: '1s' }} />
              {/* Core */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-black opacity-90" />
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-orange-500/30 to-purple-600/30 blur-xl" />
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center shadow-lg rotate-12">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-3xl -z-10" />
            </motion.div>

            {/* Floating stat cards */}
            {[
              { top: '10%', left: '-5%', label: 'Lead Gen', val: '+315%', color: 'from-purple-600/20 to-purple-600/5' },
              { top: '10%', right: '-5%', label: 'Fast Load', val: '52%', color: 'from-orange-600/20 to-orange-600/5' },
              { bottom: '15%', left: '5%', label: 'Projects Done', val: '100+', color: 'from-pink-600/20 to-pink-600/5' },
              { bottom: '15%', right: '5%', label: 'Happy Clients', val: '80+', color: 'from-blue-600/20 to-blue-600/5' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`absolute glass rounded-xl px-4 py-3 border border-white/10 bg-gradient-to-br ${card.color}`}
                style={{
                  top: card.top,
                  left: card.left,
                  right: card.right,
                  bottom: card.bottom,
                }}
              >
                <p className="text-xl font-bold font-display text-white">{card.val}</p>
                <p className="text-xs text-white/50 mt-0.5">{card.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap gap-8 items-center"
        >
          {[
            { n: '100+', label: 'Projects Delivered' },
            { n: '80+', label: 'Happy Clients' },
            { n: '5+', label: 'Years Experience' },
            { n: '99%', label: 'Satisfaction Rate' },
          ].map((s) => (
            <div key={s.n} className="flex items-center gap-3">
              <span className="font-display text-2xl font-bold text-gradient">{s.n}</span>
              <span className="text-white/50 text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
