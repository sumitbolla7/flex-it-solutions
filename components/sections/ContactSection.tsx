'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react'

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
    `w-full bg-white/4 border ${
      errors[field] ? 'border-red-500/50' : 'border-white/10'
    } rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-purple-500/60 focus:bg-white/5 transition`

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Let's Talk About Your Project</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Ready to build something amazing? Fill the form or reach out directly. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-7 border border-white/8 bg-[#0f0c1a]"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50 text-sm max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                  className="mt-6 px-5 py-2.5 rounded-full border border-purple-500/40 text-purple-400 text-sm hover:bg-purple-500/10 transition"
                >
                  Send Another Message
                </button>
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
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>

          {/* Right — map + contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Map placeholder */}
            <div className="flex-1 rounded-2xl overflow-hidden border border-white/8 min-h-[220px] relative">
              <div className="w-full h-full bg-gradient-to-br from-[#130e20] to-[#08060e] flex items-center justify-center relative">
                {/* Grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* Roads */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#8b5cf6" strokeWidth="1.5" />
                  <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#8b5cf6" strokeWidth="1" />
                  <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#8b5cf6" strokeWidth="1.5" />
                  <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#8b5cf6" strokeWidth="1" />
                  <line x1="10%" y1="0" x2="50%" y2="100%" stroke="#8b5cf6" strokeWidth="0.5" />
                </svg>
                {/* Pin */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                    <MapPin className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div className="glass rounded-lg px-3 py-1.5 border border-purple-500/30">
                    <p className="text-white text-xs font-medium">Pune, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="rounded-2xl p-6 border border-white/8 bg-[#0f0c1a]">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Email</p>
                    <a href="mailto:sumitdigitalpartner@gmail.com" className="text-white/80 text-sm hover:text-white transition truncate block max-w-[160px]">
                      sumitdigitalpartner@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Phone</p>
                    <a href="tel:+919527352323" className="text-white/80 text-sm hover:text-white transition">
                      +91 9527352323
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Office</p>
                    <p className="text-white/80 text-sm">Pune, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Twitter className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Social</p>
                    <div className="flex items-center gap-3">
                      <a href="#" className="text-white/50 hover:text-white transition"><Instagram className="w-4 h-4" /></a>
                      <a href="#" className="text-white/50 hover:text-white transition"><Linkedin className="w-4 h-4" /></a>
                      <a href="#" className="text-white/50 hover:text-white transition"><Twitter className="w-4 h-4" /></a>
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
