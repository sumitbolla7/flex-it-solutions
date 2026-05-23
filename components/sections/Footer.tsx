'use client'

import { motion } from 'framer-motion'
import { Zap, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Contact Us', href: '#contact' },
  ],
  'Services': [
    { label: 'E-commerce', href: '#services' },
    { label: 'Business Websites', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Website Redesign', href: '#services' },
    { label: 'Educational Platforms', href: '#services' },
  ],
  'Social Media': [
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Twitter / X', href: '#', icon: Twitter },
    { label: 'GitHub', href: '#', icon: Github },
  ],
  'Contact Info': [
    { label: 'sumitdigitalpartner@gmail.com', href: 'mailto:sumitdigitalpartner@gmail.com', icon: Mail },
    { label: '+91 9527352323', href: 'tel:+919527352323', icon: Phone },
    { label: 'Pune, Maharashtra, India', href: '#', icon: MapPin },
  ],
}

export default function Footer() {
  const scrollTo = (href: string) => {
    if (!href.startsWith('#')) return
    const id = href.replace('#', '')
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/6 bg-[#06040c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        {/* Top */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={() => scrollTo('#home')} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg">
                FLEX <span className="text-gradient">IT</span> SOLUTIONS
              </span>
            </button>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              Premium web design & development agency based in Pune, India. We build websites that grow businesses.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white/80 text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {'icon' in link && link.icon ? (
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-white/40 hover:text-white/70 text-xs transition"
                      >
                        <link.icon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{link.label}</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-white/40 hover:text-white/70 text-sm transition text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            Copyright &copy; {new Date().getFullYear()} FLEX IT SOLUTIONS — All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition">Terms of Service</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition">Copyright</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
