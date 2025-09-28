"use client"
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const listOfInvestors = [
  {
    id: 1,
    name: "Reza Ilham",
    description: "Mega Asset Management",
    occupation: "Fund Manager",
    image: "/rezailham.png",
  },
  {
    id: 2,
    name: "Grace Christiadi",
    description: "International Finance Corporation",
    occupation: "Investment Analyst",
    image: "/grace.png",
  },
  {
    id: 3,
    name: "Masagus Achmad Aqsha",
    description: "Astra International Tbk.",
    occupation: "Product Manager",
    image: "/masagus.png",
  },
  {
    id: 4,
    name: "Aisyah Moulyni",
    description: "Telkom Indonesia",
    occupation: "B2B Digital Marketer",
    image: "/aisyahmoulyni.png",
  },
  {
    id: 5,
    name: "Olga Patricia",
    description: "Bank Central Asia",
    occupation: "Wealth Specialist",
    image: "/olgapatricia.png",
  },
  {
    id: 6,
    name: "Muhammad Fauzan",
    description: "Dana Indonesia",
    occupation: "Product Developer",
    image: "/muhammadfauzan.png",
  },
  {
    id: 7,
    name: "Diva Milano",
    description: "Altha Consulting",
    occupation: "Consultant",
    image: "/divamilano.png",
  },
  {
    id: 6,
    name: "Muhammad Alif",
    description: "Traveloka",
    occupation: "Senior Performance Marketing",
    image: "/muhammadalif.png",
  },
]

const Court = () => {
  function NextArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute -right-12 top-1/2 -translate-y-1/2 z-20
                 w-10 h-10 flex items-center justify-center 
                 bg-white text-[#022754] rounded-full shadow-lg
                 cursor-pointer hover:bg-[#022754] hover:text-white transition">
        <FaArrowRight size={20} />
      </button>
    )
  }

  function PrevArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute -left-12 top-1/2 -translate-y-1/2 z-20
                 w-10 h-10 flex items-center justify-center 
                 bg-white text-[#022754] rounded-full shadow-lg
                 cursor-pointer hover:bg-[#022754] hover:text-white transition">
        <FaArrowLeft size={20} />
      </button>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <div className="w-full max-w-[100rem] mx-auto py-10 px-10">
      <Slider {...settings}>
        {listOfInvestors.map((item) => (
          <div key={item.id} className="px-3">
            <div className="relative shadow-lg  overflow-hidden">
              <img
                src={item.image}
                alt={item.occupation}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="w-full bg-[#0D265A] text-white text-lg md:text-xl text-center py-3">
                <h3 className="font-bold text-2xl">{item.occupation}</h3>
                <h4 className="font-normal">{item.description}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Court
