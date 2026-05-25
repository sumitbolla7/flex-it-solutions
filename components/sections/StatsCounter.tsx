'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Users, TrendingUp, Clock } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const stats = [
  { icon: Briefcase, value: 100, suffix: '+', label: 'Projects Completed', iconBg: 'bg-violet-100 text-violet-600' },
  { icon: Users, value: 80, suffix: '+', label: 'Happy Clients', iconBg: 'bg-blue-100 text-blue-600' },
  { icon: TrendingUp, value: 240, suffix: '%', label: 'Avg Conversion Growth', iconBg: 'bg-indigo-100 text-indigo-600' },
  { icon: Clock, value: 5, suffix: '+', label: 'Years of Experience', iconBg: 'bg-purple-100 text-purple-600' },
]

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <span ref={ref} className="text-gradient">
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className="py-24 sm:py-28 relative overflow-hidden section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Our Impact"
          title="Stats Counter"
          description="Numbers that speak louder than words — real results for real businesses."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-premium p-8 bg-white border border-gray-100 shadow-soft card-hover text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center mx-auto mb-5`}>
                <s.icon className="w-7 h-7" />
              </div>
              <p className="font-display text-4xl font-bold mb-2">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-text-secondary text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
