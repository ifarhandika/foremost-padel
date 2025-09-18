import Hero from "@/components/Hero"

const Investor = () => {
  const heroDetails = {
    title: "FRANCHISE",
    description: "You Invest, We Handle the Rest - from Finance to Marketing",
    backgroundImage: "'/investor-hero-bg.png'",
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

export default Investor
