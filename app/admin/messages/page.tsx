import { getMessages } from '@/lib/actions/messages'
import { MessagesClient } from '@/components/admin/messages-client'

export default async function MessagesPage({
  searchParams,
}: {
  searchParams: { q?: string; status?: string; page?: string }
}) {
  const page = parseInt(searchParams.page || '1', 10)
  const { messages, total, pages } = await getMessages(
    searchParams.q,
    searchParams.status,
    page
  )

  return (
    <MessagesClient
      messages={messages}
      total={total}
      pages={pages}
      currentPage={page}
      statusFilter={searchParams.status}
      search={searchParams.q}
    />
  )
}
