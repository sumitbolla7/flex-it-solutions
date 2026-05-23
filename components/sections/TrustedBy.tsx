'use client'

import { motion } from 'framer-motion'

const logos = [
  'Google', 'Amazon', 'Shopify', 'Framer', 'Vercel', 'Notion',
  'Stripe', 'Linear', 'Figma', 'Webflow', 'HubSpot', 'Salesforce',
]

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-[rgba(139,92,246,0.1)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/40 text-sm font-medium uppercase tracking-widest">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-white/30 text-sm">
            <span>50+ Projects Launched</span>
            <span className="text-white/20">•</span>
            <span>8+ Years Experience</span>
            <span className="text-white/20">•</span>
            <span>Clients Across India</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#08060e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#08060e] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap gap-12">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center px-8 py-3 rounded-xl glass border border-white/5 text-white/40 font-medium text-sm hover:text-white/70 hover:border-purple-500/30 transition-all duration-300 cursor-default"
            >
              <span className="font-display font-semibold tracking-wide">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
