import { getSubscribers } from '@/lib/actions/newsletter'
import { NewsletterClient } from '@/components/admin/newsletter-client'

export default async function NewsletterPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  const page = parseInt(searchParams.page || '1', 10)
  const { subscribers, total, pages } = await getSubscribers(searchParams.q, page)

  return (
    <NewsletterClient
      subscribers={subscribers}
      total={total}
      pages={pages}
      currentPage={page}
      search={searchParams.q}
    />
  )
}
