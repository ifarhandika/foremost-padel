import CompanyStats from "@/components/findus/CompanyStats"
import HeroMaps from "@/components/findus/HeroMaps"
import Breakpoint from "@/components/Breakpoint"
import ContactForm from "@/components/findus/ContactForm"

export default function FindUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-black"
      style={{ backgroundImage: "url('/foremost-bg.png')" }}
    >
      <HeroMaps />
      <CompanyStats />
      <Breakpoint title="CONTACT US" />
      <ContactForm />
    </div>
  )
}
