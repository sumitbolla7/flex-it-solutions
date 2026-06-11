import Link from 'next/link'
import { getBlogs } from '@/lib/actions/blogs'
import { AdminHeader } from '@/components/admin/header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus } from 'lucide-react'
import { BlogsTable } from '@/components/admin/blogs-table'

export default async function AdminBlogsPage() {
  const blogs = await getBlogs(true)

  return (
    <div>
      <AdminHeader
        title="Blog CMS"
        description="Manage articles, SEO, and publishing"
        action={
          <Button asChild>
            <Link href="/admin/blogs/new"><Plus className="w-4 h-4 mr-2" /> New Blog</Link>
          </Button>
        }
      />
      <BlogsTable blogs={blogs} />
    </div>
  )
}
