import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Foremost Padel",
  description: "Foremost Padel",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
