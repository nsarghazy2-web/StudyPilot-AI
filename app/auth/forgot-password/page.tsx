'use client'

import { useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'

export default function ForgotPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleReset(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + '/auth/reset' })
    setLoading(false)
    if (error) alert(error.message)
    else alert('Check your email for password reset link')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-sm">
      <h1 className="text-xl font-semibold mb-4">Reset Password</h1>
      <form onSubmit={handleReset} className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="w-full px-4 py-2 bg-brand text-white rounded" disabled={loading}>{loading ? 'Sending...' : 'Send reset link'}</button>
      </form>
    </div>
  )
}
