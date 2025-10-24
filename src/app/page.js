import Hero from "@/components/Hero"
import Section from "@/components/Section"

export default function Home() {
  const heroDetails = {
    title: "FOREMOST",
    description: "In a Mission Building 100 Courts Across Indonesia",
    backgroundImage: "'/club-hero-bg.png'",
  }

  const sectionDetails = {
    id: "club",
    title: "THE COURT",
    description: "World-Class Standard",
  }

  return (
    <>
      <div className="relative">
        <Hero
          title={heroDetails.title}
          description={heroDetails.description}
          backgroundImage={heroDetails.backgroundImage}
        />

        <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 z-20 flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://courtside.id/mitra?mitra_id=9fb7331a-de7f-46ba-a208-73eec815a830"
            className="
              flex items-center justify-center gap-3
              bg-[#013b82]/50 hover:bg-[#002a5e]
              text-white font-semibold
              text-sm sm:text-base md:text-lg lg:text-xl
              px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4
              rounded-full transition-all duration-300
              shadow-lg backdrop-blur-sm 
            "
          >
            BOOK NOW
            <img
              src="/courtside-logo-fix.png"
              alt="C logo"
              className="w-12 h-12 object-contain"
            />
          </a>
        </div>
      </div>

      <Section
        id={sectionDetails.id}
        title={sectionDetails.title}
        description={sectionDetails.description}
      />
    </>
  )
}
