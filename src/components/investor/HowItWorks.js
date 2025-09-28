import React from "react"

const listOfHowItWorks = [
  {
    id: 1,
    number: "01",
    title: "INVESTOR SUBMITS LOCATION",
    description: (
      <>
        <ul className="list-disc ml-5 space-y-2">
          <li>Investor proposes a potential site.</li>
          <li>Investor pays survey fee IDR 2 million.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    number: "02",
    title: "LOCATION SURVEY",
    description: (
      <>
        <ul className="list-disc ml-5 space-y-2">
          <li>Foremost management surveys and reviews the site.</li>
          <li>Timeline: within 1 week after Step 1.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    number: "03",
    title: "APPROVAL & DESIGN PACKAGE",
    description: (
      <>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            If approved, Foremost provides:
            <ul className="list-circle ml-5 mt-2 space-y-1">
              <li>3D architectural design</li>
              <li>Construction cost estimate (RAB)</li>
            </ul>
          </li>
          <li>Timeline: within 1 week after Step 2.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    number: "04",
    title: "DOWN PAYMENT (DP)",
    description: (
      <>
        <ul className="list-disc ml-5 space-y-2">
          <li>Investor pays 30% DP of total project cost.</li>
          <li>Deadline: max 1 week after Step 3.</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    number: "05",
    title: "CONSTRUCTION PHASE",
    description: (
      <>
        <ul className="list-disc ml-5 space-y-2">
          <li>Starts within 2 weeks after DP.</li>
          <li>Duration: ~4 months.</li>
          <li>
            The investor is required to pay 30%, 20%, and 20% respectively at
            the beginning of the 2nd, 3rd, and 4th months.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    number: "06",
    title: "GRAND OPENING",
    description: (
      <>
        <ul className="list-disc ml-5 space-y-2">
          <li>Court ready to launch & operate.</li>
          <li>Marketing and opening event prepared jointly.</li>
        </ul>
      </>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listOfHowItWorks.map((item) => (
          <div
            key={item.id}
            className="bg-[#0D265A] rounded-[50px] p-8 shadow-xl flex flex-col text-white h-full max-w-lg">
            <div className="flex mb-4">
              <h3 className="text-5xl font-bold text-start">{item.number}</h3>
              <h3 className="text-xl font-bold uppercase ml-4 text-start flex justify-center items-center">
                {item.title}
              </h3>
            </div>
            <div className="text-start text-gray-200 leading-relaxed text-md">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
