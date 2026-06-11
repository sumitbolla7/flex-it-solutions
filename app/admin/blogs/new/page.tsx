import { AdminHeader } from '@/components/admin/header'
import { BlogForm } from '@/components/admin/blog-form'

export default function NewBlogPage() {
  return (
    <div>
      <AdminHeader title="New Blog Post" description="Create a new article for your website" />
      <BlogForm />
    </div>
  )
}
