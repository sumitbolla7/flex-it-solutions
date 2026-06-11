import { NextRequest, NextResponse } from 'next/server'
import { createContactMessage } from '@/lib/actions/messages'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const result = await createContactMessage({ name, email, phone, message })

    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'FLEX IT SOLUTIONS <onboarding@resend.dev>',
            to: [process.env.NOTIFICATION_EMAIL || 'sumitdigitalpartner@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `<p><strong>${name}</strong> submitted a contact form.</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>${message}</p><p><a href="${process.env.NEXTAUTH_URL}/admin/messages">View in Admin</a></p>`,
          }),
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received! We will contact you within 24 hours.',
        id: result.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
