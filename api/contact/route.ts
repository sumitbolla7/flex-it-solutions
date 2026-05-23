import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    // Validate
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Save to MongoDB
    const client = await clientPromise
    const db = client.db('flexitsolutions')
    const collection = db.collection('contacts')

    const submission = {
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
      status: 'new', // new | read | replied
      source: 'website-contact-form',
    }

    const result = await collection.insertOne(submission)

    // Send email notification via Resend (if API key exists)
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
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0c1a; color: #ffffff; padding: 30px; border-radius: 12px;">
                <div style="background: linear-gradient(135deg, #8b5cf6, #f97316); padding: 2px; border-radius: 10px; margin-bottom: 24px;">
                  <div style="background: #0f0c1a; padding: 20px; border-radius: 9px;">
                    <h1 style="margin: 0; font-size: 22px; color: #ffffff;">New Contact Form Submission</h1>
                    <p style="margin: 4px 0 0; color: #a78bfa; font-size: 14px;">FLEX IT SOLUTIONS Website</p>
                  </div>
                </div>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-size: 13px; width: 100px;">Name</td>
                    <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #ffffff; font-size: 14px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-size: 13px;">Email</td>
                    <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #ffffff; font-size: 14px;"><a href="mailto:${email}" style="color: #a78bfa;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-size: 13px;">Phone</td>
                    <td style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #ffffff; font-size: 14px;"><a href="tel:${phone}" style="color: #a78bfa;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; color: #a78bfa; font-size: 13px; vertical-align: top;">Message</td>
                    <td style="padding: 12px; color: #ffffff; font-size: 14px; line-height: 1.6;">${message}</td>
                  </tr>
                </table>

                <div style="margin-top: 24px; padding: 16px; background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.3); border-radius: 8px;">
                  <p style="margin: 0; color: #a78bfa; font-size: 13px;">Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
                  <p style="margin: 4px 0 0; color: #ffffff55; font-size: 12px;">MongoDB ID: ${result.insertedId}</p>
                </div>

                <div style="margin-top: 20px; text-align: center;">
                  <a href="https://flex-it-solutions.vercel.app/admin" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #8b5cf6, #f97316); color: white; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">View in Admin Dashboard</a>
                </div>
              </div>
            `,
          }),
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received! We will contact you within 24 hours.',
        id: result.insertedId,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API is running' })
}
