'use client'

import { motion } from 'framer-motion'

const logos = [
  'Google', 'Amazon', 'Shopify', 'Framer', 'Vercel', 'Notion',
  'Stripe', 'Linear', 'Figma', 'Webflow', 'HubSpot', 'Salesforce',
]

export default function TrustedBy() {
  return (
    <section className="py-14 sm:py-16 section-alt relative overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary text-sm font-semibold uppercase tracking-widest">
            Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-3 text-text-secondary text-sm">
            <span>50+ Projects Launched</span>
            <span className="text-gray-300">•</span>
            <span>5+ Years Experience</span>
            <span className="text-gray-300">•</span>
            <span>Clients Across India</span>
          </div>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap gap-8">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center px-8 py-3.5 rounded-2xl bg-white border border-gray-100 text-text-secondary font-medium text-sm shadow-soft hover:text-text-primary hover:border-violet-200 hover:shadow-card transition-all duration-300 cursor-default"
            >
              <span className="font-display font-semibold tracking-wide">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
