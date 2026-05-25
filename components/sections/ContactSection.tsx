'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import PremiumButton from '@/components/ui/PremiumButton'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit number'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleSubmit = async () => {
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = (field: string) =>
    `w-full bg-white border ${
      errors[field] ? 'border-red-300' : 'border-gray-200'
    } rounded-xl px-4 py-3.5 text-text-primary text-sm placeholder:text-text-secondary/60 focus:border-violet-300 transition shadow-soft`

  return (
    <section id="contact" className="py-24 sm:py-28 relative overflow-hidden section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Contact"
          title="Let's Talk About Your Project"
          description="Ready to build something amazing? Fill the form or reach out directly. We respond within 24 hours."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-premium p-8 bg-white border border-gray-100 shadow-card"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
                <p className="text-text-secondary text-sm max-w-xs">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <PremiumButton
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', phone: '', message: '' })
                  }}
                  variant="secondary"
                  className="mt-6"
                >
                  Send Another Message
                </PremiumButton>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <PremiumButton onClick={handleSubmit} disabled={loading} className="w-full">
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </PremiumButton>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="flex-1 rounded-premium overflow-hidden border border-gray-100 min-h-[220px] relative shadow-soft">
              <div className="w-full h-full bg-gradient-to-br from-violet-50 to-blue-50 flex items-center justify-center relative">
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7c3aed" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-violet to-accent-blue flex items-center justify-center shadow-glow">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="glass rounded-xl px-4 py-2">
                    <p className="text-text-primary text-sm font-medium">Pune, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-premium p-6 bg-white border border-gray-100 shadow-soft">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent-violet" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs mb-0.5">Email</p>
                    <a href="mailto:sumitdigitalpartner@gmail.com" className="text-text-primary text-sm hover:text-accent-violet transition truncate block max-w-[180px]">
                      sumitdigitalpartner@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs mb-0.5">Phone</p>
                    <a href="tel:+919527352323" className="text-text-primary text-sm hover:text-accent-blue transition">
                      +91 9527352323
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs mb-0.5">Office</p>
                    <p className="text-text-primary text-sm">Pune, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Twitter className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs mb-0.5">Social</p>
                    <div className="flex items-center gap-3">
                      <a href="#" className="text-text-secondary hover:text-accent-violet transition" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
                      <a href="#" className="text-text-secondary hover:text-accent-violet transition" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
                      <a href="#" className="text-text-secondary hover:text-accent-violet transition" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
