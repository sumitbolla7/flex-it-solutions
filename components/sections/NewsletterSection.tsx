'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!email.trim()) { setError('Please enter your email'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Enter a valid email address'); return }
    setError('')
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f30] via-[#130e20] to-[#1a0f18]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-orange-600/10 rounded-full blur-[80px]" />
          <div className="absolute inset-0 border border-purple-500/20 rounded-3xl" />

          <div className="relative z-10 py-12 px-8 text-center">
            <p className="section-label mb-3">Newsletter</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              Get Website Growth Tips
            </h2>
            <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
              Subscribe to receive actionable tips on web design, conversions, and growing your business online. No spam, ever.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-green-400" />
                <p className="text-white font-medium">You're subscribed! Welcome aboard.</p>
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
                    className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-purple-500/60 transition"
                  />
                  {error && <p className="text-red-400 text-xs mt-1 text-left">{error}</p>}
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition flex items-center gap-2 justify-center whitespace-nowrap"
                >
                  {loading
                    ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    : <><Send className="w-4 h-4" />Subscribe</>
                  }
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
