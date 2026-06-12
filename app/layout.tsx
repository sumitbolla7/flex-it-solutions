import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import CursorGlow from '@/components/ui/CursorGlow'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FLEX IT SOLUTIONS — Premium Web Design Agency | Pune',
  description:
    'We create modern websites that increase trust, conversions, and brand value. E-commerce, educational, business websites & UI/UX design in Pune.',
  keywords: 'web design agency pune, e-commerce development, educational websites, UI/UX design, website redesign',
  openGraph: {
    title: 'FLEX IT SOLUTIONS — Premium Web Design Agency',
    description: 'We create modern websites that increase trust, conversions, and brand value.',
    url: 'https://flexitsolutions.in',
    siteName: 'FLEX IT SOLUTIONS',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-white text-text-primary antialiased">
        <CursorGlow />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  )
}
