import { useFetch } from "@/hooks"
import { fetchInvestors } from "@/services/api"
import { Carousel, Loader, ErrorMessage, EmptyState } from "@/components/ui"

export default function InvestorCarousel() {
  const { data: investors, loading, error } = useFetch(fetchInvestors)

  if (loading) return <Loader text="Loading investors..." />
  if (error) return <ErrorMessage message={error} />
  if (!investors?.length) return <EmptyState message="No investors available" />

  const renderInvestor = (item) => (
    <div className="relative shadow-lg overflow-hidden rounded-lg">
      <img
        src={item.investor_image}
        alt={item.role}
        className="w-full h-[400px] md:h-[500px] object-cover"
      />
      <div className="w-full bg-[#0D265A] text-white text-lg md:text-xl text-center py-3">
        <h3 className="font-bold text-2xl">{item.role}</h3>
        <h4 className="font-normal">{item.company}</h4>
      </div>
    </div>
  )

  return <Carousel items={investors} renderItem={renderInvestor} />
}
