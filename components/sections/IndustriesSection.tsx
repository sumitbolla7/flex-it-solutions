'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap, ShoppingCart, Home, Heart,
  DollarSign, User, Rocket, UtensilsCrossed,
  Car, Globe, Briefcase, Camera,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const industries = [
  { icon: GraduationCap, label: 'Education', iconBg: 'bg-violet-100 text-violet-600' },
  { icon: ShoppingCart, label: 'E-commerce', iconBg: 'bg-blue-100 text-blue-600' },
  { icon: Home, label: 'Real Estate', iconBg: 'bg-indigo-100 text-indigo-600' },
  { icon: Heart, label: 'Healthcare', iconBg: 'bg-rose-100 text-rose-600' },
  { icon: DollarSign, label: 'Finance', iconBg: 'bg-emerald-100 text-emerald-600' },
  { icon: User, label: 'Personal Brands', iconBg: 'bg-cyan-100 text-cyan-600' },
  { icon: Rocket, label: 'Startups', iconBg: 'bg-amber-100 text-amber-600' },
  { icon: UtensilsCrossed, label: 'Restaurants', iconBg: 'bg-orange-100 text-orange-600' },
  { icon: Car, label: 'Automotive', iconBg: 'bg-sky-100 text-sky-600' },
  { icon: Globe, label: 'Travel & Tourism', iconBg: 'bg-teal-100 text-teal-600' },
  { icon: Briefcase, label: 'Consulting', iconBg: 'bg-purple-100 text-purple-600' },
  { icon: Camera, label: 'Creative Agencies', iconBg: 'bg-pink-100 text-pink-600' },
]

export default function IndustriesSection() {
  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Verticals"
          title="Industries We Work With"
          description="Solving unique digital challenges for each industry with precision and domain expertise."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-2xl p-5 bg-white border border-gray-100 shadow-soft flex flex-col items-center gap-3 card-hover group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl ${ind.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <ind.icon className="w-6 h-6" />
              </div>
              <p className="text-text-primary text-sm font-medium text-center">{ind.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
