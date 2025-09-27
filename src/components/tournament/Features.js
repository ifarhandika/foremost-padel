// src/components/IncludedFeatures.jsx
import { FaAward, FaCocktail, FaFire } from "react-icons/fa"
import { MdSoap } from "react-icons/md"

const features = [
  {
    id: 1,
    title: "Remarkable Rewards",
    description:
      "Winners are rewarded with exceptional prizes that embody excellence and turn every triumph into an unforgettable milestone.",
    icon: <FaAward className="text-2xl text-yellow-400" />,
  },
  {
    id: 2,
    title: "Elite Amenities",
    description:
      "Beyond the game — comfort with locker rooms, seating areas, and full amenities from shampoo to soap.",
    icon: <MdSoap className="text-2xl text-blue-300" />,
  },
  {
    id: 3,
    title: "Treats & Drinks",
    description:
      "Fuel up with curated snacks and refreshing beverages to keep energy high.",
    icon: <FaCocktail className="text-2xl text-pink-400" />,
  },
  {
    id: 4,
    title: "Energetic Vibes",
    description:
      "Feel the buzz from passionate organizers, lively visuals, and the thrill of competition.",
    icon: <FaFire className="text-2xl text-red-400" />,
  },
]

export default function IncludedFeatures() {
  return (
    <section className="px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#0A2A66] rounded-2xl p-6 shadow-lg flex flex-col text-white max-w-lg">
            <h3 className="flex items-center gap-3 text-lg font-bold uppercase">
              {feature.icon}
              {feature.title}
            </h3>
            <p className="text-start text-gray-200 leading-relaxed mt-3">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
