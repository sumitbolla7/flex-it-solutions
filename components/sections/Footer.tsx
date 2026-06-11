'use client'

import { Zap, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact Us', href: '#contact' },
  ],
  Services: [
    { label: 'E-commerce', href: '#services' },
    { label: 'Business Websites', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Website Redesign', href: '#services' },
    { label: 'Educational Platforms', href: '#services' },
  ],
  'Social Media': [
    { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'Twitter / X', href: 'https://twitter.com', icon: Twitter },
    { label: 'GitHub', href: 'https://github.com', icon: Github },
  ],
  'Contact Info': [
    { label: 'sumitdigitalpartner@gmail.com', href: 'mailto:sumitdigitalpartner@gmail.com', icon: Mail },
    { label: '+91 9527352323', href: 'tel:+919527352323', icon: Phone },
    { label: 'Pune, Maharashtra, India', href: '#contact', icon: MapPin },
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
    <footer className="relative bg-footer text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          <div className="lg:col-span-2">
            <button onClick={() => scrollTo('#home')} className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-105">
                <img src="/logo.svg" alt="FLEX IT logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-lg">
                FLEX <span className="text-gradient">IT</span> SOLUTIONS
              </span>
            </button>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Premium web design & development agency based in Pune, India. We build websites that grow businesses.
            </p>

            <div className="mb-6">
              <p className="text-white/70 text-sm font-medium mb-3">Newsletter</p>
              <div className="flex gap-2 max-w-xs">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-violet-400/50 transition"
                />
                <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue text-white text-sm font-semibold hover:opacity-90 transition">
                  Join
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href={footerLinks['Social Media'][i]?.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition"
                  aria-label={footerLinks['Social Media'][i]?.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white/90 text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {'icon' in link && link.icon ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault()
                            scrollTo(link.href)
                          }
                        }}
                        className="flex items-center gap-2 text-white/45 hover:text-white/80 text-xs transition"
                      >
                        <link.icon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{link.label}</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-white/45 hover:text-white/80 text-sm transition text-left"
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

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">
            Copyright &copy; {new Date().getFullYear()} FLEX IT SOLUTIONS — All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <button onClick={() => scrollTo('#home')} className="text-white/35 hover:text-white/60 text-sm transition">
              Privacy Policy
            </button>
            <button onClick={() => scrollTo('#contact')} className="text-white/35 hover:text-white/60 text-sm transition">
              Terms of Service
            </button>
            <button onClick={() => scrollTo('#home')} className="text-white/35 hover:text-white/60 text-sm transition">
              Copyright
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
