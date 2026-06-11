'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import type { Blog } from '@prisma/client'

const fallbackPosts = [
  {
    title: 'How Premium Web Design Increases Conversions by 240%',
    slug: 'premium-web-design-conversions',
    shortDescription:
      'Discover the design principles that top SaaS companies use to turn visitors into paying customers.',
    category: 'Web Design',
    readTime: 6,
    featured: true,
    publishedAt: new Date('2026-05-12'),
    thumbnail: null as string | null,
  },
]

interface BlogSectionProps {
  blogs?: Blog[]
}

export default function BlogSection({ blogs = [] }: BlogSectionProps) {
  const posts = blogs.length > 0 ? blogs : fallbackPosts
  const featured = posts.find((p) => p.featured) || posts[0]
  const others = posts.filter((p) => p !== featured).slice(0, 2)

  const formatDate = (d: Date | string | null | undefined) =>
    d ? new Date(d).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : ''

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
              {'thumbnail' in featured && featured.thumbnail ? (
                <Image src={featured.thumbnail} alt="" fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl font-bold text-gradient opacity-30">FLEX</span>
                </div>
              )}
              <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-accent-violet border border-violet-100">
                {featured.category || 'Article'}
              </span>
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate('publishedAt' in featured ? featured.publishedAt : null)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {featured.readTime} min read
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-tight">
                {featured.title}
              </h3>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                {'shortDescription' in featured ? featured.shortDescription : ''}
              </p>
              <Link
                href={`/blog/${'slug' in featured ? featured.slug : '#'}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-violet hover:text-accent-blue transition group"
              >
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>

          <div className="lg:col-span-2 flex flex-col gap-6">
            {others.map((post, i) => (
              <motion.article
                key={'slug' in post ? post.slug : i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-premium p-6 bg-white border border-gray-100 shadow-soft card-hover"
              >
                <span className="text-xs font-semibold text-accent-violet uppercase tracking-wide">
                  {post.category || 'Blog'}
                </span>
                <h4 className="font-display text-lg font-bold text-text-primary mt-2 mb-2 leading-snug">
                  {post.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-3">
                  {post.shortDescription}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-accent-violet hover:text-accent-blue"
                >
                  Read more →
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {blogs.length > 0 && (
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-violet hover:text-accent-blue"
            >
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
