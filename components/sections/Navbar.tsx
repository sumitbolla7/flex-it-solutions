'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import PremiumButton from '@/components/ui/PremiumButton'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <button onClick={() => handleNav('#home')} className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/logo.svg" alt="FLEX IT logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-text-primary">
              FLEX <span className="text-gradient">IT</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className={`nav-link px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-text-primary active'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          <div className="hidden md:block">
            <PremiumButton onClick={() => handleNav('#contact')} size="md">
              Book a Free Call
            </PremiumButton>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-xl text-text-primary hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-4 right-4 z-40 glass rounded-2xl p-4 md:hidden shadow-card"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3.5 rounded-xl text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-gray-50 text-left transition"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <PremiumButton onClick={() => handleNav('#contact')} className="w-full">
                  Book a Free Call
                </PremiumButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
