"use client"
import Slider from "react-slick"


const carouselItems = [
  {
    id: 1,
    image: "/court1.png",
    title: "PARKING AREA",
  },
  {
    id: 2,
    image: "/court2.png",
    title: "RECEPTIONIST",
  },
  {
    id: 3,
    image: "/court3.png",
    title: "COURTS",
  },
  {
    id: 4,
    image: "/court1.png",
    title: "COURTS",
  },
  {
    id: 5,
    image: "/court2.png",
    title: "COURTS",
  },
  {
    id: 6,
    image: "/court3.png",
    title: "COURTS",
  },
]


const CourtCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <div className="w-full max-w-[100rem] mx-auto py-10">
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id} className="px-3">
            <div className="relative shadow-lg border-[20px] border-[#022754] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/60 text-white text-lg md:text-xl font-bold text-center py-3">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CourtCarousel
