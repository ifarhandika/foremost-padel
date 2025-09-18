import Hero from "@/components/Hero"

const Tournament = () => {
  const heroDetails = {
    title: "TOURNAMENT",
    description:
      "Thrilling quarterly battles — from Bronze to Open — featuring a massive prize pool",
    backgroundImage: "'/tournament-hero-bg.png'",
  }
  return (
    <>
      <Hero
        title={heroDetails.title}
        description={heroDetails.description}
        backgroundImage={heroDetails.backgroundImage}
      />
    </>
  )
}

export default Tournament
