import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 pr-6 hidden lg:block">
      <div className="space-y-2">
        <Link href="/dashboard" className="block py-2 px-3 rounded hover:bg-slate-100">Dashboard</Link>
        <Link href="/courses" className="block py-2 px-3 rounded hover:bg-slate-100">Courses</Link>
        <Link href="/documents" className="block py-2 px-3 rounded hover:bg-slate-100">Documents</Link>
        <Link href="/flashcards" className="block py-2 px-3 rounded hover:bg-slate-100">Flashcards</Link>
        <Link href="/quizzes" className="block py-2 px-3 rounded hover:bg-slate-100">Quizzes</Link>
        <Link href="/planner" className="block py-2 px-3 rounded hover:bg-slate-100">Study Planner</Link>
      </div>
    </aside>
  )
}
