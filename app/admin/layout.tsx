import { AdminProviders } from '@/components/admin/providers'
import { AdminShell } from '@/components/admin/admin-shell'
import './admin.css'

export const metadata = {
  title: 'Admin | FLEX IT SOLUTIONS',
  robots: 'noindex, nofollow',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminProviders>
      <div className="admin-root min-h-screen bg-gray-50/80 dark:bg-gray-950">
        <AdminShell>{children}</AdminShell>
      </div>
    </AdminProviders>
  )
}
