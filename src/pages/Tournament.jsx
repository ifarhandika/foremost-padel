import { Hero, PageSection, SectionHeader } from "@/components/layout"
import { SectionTitle } from "@/components/ui"
import { EventList, TournamentFeatures } from "@/components/tournament"
import { HERO_CONFIG, SECTION_CONFIG } from "@/constants"

export default function Tournament() {
  const hero = HERO_CONFIG.tournament
  const section = SECTION_CONFIG.tournament

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
        <EventList />
        <SectionTitle title="WHAT'S INCLUDED" variant="left" />
        <TournamentFeatures />
      </PageSection>
    </>
  )
}
