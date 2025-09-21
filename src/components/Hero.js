const Hero = ({ title, description, backgroundImage }) => {
  return (
    <section
      className="h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-[8vw] font-semibold">{title}</h1>
        <h2 className="text-[#99a2ab] text-[2.5rem] font-normal">
          {description}
        </h2>
      </div>
    </section>
  )
}

export default Hero
