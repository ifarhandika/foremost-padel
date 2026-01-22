import { FRANCHISE_STEPS } from "@/constants"

export default function FranchiseSteps() {
  return (
    <section className="px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FRANCHISE_STEPS.map((item) => (
          <div
            key={item.id}
            className="bg-[#0D265A] rounded-[50px] p-8 shadow-xl flex flex-col text-white h-full max-w-lg"
          >
            <div className="flex mb-4">
              <h3 className="text-5xl font-bold text-start">{item.number}</h3>
              <h3 className="text-xl font-bold uppercase ml-4 text-start flex justify-center items-center">
                {item.title}
              </h3>
            </div>
            <div className="text-start text-gray-200 leading-relaxed text-md">
              <ul className="list-disc ml-5 space-y-2">
                {item.items.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
