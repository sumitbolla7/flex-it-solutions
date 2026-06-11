'use server'

import prisma from '@/lib/prisma'

export async function getDashboardStats() {
  const [
    totalBlogs,
    publishedBlogs,
    totalPortfolio,
    totalTestimonials,
    totalSubscribers,
    totalMessages,
    newMessages,
    recentBlogs,
    recentMessages,
    subscribersByMonth,
    messagesByMonth,
  ] = await Promise.all([
    prisma.blog.count(),
    prisma.blog.count({ where: { published: true } }),
    prisma.portfolio.count(),
    prisma.testimonial.count({ where: { published: true } }),
    prisma.newsletterSubscriber.count(),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { status: 'new' } }),
    prisma.blog.findMany({ orderBy: { updatedAt: 'desc' }, take: 5, select: { id: true, title: true, published: true, updatedAt: true } }),
    prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
    getMonthlyCounts('newsletterSubscriber'),
    getMonthlyCounts('contactMessage'),
  ])

  return {
    stats: {
      totalBlogs,
      publishedBlogs,
      totalPortfolio,
      totalTestimonials,
      totalSubscribers,
      totalMessages,
      newMessages,
    },
    recentBlogs,
    recentMessages,
    charts: {
      subscribersByMonth,
      messagesByMonth,
    },
  }
}

async function getMonthlyCounts(model: 'newsletterSubscriber' | 'contactMessage') {
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5)
  sixMonthsAgo.setDate(1)

  const items =
    model === 'newsletterSubscriber'
      ? await prisma.newsletterSubscriber.findMany({
          where: { createdAt: { gte: sixMonthsAgo } },
          select: { createdAt: true },
        })
      : await prisma.contactMessage.findMany({
          where: { createdAt: { gte: sixMonthsAgo } },
          select: { createdAt: true },
        })

  const months: Record<string, number> = {}
  for (let i = 5; i >= 0; i--) {
    const d = new Date()
    d.setMonth(d.getMonth() - i)
    const key = d.toLocaleString('en', { month: 'short', year: '2-digit' })
    months[key] = 0
  }

  items.forEach((item) => {
    const key = item.createdAt.toLocaleString('en', { month: 'short', year: '2-digit' })
    if (months[key] !== undefined) months[key]++
  })

  return Object.entries(months).map(([month, count]) => ({ month, count }))
}
