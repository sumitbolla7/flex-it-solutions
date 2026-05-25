'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import PremiumButton from '@/components/ui/PremiumButton'
import GradientBlob from '@/components/ui/GradientBlob'

const plans = [
  {
    name: 'Starter Website',
    subtitle: 'Perfect for small businesses',
    price: '₹15,000',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form',
      'Google Analytics integration',
      '2 rounds of revisions',
      '1 month support',
    ],
    featured: false,
  },
  {
    name: 'Business Website',
    subtitle: 'Best for growing businesses',
    price: '₹35,000',
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
    featured: true,
  },
  {
    name: 'Premium Custom Website',
    subtitle: 'For enterprises & scale',
    price: '₹75,000',
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
    featured: false,
  },
]

export default function PricingSection() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="pricing" className="py-24 sm:py-28 relative overflow-hidden bg-white">
      <GradientBlob className="top-1/2 right-0" size="lg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          label="Transparent Pricing"
          title="Simple Pricing"
          description="No hidden charges. No surprises. Choose the plan that fits your business goals."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-premium p-8 bg-white transition-all duration-300 h-full flex flex-col ${
                plan.featured
                  ? 'border-2 border-transparent bg-gradient-to-b from-white to-violet-50/30 shadow-glow-lg scale-[1.02] z-10'
                  : 'border border-gray-100 shadow-soft card-hover'
              }`}
              style={
                plan.featured
                  ? {
                      backgroundImage:
                        'linear-gradient(white, white), linear-gradient(135deg, #7c3aed, #2563eb)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                      border: '2px solid transparent',
                    }
                  : undefined
              }
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue text-white text-xs font-bold shadow-glow">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-text-primary mb-1">{plan.name}</h3>
                <p className="text-text-secondary text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-8">
                <span className="font-display text-4xl font-bold text-gradient">{plan.price}</span>
                <span className="text-text-secondary text-sm ml-2">onwards</span>
              </div>

              <ul className="space-y-3.5 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent-violet" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <PremiumButton
                onClick={scrollToContact}
                variant={plan.featured ? 'primary' : 'secondary'}
                className="w-full"
              >
                Get Started
              </PremiumButton>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-secondary text-sm mt-10"
        >
          All prices are starting rates. Final pricing depends on project scope.{' '}
          <button
            onClick={scrollToContact}
            className="text-accent-violet hover:text-accent-blue font-medium underline underline-offset-2"
          >
            Contact us for a custom quote.
          </button>
        </motion.p>
      </div>
    </section>
  )
}
