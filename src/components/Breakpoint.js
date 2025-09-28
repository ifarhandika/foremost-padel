export default function SectionTitle({ title }) {
  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="flex items-center w-full">
        <div className="flex-1 h-[5px] bg-white"></div>
        <h2 className="px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-[5px] bg-white"></div>
      </div>
    </div>
  )
}
