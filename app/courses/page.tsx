export default function CoursesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Courses</h1>
      <p className="text-sm text-slate-600 mb-4">Create and manage your courses and subjects.</p>

      <div className="bg-white rounded shadow p-4">
        <h2 className="font-medium mb-2">Create Course</h2>
        <form className="space-y-3">
          <input className="w-full border p-2 rounded" placeholder="Course title" />
          <textarea className="w-full border p-2 rounded" placeholder="Description" />
          <button className="px-4 py-2 bg-brand text-white rounded">Create</button>
        </form>
      </div>
    </div>
  )
}
