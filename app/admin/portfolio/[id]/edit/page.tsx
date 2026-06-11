import { getPortfolioById } from '@/lib/actions/portfolio'
import { AdminHeader } from '@/components/admin/header'
import { PortfolioForm } from '@/components/admin/portfolio-form'
import { notFound } from 'next/navigation'

export default async function EditPortfolioPage({ params }: { params: { id: string } }) {
  const project = await getPortfolioById(params.id)
  if (!project) notFound()

  return (
    <div>
      <AdminHeader title="Edit Project" description={project.name} />
      <PortfolioForm project={project} />
    </div>
  )
}
