'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const testimonials = [
  {
    name: 'Arjun Sharma',
    role: 'Founder, TechBridge India',
    stars: 5,
    quote:
      'FLEX IT SOLUTIONS completely transformed our online presence. Our conversions increased immediately after launch. Best investment we made for our business.',
    initials: 'AS',
    color: 'from-violet-500 to-blue-500',
  },
  {
    name: 'Priya Desai',
    role: 'CEO, EduSpark',
    stars: 5,
    quote:
      'Best decision we made! The team delivered beyond our expectations. Our student enrollment doubled within 3 months of the new website going live.',
    initials: 'PD',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Rohit Kulkarni',
    role: 'Director, ShopNest',
    stars: 5,
    quote:
      'Outstanding work on our e-commerce platform. The site is lightning fast, looks incredible, and has directly contributed to a 3x increase in online revenue.',
    initials: 'RK',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Sneha Patil',
    role: 'Marketing Head, GrowthLabs',
    stars: 5,
    quote:
      'The attention to detail is unmatched. Every pixel was crafted with purpose. Our brand perception improved dramatically within weeks of the relaunch.',
    initials: 'SP',
    color: 'from-purple-500 to-violet-500',
  },
  {
    name: 'Karan Mehta',
    role: 'Founder, FinTrack',
    stars: 5,
    quote:
      'Professional, fast, and results-driven. FLEX IT SOLUTIONS understood our vision instantly and delivered a world-class product on time and within budget.',
    initials: 'KM',
    color: 'from-amber-500 to-orange-500',
  },
]

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] rounded-premium p-7 bg-white border border-gray-100 shadow-soft mx-3">
      <Quote className="w-8 h-8 text-violet-200 mb-4" />
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.stars }).map((_, si) => (
          <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div
          className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-text-primary font-semibold text-sm">{t.name}</p>
          <p className="text-text-secondary text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const inView = useInView(scrollRef, { once: true })

  useEffect(() => {
    const el = scrollRef.current
    if (!el || !inView) return
    let animationId: number
    let scrollPos = 0
    const speed = 0.5

    const animate = () => {
      scrollPos += speed
      if (scrollPos >= el.scrollWidth / 2) scrollPos = 0
      el.scrollLeft = scrollPos
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const pause = () => cancelAnimationFrame(animationId)
    const resume = () => {
      animationId = requestAnimationFrame(animate)
    }

    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animationId)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [inView])

  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <SectionHeader
          label="Social Proof"
          title="What Clients Say"
          description="Hear directly from the clients whose businesses we've helped transform."
        />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex overflow-x-hidden scrollbar-hide py-2"
          style={{ scrollBehavior: 'auto' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
