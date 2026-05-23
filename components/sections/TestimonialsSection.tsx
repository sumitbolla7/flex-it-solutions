'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Arjun Sharma',
    role: 'Founder, TechBridge India',
    stars: 5,
    quote: 'FLEX IT SOLUTIONS completely transformed our online presence. Our conversions increased immediately after launch. Best investment we made for our business.',
    initials: 'AS',
    color: 'from-purple-600 to-blue-600',
  },
  {
    name: 'Priya Desai',
    role: 'CEO, EduSpark',
    stars: 5,
    quote: 'Best decision we made! The team delivered beyond our expectations. Our student enrollment doubled within 3 months of the new website going live.',
    initials: 'PD',
    color: 'from-orange-500 to-pink-600',
    active: true,
  },
  {
    name: 'Rohit Kulkarni',
    role: 'Director, ShopNest',
    stars: 5,
    quote: 'Outstanding work on our e-commerce platform. The site is lightning fast, looks incredible, and has directly contributed to a 3x increase in online revenue.',
    initials: 'RK',
    color: 'from-emerald-500 to-cyan-600',
  },
  {
    name: 'Sneha Patil',
    role: 'Marketing Head, GrowthLabs',
    stars: 5,
    quote: 'The attention to detail is unmatched. Every pixel was crafted with purpose. Our brand perception improved dramatically within weeks of the relaunch.',
    initials: 'SP',
    color: 'from-pink-500 to-violet-600',
  },
  {
    name: 'Karan Mehta',
    role: 'Founder, FinTrack',
    stars: 5,
    quote: 'Professional, fast, and results-driven. FLEX IT SOLUTIONS understood our vision instantly and delivered a world-class product on time and within budget.',
    initials: 'KM',
    color: 'from-amber-500 to-orange-600',
  },
]

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(2)
  const [playingIdx, setPlayingIdx] = useState<number | null>(null)

  const prev = () => setActiveIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveIdx((i) => (i + 1) % testimonials.length)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Social Proof</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Video Testimonials</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Hear directly from the clients whose businesses we've helped transform.
          </p>
        </motion.div>

        {/* Cards row */}
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible">
            {testimonials.slice(0, 3).map((t, i) => {
              const isActive = i === 1
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`snap-center flex-shrink-0 w-[280px] lg:w-auto rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isActive
                      ? 'border-purple-500/50 shadow-[0_0_40px_rgba(139,92,246,0.2)]'
                      : 'border-white/8 opacity-75 hover:opacity-100'
                  }`}
                >
                  {/* Video thumbnail */}
                  <div
                    className="relative h-48 flex items-center justify-center cursor-pointer"
                    style={{ background: `linear-gradient(135deg, #1a1030 0%, #08060e 100%)` }}
                    onClick={() => setPlayingIdx(playingIdx === i ? null : i)}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center opacity-90 group-hover:scale-110 transition`}>
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                    <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {t.initials}
                    </div>
                    {playingIdx === i && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <p className="text-white/60 text-sm">Video Testimonial</p>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className={`p-5 ${isActive ? 'bg-[#130e20]' : 'bg-[#0f0c1a]'}`}>
                    <div className="flex mb-3">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      &ldquo;{t.quote.slice(0, 100)}...&rdquo;
                    </p>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500/50 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIdx ? 'w-6 bg-purple-500' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500/50 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
