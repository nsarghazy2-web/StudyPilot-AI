'use client'

import { useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } })
    setLoading(false)
    if (error) alert(error.message)
    else router.push('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-sm">
      <h1 className="text-xl font-semibold mb-4">Create an account</h1>
      <form onSubmit={handleSignUp} className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full border p-2 rounded" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full px-4 py-2 bg-brand text-white rounded" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
      </form>
    </div>
  )
}
