const Hero = ({ title, description, backgroundImage }) => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage.replace(/'/g, "")})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-b from-transparent to-black/80"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className="
            text-white
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8vw]
            font-semibold leading-tight drop-shadow-md
          "
        >
          {title}
        </h1>
        <h2
          className="
            text-[#99a2ab]
            text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl
            font-normal drop-shadow-sm 
            max-w-[90%] sm:max-w-[80%] md:max-w-[70%]
          "
        >
          {description}
        </h2>
      </div>
    </section>
  )
}

export default Hero
