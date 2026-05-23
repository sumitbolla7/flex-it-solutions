'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, Clock, CheckCircle2, MessageSquare, Users, Eye, RefreshCw, Lock } from 'lucide-react'

interface Submission {
  _id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
  status: 'new' | 'read' | 'replied'
}

interface Stats {
  total: number
  new: number
  read: number
  replied: number
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState<Submission | null>(null)

  const fetchData = async (pwd: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/submissions?password=${pwd}`)
      const data = await res.json()
      if (res.ok) {
        setSubmissions(data.submissions)
        setStats(data.stats)
        setPassword(pwd)
      } else {
        setError('Wrong password')
      }
    } catch {
      setError('Failed to connect')
    }
    setLoading(false)
  }

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/submissions?password=${password}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    fetchData(password)
  }

  const statusColor = (status: string) => {
    if (status === 'new') return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    if (status === 'read') return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    return 'bg-green-500/20 text-green-300 border-green-500/30'
  }

  if (!password) {
    return (
      <div className="min-h-screen bg-[#08060e] flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-white/40 text-sm mt-1">FLEX IT SOLUTIONS</p>
          </div>

          <div className="bg-[#0f0c1a] rounded-2xl p-6 border border-white/8">
            <input
              type="password"
              placeholder="Enter admin password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchData(inputPassword)}
              className="w-full bg-[#0d0a1a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-purple-500/60 focus:outline-none mb-4"
            />
            {error && <p className="text-red-400 text-xs mb-3">{error}</p>}
            <button
              onClick={() => fetchData(inputPassword)}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold text-sm hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <p className="text-white/20 text-xs text-center mt-3">
              Default password: flexitsolutions2024
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#08060e] text-white p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-white/40 text-sm">FLEX IT SOLUTIONS — Contact Submissions</p>
          </div>
          <button
            onClick={() => fetchData(password)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-purple-500/40 transition text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total', value: stats.total, icon: Users, color: 'text-white' },
              { label: 'New', value: stats.new, icon: MessageSquare, color: 'text-purple-400' },
              { label: 'Read', value: stats.read, icon: Eye, color: 'text-blue-400' },
              { label: 'Replied', value: stats.replied, icon: CheckCircle2, color: 'text-green-400' },
            ].map((s) => (
              <div key={s.label} className="bg-[#0f0c1a] rounded-2xl p-5 border border-white/8">
                <s.icon className={`w-5 h-5 ${s.color} mb-3`} />
                <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-white/40 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Submissions list */}
          <div className="bg-[#0f0c1a] rounded-2xl border border-white/8 overflow-hidden">
            <div className="p-5 border-b border-white/8">
              <h2 className="font-semibold text-white">All Submissions</h2>
            </div>
            <div className="divide-y divide-white/5 max-h-[600px] overflow-y-auto">
              {submissions.length === 0 ? (
                <div className="p-8 text-center text-white/30">
                  <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p>No submissions yet</p>
                </div>
              ) : (
                submissions.map((sub) => (
                  <div
                    key={sub._id}
                    onClick={() => { setSelected(sub); updateStatus(sub._id, 'read') }}
                    className={`p-4 cursor-pointer hover:bg-white/3 transition ${selected?._id === sub._id ? 'bg-purple-500/5 border-l-2 border-purple-500' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-sm text-white truncate">{sub.name}</p>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColor(sub.status)}`}>
                            {sub.status}
                          </span>
                        </div>
                        <p className="text-white/40 text-xs truncate">{sub.email}</p>
                        <p className="text-white/30 text-xs mt-1 truncate">{sub.message}</p>
                      </div>
                      <p className="text-white/25 text-xs flex-shrink-0">
                        {new Date(sub.createdAt).toLocaleDateString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Detail view */}
          <div className="bg-[#0f0c1a] rounded-2xl border border-white/8">
            {selected ? (
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-white">{selected.name}</h2>
                    <p className="text-white/40 text-sm">{new Date(selected.createdAt).toLocaleString('en-IN')}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full border ${statusColor(selected.status)}`}>
                    {selected.status}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/6">
                    <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="text-white/40 text-xs">Email</p>
                      <a href={`mailto:${selected.email}`} className="text-white text-sm hover:text-purple-400 transition">{selected.email}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/6">
                    <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <div>
                      <p className="text-white/40 text-xs">Phone</p>
                      <a href={`tel:${selected.phone}`} className="text-white text-sm hover:text-orange-400 transition">{selected.phone}</a>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/3 border border-white/6">
                    <p className="text-white/40 text-xs mb-2">Message</p>
                    <p className="text-white text-sm leading-relaxed">{selected.message}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => updateStatus(selected._id, 'replied')}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white text-sm font-semibold hover:opacity-90 transition"
                  >
                    Mark as Replied
                  </button>
                  <a
                    href={`mailto:${selected.email}?subject=Re: Your inquiry to FLEX IT SOLUTIONS`}
                    className="flex-1 py-2.5 rounded-xl border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition text-center"
                  >
                    Reply via Email
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center p-8 text-center text-white/30">
                <div>
                  <Eye className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p>Click a submission to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
