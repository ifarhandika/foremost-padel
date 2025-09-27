// src/components/SectionTitle.jsx
export default function SectionTitle({ title }) {
  return (
    <div className="flex items-center w-full mb-8">
      <h2 className="text-2xl font-bold text-white whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-grow ml-4 h-[2px] bg-white"></div>
    </div>
  )
}
