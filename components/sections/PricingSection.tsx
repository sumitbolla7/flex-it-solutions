'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter Website',
    subtitle: 'Perfect for small businesses',
    price: '₹15,000',
    priceUSD: '$180',
    color: 'border-white/10',
    accent: '#8b5cf6',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form',
      'Google Analytics integration',
      '2 rounds of revisions',
      '1 month support',
    ],
    cta: 'Get Started',
    ctaStyle: 'border border-white/20 hover:border-purple-500/50 hover:bg-purple-500/10',
  },
  {
    name: 'Business Website',
    subtitle: 'Best for growing businesses',
    price: '₹35,000',
    priceUSD: '$420',
    color: 'border-purple-500/50',
    accent: '#f97316',
    featured: true,
    features: [
      'Up to 15 pages',
      'Premium UI/UX design',
      'Advanced SEO optimization',
      'Blog / CMS integration',
      'Speed optimization',
      'Social media integration',
      'Unlimited revisions',
      '3 months support',
    ],
    cta: 'Get Started',
    ctaStyle: 'bg-gradient-to-r from-purple-600 to-orange-500 hover:opacity-90',
  },
  {
    name: 'Premium Custom Website',
    subtitle: 'For enterprises & scale',
    price: '₹75,000',
    priceUSD: '$900',
    color: 'border-orange-500/30',
    accent: '#f97316',
    features: [
      'Unlimited pages',
      'Custom web application',
      'E-commerce / LMS ready',
      'Database integration',
      'Advanced animations',
      'Performance audit',
      'Full SEO strategy',
      'Priority 6-month support',
    ],
    cta: 'Get Started',
    ctaStyle: 'bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90',
  },
]

export default function PricingSection() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Transparent Pricing</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Simple Pricing</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            No hidden charges. No surprises. Choose the plan that fits your business goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 border ${plan.color} bg-[#0f0c1a] transition-all duration-300 ${
                plan.featured ? 'shadow-[0_0_60px_rgba(139,92,246,0.2)] scale-[1.02]' : 'hover:border-white/20'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-white/40 text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl font-bold" style={{ color: plan.accent }}>
                  {plan.price}
                </span>
                <span className="text-white/30 text-sm ml-2">onwards</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.accent }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-xl text-white font-semibold text-sm transition ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-sm mt-8"
        >
          All prices are starting rates. Final pricing depends on project scope.{' '}
          <button onClick={scrollToContact} className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
            Contact us for a custom quote.
          </button>
        </motion.p>
      </div>
    </section>
  )
}
