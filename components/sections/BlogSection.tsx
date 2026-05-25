'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const posts = [
  {
    title: 'How Premium Web Design Increases Conversions by 240%',
    excerpt:
      'Discover the design principles that top SaaS companies use to turn visitors into paying customers. From typography to micro-interactions, every detail matters.',
    date: 'May 12, 2026',
    readTime: '6 min read',
    category: 'Web Design',
    featured: true,
  },
  {
    title: 'Next.js vs WordPress: Which Stack Is Right for Your Business?',
    excerpt:
      'A practical comparison for Indian businesses looking to build or redesign their website in 2026.',
    date: 'Apr 28, 2026',
    readTime: '8 min read',
    category: 'Technology',
    featured: false,
  },
  {
    title: 'Mobile-First Design: Why It Matters More Than Ever',
    excerpt:
      'Over 70% of Indian users browse on mobile. Here is how we build sites that perform flawlessly on every device.',
    date: 'Apr 15, 2026',
    readTime: '5 min read',
    category: 'UX Design',
    featured: false,
  },
]

export default function BlogSection() {
  const featured = posts.find((p) => p.featured)!
  const others = posts.filter((p) => !p.featured)

  return (
    <section id="blog" className="py-24 sm:py-28 relative overflow-hidden section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Insights"
          title="Blog & Resources"
          description="Actionable tips on web design, conversions, and growing your business online."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-premium overflow-hidden bg-white border border-gray-100 shadow-card card-hover"
          >
            <div className="relative h-56 sm:h-72 lg:h-80 bg-gradient-to-br from-violet-100 via-blue-50 to-indigo-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl font-bold text-gradient opacity-30">FLEX</span>
              </div>
              <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-accent-violet border border-violet-100">
                {featured.category}
              </span>
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {featured.readTime}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-tight">
                {featured.title}
              </h3>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                {featured.excerpt}
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-accent-violet hover:text-accent-blue transition group">
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.article>

          <div className="lg:col-span-2 flex flex-col gap-6">
            {others.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-premium p-6 bg-white border border-gray-100 shadow-soft card-hover flex flex-col sm:flex-row lg:flex-col gap-5"
              >
                <div className="w-full sm:w-32 lg:w-full h-32 rounded-2xl bg-gradient-to-br from-gray-50 to-violet-50 flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-xs font-semibold text-accent-violet uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h4 className="font-display text-lg font-bold text-text-primary mt-2 mb-2 leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
