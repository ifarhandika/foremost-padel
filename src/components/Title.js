// src/components/SectionTitle.jsx
export default function SectionTitle({ title }) {
  return (
    <div className="flex items-center w-full max-w-7xl mx-auto px-4 my-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wide break-words">
        {title}
      </h2>
      <div className="flex-grow ml-4 sm:ml-6 h-[2px] sm:h-[3px] bg-white"></div>
    </div>
  )
}
