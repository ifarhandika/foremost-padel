import { useFetch } from "@/hooks"
import { fetchCourts } from "@/services/api"
import { Carousel, Loader, ErrorMessage, EmptyState } from "@/components/ui"

export default function CourtCarousel() {
  const { data: courts, loading, error } = useFetch(fetchCourts)

  if (loading) return <Loader text="Loading courts..." />
  if (error) return <ErrorMessage message={error} />
  if (!courts?.length) return <EmptyState message="No courts available" />

  const renderCourt = (item) => (
    <div className="relative shadow-lg border-[20px] border-[#022754] overflow-hidden rounded-lg">
      <img
        src={item.court_image}
        alt={item.court_name}
        className="w-full h-[400px] md:h-[500px] object-cover"
      />
      <div className="absolute bottom-0 w-full bg-black/60 text-white text-lg md:text-xl font-bold text-center py-3">
        {item.court_name}
      </div>
    </div>
  )

  return <Carousel items={courts} renderItem={renderCourt} />
}
