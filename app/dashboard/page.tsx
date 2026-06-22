import Sidebar from '../../components/Sidebar'
import DashboardCard from '../../components/DashboardCard'

export default function DashboardPage() {
  return (
    <div className="lg:flex lg:space-x-6">
      <Sidebar />
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-4">Student Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <DashboardCard title="Study Progress" value="42%" />
          <DashboardCard title="Upcoming Exams" value={2} />
          <DashboardCard title="Recent Documents" value={5} />
        </div>

        <section className="bg-white p-4 rounded shadow-sm">
          <h2 className="text-lg font-medium mb-2">Learning Statistics</h2>
          <p className="text-sm text-slate-600">Study hours, flashcard progress, quiz accuracy (placeholders).</p>
        </section>
      </div>
    </div>
  )
}
