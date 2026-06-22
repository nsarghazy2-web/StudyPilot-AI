export default function Home() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-brand mb-4">StudyPilot AI</h1>
        <p className="text-slate-600 mb-6">AI-powered learning assistant for university students — upload lecture notes, get summaries, flashcards, quizzes and a study planner.</p>
        <div className="flex justify-center gap-4">
          <a href="/auth/signup" className="px-5 py-3 bg-brand text-white rounded-md">Get Started (Student)</a>
          <a href="/auth/login" className="px-5 py-3 border rounded-md">Login</a>
        </div>
      </div>

      <section className="mt-12 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow-sm">
            <h3 className="font-semibold mb-2">Smart Summaries</h3>
            <p className="text-sm text-slate-600">Quick and detailed summaries from your uploaded documents.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-sm">
            <h3 className="font-semibold mb-2">Flashcards</h3>
            <p className="text-sm text-slate-600">Auto-generate flashcards and track progress.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-sm">
            <h3 className="font-semibold mb-2">AI Tutor</h3>
            <p className="text-sm text-slate-600">Chat with your documents and get concept explanations.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
