import { Hero, PageSection, SectionHeader } from "@/components/layout"
import { SectionTitle } from "@/components/ui"
import { FranchiseSteps, InvestorCarousel } from "@/components/investor"
import { HERO_CONFIG, SECTION_CONFIG } from "@/constants"

export default function Investor() {
  const hero = HERO_CONFIG.investor
  const section = SECTION_CONFIG.investor

  return (
    <>
      <Hero
        title={hero.title}
        description={hero.description}
        backgroundImage={hero.backgroundImage}
      />

      <PageSection>
        <SectionHeader
          title={section.title}
          description={section.description}
        />
        <FranchiseSteps />
        <SectionTitle title="REMARKABLE INVESTOR" variant="left" />
        <InvestorCarousel />
      </PageSection>
    </>
  )
}
