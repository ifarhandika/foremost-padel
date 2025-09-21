import Court from "./club/Court"
import CourtDetails from "./club/CourtDetails"

const sectionComponents = {
  club: (
    <>
      <Court />
      <CourtDetails />
    </>
  ),
  tournament: (
    <>
      <p className="text-white">Tournament section coming soon...</p>
    </>
  ),
  investor: (
    <>
      {/* <Investor /> */}
      <p className="text-white">Investor section coming soon...</p>
    </>
  ),
}

const Section = ({ id, title, description }) => {
  return (
    <section
      id={id}
      className="bg-cover bg-center bg-black"
      style={{ backgroundImage: "url('/foremost-bg.png')" }}>
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-[5vw] font-semibold">{title}</h2>
        <h3 className="text-[#99a2ab] text-[2vw] font-normal">{description}</h3>
        {sectionComponents[id] || null}
      </div>
    </section>
  )
}

export default Section
