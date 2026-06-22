export default function DocumentsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Documents</h1>
      <p className="text-sm text-slate-600 mb-4">Upload PDFs, DOCX, PPTX and manage secure storage.</p>

      <div className="bg-white rounded shadow p-4">
        <h2 className="font-medium mb-2">Upload Document</h2>
        <form className="space-y-3">
          <input type="file" className="w-full" />
          <button className="px-4 py-2 bg-brand text-white rounded">Upload</button>
        </form>
      </div>
    </div>
  )
}
