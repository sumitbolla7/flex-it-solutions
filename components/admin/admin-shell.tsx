'use client'

import { AdminSidebar } from '@/components/admin/sidebar'
import { usePathname } from 'next/navigation'

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/admin/login') return <>{children}</>

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 lg:p-8 overflow-auto min-w-0">{children}</main>
    </div>
  )
}
