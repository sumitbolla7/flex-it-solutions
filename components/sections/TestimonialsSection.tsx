'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import type { Testimonial } from '@prisma/client'

const fallbackTestimonials = [
  { clientName: 'Arjun Sharma', designation: 'Founder, TechBridge India', review: 'FLEX IT SOLUTIONS completely transformed our online presence. Our conversions increased immediately after launch.', rating: 5, profileImage: null as string | null },
  { clientName: 'Priya Desai', designation: 'CEO, EduSpark', review: 'Best decision we made! The team delivered beyond our expectations.', rating: 5, profileImage: null },
  { clientName: 'Rohit Kulkarni', designation: 'Director, ShopNest', review: 'Outstanding work on our e-commerce platform. Lightning fast and incredible design.', rating: 5, profileImage: null },
]

const colors = ['from-violet-500 to-blue-500', 'from-blue-500 to-indigo-500', 'from-emerald-500 to-teal-500', 'from-purple-500 to-violet-500', 'from-amber-500 to-orange-500']

function TestimonialCard({
  t,
  color,
}: {
  t: { clientName: string; designation?: string | null; companyName?: string | null; review: string; rating: number; profileImage?: string | null }
  color: string
}) {
  const role = [t.designation, t.companyName].filter(Boolean).join(' @ ') || t.designation

  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] rounded-premium p-7 bg-white/80 backdrop-blur-md border border-gray-100 shadow-soft mx-3">
      <Quote className="w-8 h-8 text-violet-200 mb-4" />
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.rating }).map((_, si) => (
          <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-6">&ldquo;{t.review}&rdquo;</p>
      <div className="flex items-center gap-3">
        {t.profileImage ? (
          <div className="w-11 h-11 rounded-full overflow-hidden relative">
            <Image src={t.profileImage} alt={t.clientName} fill className="object-cover" />
          </div>
        ) : (
          <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm`}>
            {t.clientName.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-text-primary font-semibold text-sm">{t.clientName}</p>
          {role && <p className="text-text-secondary text-xs">{role}</p>}
        </div>
      </div>
    </div>
  )
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
  title?: string
  subtitle?: string
}

export default function TestimonialsSection({
  testimonials: cms = [],
  title = 'What Clients Say',
  subtitle = "Hear directly from the clients whose businesses we've helped transform.",
}: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const items = cms.length > 0 ? cms : fallbackTestimonials
  const doubled = [...items, ...items]

  useEffect(() => {
    const el = scrollRef.current
    if (!el || items.length === 0) return
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
    const resume = () => { animationId = requestAnimationFrame(animate) }
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    return () => {
      cancelAnimationFrame(animationId)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
    }
  }, [items.length])

  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <SectionHeader label="Social Proof" title={title} description={subtitle} />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div ref={scrollRef} className="flex overflow-x-hidden scrollbar-hide py-2">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.clientName}-${i}`} t={t} color={colors[i % colors.length]} />
          ))}
        </div>
      </div>
    </section>
  )
}
