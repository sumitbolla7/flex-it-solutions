import { AdminHeader } from '@/components/admin/header'
import { PortfolioForm } from '@/components/admin/portfolio-form'

export default function NewPortfolioPage() {
  return (
    <div>
      <AdminHeader title="Add Portfolio Project" />
      <PortfolioForm />
    </div>
  )
}
