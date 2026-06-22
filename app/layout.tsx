import './styles/globals.css'
import { ReactNode } from 'react'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'StudyPilot AI',
  description: 'AI-powered learning platform for university students'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <NavBar />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
