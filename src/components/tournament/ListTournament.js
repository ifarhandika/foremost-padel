import { Card, Button } from "flowbite-react"
import { useState, useEffect } from "react"

async function fetchEvent() {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/v1/public/events`,
    {
      headers: {
        Authorization: `Basic ${import.meta.env.VITE_BASIC_AUTH_TOKEN}`,
      },
    },
  )

  if (!res.ok) throw new Error(`Failed to fetch events (${res.status})`)

  const data = await res.json()
  return data.data || []
}

export default function EventList() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    fetchEvent()
      .then((d) => setEvents(d))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  function formatEventTime(timeStr) {
    if (!timeStr) return ""
    return new Date(timeStr).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const handleOpenModal = (event) => {
    setSelectedEvent(event)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedEvent(null)
  }

  if (loading) return <div className="py-10 text-center">Loading events...</div>
  if (error)
    return <div className="py-10 text-center text-red-500">Error: {error}</div>
  if (!events.length)
    return <div className="py-10 text-center">No events available</div>

  const gridClass =
    events.length === 1
      ? "flex justify-center items-center w-full"
      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center w-full"

  return (
    <section className="px-4 py-10">
      <div className={gridClass}>
        {events.map((event) => (
          <div
            key={event.id}
            className="w-full max-w-xs cursor-pointer"
            onClick={() => handleOpenModal(event)}
          >
            <Card
              className="group rounded-xl shadow-md transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              renderImage={() => (
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={event.event_image}
                    alt={event.event_name}
                    className="rounded-t-xl object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-t-xl"></div>
                </div>
              )}
            >
              <div className="text-left flex flex-col justify-between h-full p-4">
                <div>
                  <h5 className="text-base font-semibold text-gray-900">
                    {event.event_name}
                  </h5>
                  <p className="text-sm text-gray-600 mt-1 pb-2 border-b border-gray-300">
                    {event.description}
                  </p>
                  <div className="mt-2 text-xs text-gray-500">
                    <p>
                      <span className="font-semibold">Time:</span>{" "}
                      {formatEventTime(event.time)}
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
                      e.stopPropagation()
                      handleOpenModal(event)
                    }}
                  >
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

      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleCloseModal}
          />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-2xl mx-4 rounded-lg shadow-lg transform transition-all duration-300 ease-out
                       bg-neutral-900 text-white overflow-hidden
                       opacity-100 scale-100"
          >
            <div className="flex items-start justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold">
                {selectedEvent?.event_name}
              </h3>
              <button
                onClick={handleCloseModal}
                className="ml-4 rounded-md text-white/70 hover:text-white"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div className="relative w-full aspect-video rounded-md overflow-hidden">
                <img
                  src={selectedEvent?.event_image}
                  alt={selectedEvent?.event_name}
                  className="object-cover w-full h-full"
                />
              </div>

              <p className="text-sm text-white/90">
                {selectedEvent?.notes ?? selectedEvent?.description}
              </p>

              <div className="mt-2 text-xs text-white/70">
                <p>
                  <span className="font-semibold">Time:</span>{" "}
                  {formatEventTime(selectedEvent?.time)}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {selectedEvent?.location}
                </p>
              </div>
            </div>

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
