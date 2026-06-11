import Link from 'next/link'
import { getPortfolios } from '@/lib/actions/portfolio'
import { AdminHeader } from '@/components/admin/header'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { PortfolioTable } from '@/components/admin/portfolio-table'

export default async function AdminPortfolioPage() {
  const projects = await getPortfolios(true)

  return (
    <div>
      <AdminHeader
        title="Portfolio CMS"
        description="Manage projects and case studies"
        action={
          <Button asChild>
            <Link href="/admin/portfolio/new"><Plus className="w-4 h-4 mr-2" /> Add Project</Link>
          </Button>
        }
      />
      <PortfolioTable projects={projects} />
    </div>
  )
}
