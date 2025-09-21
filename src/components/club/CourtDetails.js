export default function WhatAwaits() {
  const items = [
    {
      id: 1,
      title: "Court Rental",
      description:
        "Play on world-class padel courts with 12cm elevated floors, 12m ceilings, and zero dead spots for ultimate performance.",
    },
    {
      id: 2,
      title: "Padel Academy",
      description:
        "Train with a structured coaching curriculum crafted by an L1 International Certified Coach to level up your game.",
    },
    {
      id: 3,
      title: "Regular Tournament",
      description:
        "Compete in quarterly tournaments across Bronze to Open categories, with strong sponsor support and vibrant community spirit.",
    },
    {
      id: 4,
      title: "Premium Facilities",
      description:
        "Complete amenities, spacious parking, plenty of seating, and F&B options for your comfort.",
    },
  ]

  return (
    <section className="bg-[#0A2B66]/70 text-white rounded-3xl w-3/4 mx-auto px-6 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-[40px] mb-[40px]">
      <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-10 md:gap-14 lg:gap-20">
        <div className="flex justify-center items-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-center">
            WHAT <br className="hidden sm:block" /> AWAITS{" "}
            <br className="hidden sm:block" /> YOU
          </h2>
        </div>

        <div className="col-span-2 space-y-8 sm:space-y-10">
          {items.map((item, index) => (
            <div key={item.id}>
              <div className="flex items-center gap-4">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {item.id}
                </span>
                <div className="ml-[10px] text-left">
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Divider (not for last item) */}
              {index !== items.length - 1 && (
                <hr className="border-[#013b82] border-b-2 mt-3 sm:mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
