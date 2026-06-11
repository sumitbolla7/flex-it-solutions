import { NextRequest, NextResponse } from 'next/server'
import { subscribeNewsletter } from '@/lib/actions/newsletter'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }
    const result = await subscribeNewsletter(email)
    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Subscription failed' },
      { status: 400 }
    )
  }
}
