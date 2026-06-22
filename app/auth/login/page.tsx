'use client'

import { useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) {
      alert(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  async function handleGoogle() {
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-sm">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full border p-2 rounded" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-brand text-white rounded" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
          <a href="/auth/forgot-password" className="text-sm text-slate-600">Forgot?</a>
        </div>
      </form>
      <div className="mt-4">
        <button onClick={handleGoogle} className="w-full border px-3 py-2 rounded">Continue with Google</button>
      </div>
    </div>
  )
}
