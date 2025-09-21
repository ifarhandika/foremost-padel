import Hero from "@/components/Hero"
import Section from "@/components/Section"

const Investor = () => {
  const heroDetails = {
    title: "FRANCHISE",
    description: "You Invest, We Handle the Rest - from Finance to Marketing",
    backgroundImage: "'/investor-hero-bg.png'",
  }

  const sectionDetails = {
    id: "investor",
    title: "HOW IT WORKS",
    description: "Here's the Franchise Onboarding Process",
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

export default Investor
