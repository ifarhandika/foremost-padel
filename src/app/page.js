import Hero from "@/components/Hero"

export default function Home() {
  const heroDetails = {
    title: "FOREMOST",
    description: "In a Mission Building 100 Courts Across Indonesia",
    backgroundImage: "'/club-hero-bg.png'",
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
