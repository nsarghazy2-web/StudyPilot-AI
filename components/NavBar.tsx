import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-brand">StudyPilot AI</Link>
        <nav className="space-x-4">
          <Link href="/auth/login" className="text-sm text-slate-700">Login</Link>
          <Link href="/auth/signup" className="inline-flex items-center px-3 py-1.5 bg-brand text-white rounded-md text-sm">Get Started</Link>
        </nav>
      </div>
    </header>
  )
}
