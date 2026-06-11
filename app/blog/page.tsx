import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import { getPublishedBlogs } from '@/lib/data'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Blog | FLEX IT SOLUTIONS',
  description: 'Web design tips, technology insights, and growth strategies.',
}

export default async function BlogPage() {
  const blogs = await getPublishedBlogs()

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Link href="/#blog" className="inline-flex items-center gap-2 text-sm text-accent-violet mb-8 hover:text-accent-blue">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <h1 className="font-display text-4xl font-bold text-text-primary mb-4">Blog & Resources</h1>
        <p className="text-text-secondary mb-12">Insights on web design, development, and digital growth.</p>

        <div className="space-y-8">
          {blogs.length === 0 ? (
            <p className="text-text-secondary">No published articles yet. Check back soon!</p>
          ) : (
            blogs.map((blog) => (
              <article key={blog.id} className="group rounded-2xl border border-gray-100 overflow-hidden shadow-soft hover:shadow-card transition">
                <Link href={`/blog/${blog.slug}`} className="block sm:flex">
                  <div className="sm:w-72 h-48 sm:h-auto relative bg-gradient-to-br from-violet-50 to-blue-50 flex-shrink-0">
                    {blog.thumbnail && <Image src={blog.thumbnail} alt="" fill className="object-cover" />}
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-xs font-semibold text-accent-violet">{blog.category}</span>
                    <h2 className="font-display text-xl font-bold text-text-primary mt-2 group-hover:text-accent-violet transition">{blog.title}</h2>
                    <p className="text-text-secondary text-sm mt-2 line-clamp-2">{blog.shortDescription}</p>
                    <div className="flex gap-4 mt-4 text-xs text-text-secondary">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-IN') : ''}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blog.readTime} min</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
