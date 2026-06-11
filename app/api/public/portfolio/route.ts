import { NextResponse } from 'next/server'
import { getPortfolios } from '@/lib/actions/portfolio'

export async function GET() {
  const portfolio = await getPortfolios(false)
  return NextResponse.json(portfolio)
}
