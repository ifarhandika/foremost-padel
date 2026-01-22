import { useEffect, useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

async function fetchInvestors() {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/v1/public/investors`,
    {
      headers: {
        Authorization: `Basic ${import.meta.env.VITE_BASIC_AUTH_TOKEN}`,
      },
    },
  )

  if (!res.ok) throw new Error(`Failed to fetch investors (${res.status})`)

  const data = await res.json()
  return data.data || []
}

const Investor = () => {
  const [investors, setInvestors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    fetchInvestors()
      .then(setInvestors)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading)
    return <div className="py-10 text-center">Loading investors...</div>

  if (error)
    return <div className="py-10 text-center text-red-500">Error: {error}</div>

  if (!investors.length)
    return <div className="py-10 text-center">No investors available</div>

  return (
    <div className="w-full max-w-[100rem] mx-auto py-10 px-10 relative">
      <button
        ref={prevRef}
        className="absolute -left-2 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 flex items-center justify-center 
                   bg-white text-[#022754] rounded-full shadow-lg
                   cursor-pointer hover:bg-[#022754] hover:text-white transition"
        aria-label="Previous"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        ref={nextRef}
        className="absolute -right-2 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 flex items-center justify-center 
                   bg-white text-[#022754] rounded-full shadow-lg
                   cursor-pointer hover:bg-[#022754] hover:text-white transition"
        aria-label="Next"
      >
        <FaArrowRight size={20} />
      </button>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="investor-swiper"
      >
        {investors.map((item) => (
          <SwiperSlide key={item.id}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Investor
