import { NextResponse } from 'next/server'
import { getTestimonials } from '@/lib/actions/testimonials'
import { getSettings } from '@/lib/actions/settings'

export async function GET() {
  const [testimonials, settings] = await Promise.all([
    getTestimonials(false),
    getSettings(),
  ])
  return NextResponse.json({
    testimonials,
    title: settings.testimonialTitle,
    subtitle: settings.testimonialSubtitle,
  })
}
