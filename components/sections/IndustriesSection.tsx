'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap, ShoppingCart, Home, Heart,
  DollarSign, User, Rocket, UtensilsCrossed,
  Car, Globe, Briefcase, Camera,
} from 'lucide-react'

const industries = [
  { icon: GraduationCap, label: 'Education', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  { icon: ShoppingCart, label: 'E-commerce', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  { icon: Home, label: 'Real Estate', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
  { icon: Heart, label: 'Healthcare', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
  { icon: DollarSign, label: 'Finance', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { icon: User, label: 'Personal Brands', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Rocket, label: 'Startups', color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
  { icon: UtensilsCrossed, label: 'Restaurants', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  { icon: Car, label: 'Automotive', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { icon: Globe, label: 'Travel & Tourism', color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
  { icon: Briefcase, label: 'Consulting', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
  { icon: Camera, label: 'Creative Agencies', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
]

export default function IndustriesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-800/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Verticals</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Industries We Work With</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Solving unique digital challenges for each industry with precision and domain expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`rounded-xl p-5 border ${ind.bg} flex flex-col items-center gap-3 card-hover group cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${ind.bg} group-hover:scale-110 transition-transform`}>
                <ind.icon className={`w-6 h-6 ${ind.color}`} />
              </div>
              <p className="text-white/80 text-sm font-medium text-center group-hover:text-white transition">{ind.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
