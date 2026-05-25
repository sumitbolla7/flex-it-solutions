'use client'

export default function GridBackground({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none opacity-[0.4] ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(124, 58, 237, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(124, 58, 237, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    />
  )
}
