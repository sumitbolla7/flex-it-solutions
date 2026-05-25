'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import PremiumButton from '@/components/ui/PremiumButton'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!email.trim()) {
      setError('Please enter your email')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address')
      return
    }
    setError('')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-premium overflow-hidden border border-gray-100 shadow-card"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-violet-200/30 rounded-full blur-[80px]" />

          <div className="relative z-10 py-12 px-8 text-center">
            <p className="section-label mb-3">Newsletter</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-3">
              Get Website Growth Tips
            </h2>
            <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto">
              Subscribe to receive actionable tips on web design, conversions, and growing your business online. No spam, ever.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                <p className="text-text-primary font-medium">You&apos;re subscribed! Welcome aboard.</p>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-text-primary text-sm placeholder:text-text-secondary/60 focus:border-violet-300 transition shadow-soft"
                  />
                  {error && <p className="text-red-500 text-xs mt-1 text-left">{error}</p>}
                </div>
                <PremiumButton onClick={handleSubmit} disabled={loading} className="whitespace-nowrap">
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Subscribe
                    </>
                  )}
                </PremiumButton>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
