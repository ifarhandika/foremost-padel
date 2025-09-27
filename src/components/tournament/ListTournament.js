"use client"

import { Card, Button } from "flowbite-react"
import Image from "next/image"
import { useState } from "react"

const events = [
  {
    id: 1,
    title: "Gazer Studio Pop Up - Houston",
    description:
      "Join us in Houston, TX. Explore our Gazer on display and meet our team.",
    details:
      "This is a full-day event featuring our Gazer showcase, live demos, and networking opportunities.",
    time: "Nov 2, 2024 - Nov 10, 2024",
    location: "The Texas Expo Center, 5065 Winthermere Rd, Houston, 77056, US",
    image: "/tournament-hero-bg.png",
  },
  {
    id: 2,
    title: "Gazer Studio Pop Up - NeYork",
    description:
      "Join us in NeYork. Explore our Gazer on display and meet our team.",
    details:
      "Discover Gazer in NeYork! A week-long showcase with hands-on sessions and Q&A with our engineers.",
    time: "Oct 05, 2024 - Oct 12, 2024",
    location: "The Norlok Expo Center, 5368 Winthermere Rd, Norlok, 94770, US",
    image: "/tournament-hero-bg.png",
  },
  {
    id: 3,
    title: "Gazer Studio Pop Up - Vegans",
    description:
      "Join us in Vegans. Explore our Gazer on display and meet our team.",
    details:
      "A summer highlight event in Vegans — including guest speakers, product deep dives, and exclusive offers.",
    time: "Aug 10, 2025 - Aug 30, 2025",
    location: "The Vegans Expo Center, 4521 Winthermere Rd, Vegans, 07184, US",
    image: "/tournament-hero-bg.png",
  },
  {
    id: 4,
    title: "Gazer Studio Pop Up - Vegans",
    description:
      "Join us in Vegans. Explore our Gazer on display and meet our team.",
    details:
      "A summer highlight event in Vegans — including guest speakers, product deep dives, and exclusive offers.",
    time: "Aug 10, 2025 - Aug 30, 2025",
    location: "The Vegans Expo Center, 4521 Winthermere Rd, Vegans, 07184, US",
    image: "/tournament-hero-bg.png",
  },
]

export default function EventList() {
  const [openModal, setOpenModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleOpenModal = (event) => {
    setSelectedEvent(event)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedEvent(null)
  }

  return (
    <section className="px-4 py-10">
      {/* grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {events.map((event) => (
          // wrapper so card clicks are easy to manage
          <div
            key={event.id}
            className="w-full cursor-pointer"
            onClick={() => handleOpenModal(event)}>
            <Card
              className="group rounded-xl shadow-md transition-all duration-300 flex flex-col h-full max-w-xs relative overflow-hidden"
              renderImage={() => (
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="rounded-t-xl object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-t-xl" />
                </div>
              )}>
              <div className="text-left flex flex-col justify-between h-full p-4">
                <div>
                  <h5 className="text-base font-semibold text-gray-900">
                    {event.title}
                  </h5>
                  <p className="text-sm text-gray-600 mt-1 pb-2 border-b border-gray-300">
                    {event.description}
                  </p>
                  <div className="mt-2 text-xs text-gray-500">
                    <p>
                      <span className="font-semibold">Time:</span> {event.time}
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      {event.location}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-start">
                  <Button
                    size="xs"
                    className="group bg-black text-white hover:bg-gray-800 rounded-lg px-3 py-1.5 transition-all duration-300 ease-in-out"
                    onClick={(e) => {
                      // prevent the wrapper onClick (card click) from also firing
                      e.stopPropagation()
                      handleOpenModal(event)
                    }}>
                    <span className="flex items-center gap-1 text-sm">
                      See More
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Custom modal overlay + centered modal */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog">
          {/* backdrop: blur + dim, clicking it closes modal */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleCloseModal}
          />

          {/* modal panel */}
          <div
            // stop backdrop clicks from closing when clicking inside modal
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-2xl mx-4 rounded-lg shadow-lg transform transition-all duration-300 ease-out
                       bg-neutral-900 text-white overflow-hidden
                       opacity-100 scale-100"
            // small entrance animation via Tailwind (initially it's rendered; transition handles smoothing)
          >
            {/* header */}
            <div className="flex items-start justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold">{selectedEvent?.title}</h3>
              <button
                onClick={handleCloseModal}
                className="ml-4 rounded-md text-white/70 hover:text-white"
                aria-label="Close modal">
                {/* simple X icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* body */}
            <div className="p-4 space-y-4">
              <div className="relative w-full aspect-video rounded-md overflow-hidden">
                <Image
                  src={selectedEvent?.image ?? "/tournament-hero-bg.png"}
                  alt={selectedEvent?.title ?? ""}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm text-white/90">
                {selectedEvent?.details ?? selectedEvent?.description}
              </p>

              <div className="mt-2 text-xs text-white/70">
                <p>
                  <span className="font-semibold">Time:</span>{" "}
                  {selectedEvent?.time}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {selectedEvent?.location}
                </p>
              </div>
            </div>

            {/* footer */}
            <div className="flex justify-end gap-3 p-4 border-t border-white/10 bg-transparent">
              <Button color="gray" onClick={handleCloseModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
