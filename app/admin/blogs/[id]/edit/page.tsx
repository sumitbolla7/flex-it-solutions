import { getBlogById } from '@/lib/actions/blogs'
import { AdminHeader } from '@/components/admin/header'
import { BlogForm } from '@/components/admin/blog-form'
import { notFound } from 'next/navigation'

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const blog = await getBlogById(params.id)
  if (!blog) notFound()

  return (
    <div>
      <AdminHeader title="Edit Blog" description={blog.title} />
      <BlogForm blog={blog} />
    </div>
  )
}
