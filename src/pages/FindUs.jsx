import { PageSection } from "@/components/layout"
import { SectionTitle } from "@/components/ui"
import { LocationMap, CompanyStats, ContactForm } from "@/components/contact"

export default function FindUs() {
  return (
    <PageSection className="min-h-screen">
      <LocationMap />
      <CompanyStats />
      <SectionTitle title="CONTACT US" variant="left" />
      <ContactForm />
    </PageSection>
  )
}
