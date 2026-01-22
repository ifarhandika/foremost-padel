import { Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Home from "@/pages/Home"
import Tournament from "@/pages/Tournament"
import Investor from "@/pages/Investor"
import FindUs from "@/pages/FindUs"

export default function App() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/find-us" element={<FindUs />} />
        </Routes>
      </main>
    </>
  )
}
