import { FaAward, FaCocktail, FaFire } from "react-icons/fa"
import { MdSoap } from "react-icons/md"
import { TOURNAMENT_FEATURES } from "@/constants"

const iconMap = {
  award: <FaAward className="text-2xl text-yellow-400" />,
  soap: <MdSoap className="text-2xl text-blue-300" />,
  cocktail: <FaCocktail className="text-2xl text-pink-400" />,
  fire: <FaFire className="text-2xl text-red-400" />,
}

export default function TournamentFeatures() {
  return (
    <section className="px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TOURNAMENT_FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#0A2A66] rounded-2xl p-6 shadow-lg flex flex-col text-white max-w-lg"
          >
            <h3 className="flex items-center gap-3 text-lg font-bold uppercase">
              {iconMap[feature.iconName]}
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
