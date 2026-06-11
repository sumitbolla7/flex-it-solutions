import { NextResponse } from 'next/server'
import { getBlogs } from '@/lib/actions/blogs'

export async function GET() {
  const blogs = await getBlogs(false)
  return NextResponse.json(blogs)
}
