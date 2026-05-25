'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const faqs = [
  {
    q: 'How long does a website take?',
    a: 'Most websites are delivered within 2–4 weeks depending on complexity. A simple 5-page business website takes about 2 weeks, while a full e-commerce or LMS platform may take 4–8 weeks. We always provide a detailed timeline before starting.',
  },
  {
    q: 'Do you redesign old websites?',
    a: 'Absolutely! Website redesign is one of our core services. We audit your existing site, identify conversion bottlenecks, and redesign it with a modern look and improved performance while preserving your SEO authority.',
  },
  {
    q: 'Do you provide hosting?',
    a: 'We can assist with hosting setup and recommend the best hosting solutions based on your needs (Vercel, AWS, DigitalOcean, shared hosting). We help configure everything so your site is live and performing optimally.',
  },
  {
    q: 'Will my website be mobile friendly?',
    a: 'Yes — every website we build is 100% mobile-responsive. We follow a mobile-first design approach, ensuring your site looks and works flawlessly on all screen sizes from smartphones to 4K desktops.',
  },
  {
    q: 'Do you offer SEO services?',
    a: 'Yes! All our websites include on-page SEO fundamentals — proper heading structure, meta tags, sitemap, schema markup, and fast loading times. We also offer advanced SEO packages as an add-on service.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes, every project comes with a support period (1–6 months depending on your plan). We offer ongoing maintenance and support packages for updates, security patches, content changes, and performance monitoring.',
  },
  {
    q: 'Can I edit the website later?',
    a: 'Absolutely. If you prefer a CMS-based site, we build it on WordPress, Webflow, or a custom headless CMS so you can manage content yourself. For technical changes, our maintenance plans ensure you always have expert help available.',
  },
  {
    q: 'Will my website be fast and optimized?',
    a: 'Yes — performance is a core priority. We build with Next.js, optimize all images, use lazy loading, implement CDN, minimize JavaScript, and run Lighthouse audits to ensure your site scores 90+ on performance benchmarks.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 sm:py-28 relative overflow-hidden bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Got Questions?"
          title="Frequently Asked Questions"
          description="Quick answers to the questions we hear most often from clients."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`rounded-premium border overflow-hidden transition-all duration-300 ${
                open === i
                  ? 'border-violet-200 bg-violet-50/30 shadow-soft'
                  : 'border-gray-100 bg-white shadow-soft hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left gap-4"
              >
                <span
                  className={`font-medium text-sm sm:text-base pr-4 ${
                    open === i ? 'text-text-primary' : 'text-text-secondary'
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    open === i ? 'bg-violet-100 text-accent-violet' : 'bg-gray-100 text-text-secondary'
                  }`}
                >
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 sm:px-8 pb-6 pt-0">
                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary text-sm mt-10"
        >
          Still have questions?{' '}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-accent-violet hover:text-accent-blue font-medium underline underline-offset-2"
          >
            Contact us directly
          </button>
        </motion.p>
      </div>
    </section>
  )
}
