import { Card, Button } from "flowbite-react"
import { useState } from "react"
import { useFetch } from "@/hooks"
import { fetchEvents } from "@/services/api"
import { Loader, ErrorMessage, EmptyState, Modal } from "@/components/ui"
import { formatEventTime } from "@/utils/formatters"

export default function EventList() {
  const { data: events, loading, error } = useFetch(fetchEvents)
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

  if (loading) return <Loader text="Loading events..." />
  if (error) return <ErrorMessage message={error} />
  if (!events?.length) return <EmptyState message="No events available" />

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

      <Modal
        isOpen={openModal}
        onClose={handleCloseModal}
        title={selectedEvent?.event_name}
      >
        <div className="space-y-4">
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

        <div className="flex justify-end gap-3 pt-4 border-t border-white/10 mt-4">
          <Button color="gray" onClick={handleCloseModal}>
            Close
          </Button>
        </div>
      </Modal>
    </section>
  )
}
