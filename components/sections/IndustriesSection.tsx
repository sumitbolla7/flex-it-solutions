'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap, ShoppingCart, Home, Heart,
  DollarSign, User, Rocket, UtensilsCrossed,
  Car, Globe, Briefcase, Camera,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const industries = [
  { icon: GraduationCap, label: 'Education', color: '#7c3aed', gradient: 'from-violet-500/10 to-violet-600/5', textBg: 'bg-violet-50 text-violet-600 border-violet-100' },
  { icon: ShoppingCart, label: 'E-commerce', color: '#2563eb', gradient: 'from-blue-500/10 to-blue-600/5', textBg: 'bg-blue-50 text-blue-600 border-blue-100' },
  { icon: Home, label: 'Real Estate', color: '#4f46e5', gradient: 'from-indigo-500/10 to-indigo-600/5', textBg: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
  { icon: Heart, label: 'Healthcare', color: '#e11d48', gradient: 'from-rose-500/10 to-rose-600/5', textBg: 'bg-rose-50 text-rose-600 border-rose-100' },
  { icon: DollarSign, label: 'Finance', color: '#059669', gradient: 'from-emerald-500/10 to-emerald-600/5', textBg: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  { icon: User, label: 'Personal Brands', color: '#0891b2', gradient: 'from-cyan-500/10 to-cyan-600/5', textBg: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
  { icon: Rocket, label: 'Startups', color: '#d97706', gradient: 'from-amber-500/10 to-amber-600/5', textBg: 'bg-amber-50 text-amber-600 border-amber-100' },
  { icon: UtensilsCrossed, label: 'Restaurants', color: '#ea580c', gradient: 'from-orange-500/10 to-orange-600/5', textBg: 'bg-orange-50 text-orange-600 border-orange-100' },
  { icon: Car, label: 'Automotive', color: '#0284c7', gradient: 'from-sky-500/10 to-sky-600/5', textBg: 'bg-sky-50 text-sky-600 border-sky-100' },
  { icon: Globe, label: 'Travel & Tourism', color: '#0d9488', gradient: 'from-teal-500/10 to-teal-600/5', textBg: 'bg-teal-50 text-teal-600 border-teal-100' },
  { icon: Briefcase, label: 'Consulting', color: '#9333ea', gradient: 'from-purple-500/10 to-purple-600/5', textBg: 'bg-purple-50 text-purple-600 border-purple-100' },
  { icon: Camera, label: 'Creative Agencies', color: '#db2777', gradient: 'from-pink-500/10 to-pink-600/5', textBg: 'bg-pink-50 text-pink-600 border-pink-100' },
]

export default function IndustriesSection() {
  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-white">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-violet-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          label="Verticals"
          title="Industries We Work With"
          description="Solving unique digital challenges for each industry with precision and domain expertise."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`rounded-premium p-6 bg-gradient-to-br ${ind.gradient} bg-white border border-gray-100 shadow-soft flex flex-col items-center gap-4 card-hover group cursor-default h-full justify-center text-center`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${ind.textBg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                <ind.icon className="w-7 h-7" />
              </div>
              <p className="text-text-primary text-sm font-bold tracking-tight group-hover:text-gradient transition duration-300">
                {ind.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
