import React from 'react'
import { Layout, Figma, Layers, Lightbulb, CheckSquare, Palette } from 'lucide-react'

interface TechBadgeProps {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  const norm = name.toLowerCase().trim()

  // SVG Paths for Brand Logos
  let logo: React.ReactNode = null

  if (norm.includes('react')) {
    logo = (
      <svg className="w-3.5 h-3.5 text-[#61dafb] animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" opacity="0.8"/>
      </svg>
    )
  } else if (norm === 'next.js' || norm === 'nextjs') {
    logo = (
      <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.83 14.5L12 11V16H10.5V8H12l4.83 8.5zM13.5 8h1.5v6.5h-1.5z"/>
      </svg>
    )
  } else if (norm.includes('tailwind')) {
    logo = (
      <svg className="w-3.5 h-3.5 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6.036c-2.286 0-3.428 1.143-3.428 3.428 0 2.286 1.142 3.428 3.428 3.428 2.286 0 3.428-1.142 3.428-3.428 0-2.286-1.142-3.428-3.428-3.428zm0 5.486c-.762 0-1.143-.381-1.143-1.143 0-.762.381-1.143 1.143-1.143.762 0 1.143.381 1.143 1.143 0 .762-.381 1.143-1.143 1.143zm-6.857 2.743c-2.286 0-3.428 1.143-3.428 3.428 0 2.286 1.142 3.428 3.428 3.428 2.286 0 3.428-1.142 3.428-3.428 0-2.286-1.142-3.428-3.428-3.428zm0 5.486c-.762 0-1.143-.381-1.143-1.143 0-.762.381-1.143 1.143-1.143.762 0 1.143.381 1.143 1.143 0 .762-.381 1.143-1.143 1.143z"/>
      </svg>
    )
  } else if (norm.includes('shopify')) {
    logo = (
      <svg className="w-3.5 h-3.5 text-[#96bf48]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.01 7.21l-3.32-3.32a.96.96 0 00-.68-.28H9a.96.96 0 00-.68.28L5 7.21a.97.97 0 00-.28.69v8.2a1.94 1.94 0 001.94 1.94h10.68a1.94 1.94 0 001.94-1.94v-8.2a.97.97 0 00-.27-.69zM9.9 5.6h4.2l1.62 1.62H8.28L9.9 5.6zm7.14 10.5a.94.94 0 01-.94.94H5.9a.94.94 0 01-.94-.94V8.82h12.08v7.28z"/>
      </svg>
    )
  } else if (norm.includes('wordpress')) {
    logo = (
      <svg className="w-3.5 h-3.5 text-[#21759b]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.158 12.786l-2.698 7.84c1.77-.48 3.32-1.46 4.47-2.77-.12-.04-.21-.11-.27-.22-.39-.67-.39-1.87.05-2.73.4-.78.96-1.57.96-2.63 0-.9-.45-1.56-.9-2.21l-.7-.95.69 1.94c.34.93.34 2.12-.13 3.01-.43.83-1.02 1.64-1.02 2.65 0 .93.45 1.58.9 2.22l.64.91zm1.26-6.66c0-.84-.34-1.42-.62-1.93-.45-.82-.9-1.58-.9-2.47 0 .54.22.95.45 1.35.34.61.73 1.25.73 2.16 0 .82-.34 1.41-.62 1.92-.45.82-.9.158-.9.247 0-.54.22-.95.45-1.35.34-.61.73-1.25.73-2.16zm-5.74 8.79c-.06-.11-.1-.23-.1-.36 0-.54.45-.96.96-.96h3.46v-.96H8.5c-.83 0-1.54.54-1.79 1.28l-1.92 5.58c1.68 1.48 3.86 2.38 6.26 2.38.25 0 .5-.01.75-.03l-4.46-12.98c.11.02.21.05.3.09.43.18.73.53.73.97 0 .44-.24.78-.58.98l-1.03.62zm10.74-6.35c.98 1.43 1.58 3.16 1.58 5.03 0 2.23-.84 4.26-2.22 5.81l-4.11-11.96c.86-.14 1.76-.22 2.67-.22.68 0 1.35.05 2 .14zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    )
  } else if (norm.includes('typescript')) {
    logo = (
      <svg className="w-3.5 h-3.5 text-[#3178c6] rounded" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 2h20v20H2V2zm16.5 15.6c-.5 0-.9-.3-1.1-.7l-1.1.7c.3.7.9 1.1 1.7 1.1 1.2 0 2-.7 2-1.9v-6.3h-1.5v6.2c0 .6-.3.9-.9.9zm-4.7-5.9h-1.6v6.2c0 1.2-.8 1.9-2 1.9-.8 0-1.4-.4-1.7-1.1l1.1-.7c.2.4.6.7 1.1.7.6 0 .9-.3.9-.9v-6.1H8.3v-1.1h5.5v1.1z"/>
      </svg>
    )
  } else if (norm.includes('mongodb')) {
    logo = (
      <svg className="w-3.5 h-3.5 text-[#13aa52]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .75c-.32 0-.64.12-.88.36L6.5 5.72A7.72 7.72 0 005.25 11c0 2.92 1.83 5.48 4.5 6.78v3.97c0 .64.52 1.16 1.16 1.16s1.16-.52 1.16-1.16v-3.97c2.67-1.3 4.5-3.86 4.5-6.78a7.72 7.72 0 00-1.25-5.28l-4.62-4.61c-.24-.24-.56-.36-.88-.36zm0 2.22l3.41 3.41c.54.73.84 1.62.84 2.56a5.41 5.41 0 01-5.41 5.41h-.08v-11.38zm-1.16 0v11.38H10.5c-3 0-5.41-2.41-5.41-5.41 0-.94.3-1.83.84-2.56l3.41-3.41z"/>
      </svg>
    )
  } else if (norm.includes('prisma')) {
    logo = (
      <svg className="w-3.5 h-3.5 text-[#2d3748]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/>
      </svg>
    )
  } else if (norm.includes('figma')) {
    logo = <Figma className="w-3.5 h-3.5 text-[#f24e1e]" />
  } else if (norm.includes('wireframing') || norm.includes('wireframe')) {
    logo = <Layers className="w-3.5 h-3.5 text-accent-violet" />
  } else if (norm.includes('research') || norm.includes('user journey')) {
    logo = <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
  } else if (norm.includes('strategy') || norm.includes('product strategy')) {
    logo = <CheckSquare className="w-3.5 h-3.5 text-blue-500" />
  } else if (norm.includes('branding') || norm.includes('visual identity') || norm.includes('design')) {
    logo = <Palette className="w-3.5 h-3.5 text-pink-500" />
  } else {
    // Default Icon fallback
    logo = <Layout className="w-3.5 h-3.5 text-text-secondary" />
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-50 text-accent-violet text-sm font-semibold border border-violet-100 shadow-sm transition-transform hover:scale-105 select-none">
      {logo}
      <span>{name}</span>
    </span>
  )
}
