const Hero = () => {
  return (
    <section
      className="h-screen w-full bg-no-repeat bg-top bg-fixed"
      style={{ backgroundImage: "url('/club-hero-bg.png')" }}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-[180px] font-semibold">FOREMOST</h1>
        <h2 className="text-gray-400 text-5xl font-normal">
          In a Mission Building 100 Courts Across Indonesia
        </h2>
      </div>
    </section>
  )
}

export default Hero
