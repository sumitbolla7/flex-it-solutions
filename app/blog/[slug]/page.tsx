import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import { getBlogBySlug } from '@/lib/actions/blogs'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug)
  if (!blog || !blog.published) return { title: 'Not Found' }
  return {
    title: blog.seoTitle || blog.title,
    description: blog.metaDescription || blog.shortDescription,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug)
  if (!blog || !blog.published) notFound()

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-accent-violet mb-8">
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>

        {blog.thumbnail && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image src={blog.thumbnail} alt={blog.title} fill className="object-cover" priority />
          </div>
        )}

        <span className="text-sm font-semibold text-accent-violet">{blog.category}</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-3 mb-4 leading-tight">{blog.title}</h1>

        <div className="flex gap-4 text-sm text-text-secondary mb-8 pb-8 border-b border-gray-100">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-IN') : ''}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{blog.readTime} min read</span>
          <span>By {blog.author}</span>
        </div>

        <div
          className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-accent-violet"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
      <Footer />
    </main>
  )
}
