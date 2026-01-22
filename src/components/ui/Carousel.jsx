import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Carousel({
  items,
  renderItem,
  className = "",
  slidesPerView = 3,
  spaceBetween = 30,
  autoplayDelay = 2500,
  breakpoints = {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1280: { slidesPerView: 3 },
  },
}) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div
      className={`w-full max-w-[100rem] mx-auto py-10 px-10 relative ${className}`}
    >
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
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
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
          delay: autoplayDelay,
          disableOnInteraction: true,
        }}
        loop
        breakpoints={breakpoints}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id || index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
