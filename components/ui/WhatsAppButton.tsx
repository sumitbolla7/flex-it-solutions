'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-row-reverse items-center gap-3 select-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 15, scale: 0.95 }}
            className="hidden sm:flex items-center bg-white text-text-primary px-4 py-2.5 rounded-2xl border border-gray-100 shadow-premium text-xs font-semibold whitespace-nowrap relative group"
          >
            <span>Chat with our team! 👋</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-2.5 text-text-secondary hover:text-text-primary font-bold text-xs"
            >
              ×
            </button>
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/919527352323?text=Hi%20FLEX%20IT%20Solutions,%20I'm%20interested%20in%20your%20services!"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-premium transition-transform hover:scale-110 active:scale-95 group"
        id="whatsapp-button"
        onMouseEnter={() => setShowTooltip(false)}
      >
        {/* Glowing Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.592-1.01-5.029-2.85-6.87C16.388 2.093 13.954.08 11.378.08c-5.4.004-9.802 4.402-9.806 9.807-.001 1.62.484 3.208 1.408 4.615l-.993 3.628 3.73-.978-.17-.101zM15.7 12.87c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.45.1-.14.2-.54.68-.66.8-.12.14-.24.15-.44.05a5.57 5.57 0 01-1.64-1.01 6.13 6.13 0 01-1.14-1.42c-.12-.2-.01-.3.09-.4.09-.09.2-.24.3-.36.1-.12.14-.2.2-.33.07-.14.03-.25-.02-.35-.05-.1-.45-1.08-.61-1.48-.16-.39-.32-.34-.45-.34H9.1c-.17 0-.45.06-.68.3-.24.25-.92.9-.92 2.2 0 1.3.95 2.56 1.08 2.73.14.17 1.87 2.85 4.53 4a15.35 15.35 0 001.51.52c.63.2 1.22.17 1.67.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.1-.26-.17-.46-.27z" />
        </svg>
      </a>
    </div>
  )
}
