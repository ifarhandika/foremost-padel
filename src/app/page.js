import Court from "@/components/club/Court"
import Hero from "@/components/Hero"
import Section from "@/components/Section"

export default function Home() {
  const heroDetails = {
    title: "FOREMOST",
    description: "In a Mission Building 100 Courts Across Indonesia",
    backgroundImage: "'/club-hero-bg.png'",
  }

  const sectionDetails = {
    title: "THE COURT",
    description: "World-Class Standard",
  }

  return (
    <>
      <Hero
        title={heroDetails.title}
        description={heroDetails.description}
        backgroundImage={heroDetails.backgroundImage}
      />
      <Section
        title={sectionDetails.title}
        description={sectionDetails.description}
      />
    </>
  )
}
