import Hero from "@/components/Hero"
import Section from "@/components/Section"

const Tournament = () => {
  const heroDetails = {
    title: "TOURNAMENT",
    description:
      "Thrilling quarterly battles — from Bronze to Open — featuring a massive prize pool",
    backgroundImage: "'/tournament-hero-bg.png'",
  }

  const sectionDetails = {
    id: "tournament",
    title: "UPCOMING",
    description: "Foremost Padel Series I",
  }

  return (
    <>
      <Hero
        title={heroDetails.title}
        description={heroDetails.description}
        backgroundImage={heroDetails.backgroundImage}
      />

      <Section
        id={sectionDetails.id}
        title={sectionDetails.title}
        description={sectionDetails.description}
      />
    </>
  )
}

export default Tournament
