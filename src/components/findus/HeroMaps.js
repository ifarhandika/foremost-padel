import Breakpoint from "../Breakpoint"
import CompanyStats from "./CompanyStats"

const HeroMaps = ({
  title,
  description,
  backgroundImage = "/foremost-bg.png",
}) => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-black flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className="text-white font-semibold text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <h2 className="text-[#99a2ab] font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
          {description}
        </h2>
      </div>

      <CompanyStats />
      <Breakpoint title="CONTACT US" />
    </section>
  )
}

export default HeroMaps
