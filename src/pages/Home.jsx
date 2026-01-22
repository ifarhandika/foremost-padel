import { Hero, PageSection, SectionHeader } from "@/components/layout"
import { SectionTitle, Button } from "@/components/ui"
import { CourtCarousel, CourtFeatures } from "@/components/home"
import { HERO_CONFIG, SECTION_CONFIG, BOOKING_URL } from "@/constants"

export default function Home() {
  const hero = HERO_CONFIG.home
  const section = SECTION_CONFIG.club

  return (
    <>
      <div className="relative">
        <Hero
          title={hero.title}
          description={hero.description}
          backgroundImage={hero.backgroundImage}
        />

        <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 z-20 flex justify-center">
          <Button
            href={BOOKING_URL}
            isExternal
            className="gap-3 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            BOOK NOW
            <img
              src="/courtside-logo-fix.png"
              alt="C logo"
              className="w-12 h-12 object-contain"
            />
          </Button>
        </div>
      </div>

      <PageSection>
        <SectionHeader
          title={section.title}
          description={section.description}
        />
        <CourtCarousel />
        <CourtFeatures />
      </PageSection>
    </>
  )
}
