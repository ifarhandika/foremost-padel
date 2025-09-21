import Responsive from "./club/Court"

const Section = ({ title, description }) => {
  return (
    <section
      className="h-screen w-screen bg-cover bg-center bg-black"
      style={{ backgroundImage: "url('/foremost-bg.png')" }}>
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-[5vw] font-semibold">{title}</h2>
        <h3 className="text-[#99a2ab] text-[2vw] font-normal">{description}</h3>
        <Responsive />
      </div>
    </section>
  )
}

export default Section
