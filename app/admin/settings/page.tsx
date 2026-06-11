import { getSettings } from '@/lib/actions/settings'
import { AdminHeader } from '@/components/admin/header'
import { SettingsForm } from '@/components/admin/settings-form'

export default async function SettingsPage() {
  const settings = await getSettings()

  return (
    <div>
      <AdminHeader title="Settings" description="Manage site-wide configuration" />
      <SettingsForm settings={settings} />
    </div>
  )
}
