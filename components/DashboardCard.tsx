export default function DashboardCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="bg-white shadow-sm rounded p-4">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  )
}
