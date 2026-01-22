export default function SectionHeader({ title, description }) {
  return (
    <>
      <h2 className="text-white text-[5vw] font-semibold">{title}</h2>
      <h3 className="text-[#99a2ab] text-[2vw] font-normal">{description}</h3>
    </>
  )
}
