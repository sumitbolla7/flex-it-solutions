'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Users, TrendingUp, Clock } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: 100, suffix: '+', label: 'Projects Completed', color: 'text-purple-400' },
  { icon: Users, value: 80, suffix: '+', label: 'Happy Clients', color: 'text-orange-400' },
  { icon: TrendingUp, value: 240, suffix: '%', label: 'Avg Conversion Growth', color: 'text-pink-400' },
  { icon: Clock, value: 5, suffix: '+', label: 'Years of Experience', color: 'text-blue-400' },
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

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsCounter() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-900/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Our Impact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Stats Counter</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Numbers that speak louder than words — real results for real businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl p-7 border border-white/8 bg-[#0f0c1a] text-center card-hover group"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                <s.icon className={`w-6 h-6 ${s.color}`} />
              </div>
              <p className={`font-display text-4xl font-bold ${s.color} mb-2`}>
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white/50 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
