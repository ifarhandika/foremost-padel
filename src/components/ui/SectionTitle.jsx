export default function SectionTitle({ title, variant = "center" }) {
  if (variant === "center") {
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

  return (
    <div className="flex items-center w-full max-w-7xl mx-auto px-4 my-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wide break-words">
        {title}
      </h2>
      <div className="flex-grow ml-4 sm:ml-6 h-[2px] sm:h-[3px] bg-white"></div>
    </div>
  )
}
