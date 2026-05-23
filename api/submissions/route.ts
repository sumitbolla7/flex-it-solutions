import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

// Simple password protection
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'flexitsolutions2024'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const password = searchParams.get('password')

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db('flexitsolutions')
    const collection = db.collection('contacts')

    const submissions = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray()

    const stats = {
      total: await collection.countDocuments(),
      new: await collection.countDocuments({ status: 'new' }),
      read: await collection.countDocuments({ status: 'read' }),
      replied: await collection.countDocuments({ status: 'replied' }),
    }

    return NextResponse.json({ submissions, stats })
  } catch (error) {
    console.error('Submissions fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 })
  }
}

// Mark submission as read
export async function PATCH(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const password = searchParams.get('password')

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id, status } = await req.json()
    const { ObjectId } = await import('mongodb')

    const client = await clientPromise
    const db = client.db('flexitsolutions')
    const collection = db.collection('contacts')

    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, updatedAt: new Date() } }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }
}
