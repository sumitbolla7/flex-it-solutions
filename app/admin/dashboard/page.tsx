import { getDashboardStats } from '@/lib/actions/dashboard'
import { AdminHeader } from '@/components/admin/header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DashboardCharts } from '@/components/admin/dashboard-charts'
import {
  FileText, Briefcase, MessageSquareQuote, Mail, Inbox, TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default async function DashboardPage() {
  const data = await getDashboardStats()
  const { stats, recentBlogs, recentMessages, charts } = data

  const cards = [
    { label: 'Total Blogs', value: stats.totalBlogs, sub: `${stats.publishedBlogs} published`, icon: FileText, href: '/admin/blogs', color: 'text-violet-600 bg-violet-100' },
    { label: 'Portfolio', value: stats.totalPortfolio, icon: Briefcase, href: '/admin/portfolio', color: 'text-blue-600 bg-blue-100' },
    { label: 'Testimonials', value: stats.totalTestimonials, icon: MessageSquareQuote, href: '/admin/testimonials', color: 'text-indigo-600 bg-indigo-100' },
    { label: 'Subscribers', value: stats.totalSubscribers, icon: Mail, href: '/admin/newsletter', color: 'text-emerald-600 bg-emerald-100' },
    { label: 'Messages', value: stats.totalMessages, sub: `${stats.newMessages} new`, icon: Inbox, href: '/admin/messages', color: 'text-amber-600 bg-amber-100' },
  ]

  return (
    <div>
      <AdminHeader title="Dashboard" description="Overview of your website content and leads" />

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {cards.map((c) => (
          <Link key={c.label} href={c.href}>
            <Card className="card-hover h-full">
              <CardContent className="p-5">
                <div className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center mb-3`}>
                  <c.icon className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{c.value}</p>
                <p className="text-xs text-gray-500 mt-1">{c.label}</p>
                {c.sub && <p className="text-xs text-violet-600 mt-0.5">{c.sub}</p>}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <DashboardCharts subscribers={charts.subscribersByMonth} messages={charts.messagesByMonth} />

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Recent Blogs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentBlogs.length === 0 ? (
              <p className="text-sm text-gray-500">No blogs yet</p>
            ) : (
              recentBlogs.map((b) => (
                <Link key={b.id} href={`/admin/blogs/${b.id}/edit`} className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50">
                  <span className="text-sm font-medium truncate">{b.title}</span>
                  <Badge variant={b.published ? 'success' : 'secondary'}>{b.published ? 'Live' : 'Draft'}</Badge>
                </Link>
              ))
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Messages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentMessages.length === 0 ? (
              <p className="text-sm text-gray-500">No messages yet</p>
            ) : (
              recentMessages.map((m) => (
                <Link key={m.id} href="/admin/messages" className="block p-3 rounded-xl hover:bg-gray-50">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{m.name}</span>
                    <Badge variant={m.status === 'new' ? 'default' : 'secondary'}>{m.status}</Badge>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-1">{m.message}</p>
                </Link>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
