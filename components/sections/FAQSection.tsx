'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Got Questions?</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Quick answers to the questions we hear most often from clients.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? 'border-purple-500/40 bg-[#130e20]'
                  : 'border-white/8 bg-[#0f0c1a] hover:border-white/15'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-medium text-sm sm:text-base ${open === i ? 'text-white' : 'text-white/80'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-purple-400' : 'text-white/40'
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-white/40 text-sm">
            Still have questions?{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
            >
              Contact us directly
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
