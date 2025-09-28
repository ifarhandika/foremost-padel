"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"

export default function CompanyStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: 4, label: "COURTS" },
    { number: 21, label: "INVESTORS" },
    { number: 17, label: "EMPLOYEES" },
  ]

  return (
    <section ref={ref} className="w-full py-12 pb-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-14 md:gap-24">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}>
            <img
              src="/tennisball.png"
              alt="tennis ball"
              className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
            />

            <div className="absolute flex flex-col items-center text-white font-bold leading-tight">
              <span className="text-4xl md:text-5xl lg:text-6xl">
                {isInView ? <CountUp end={stat.number} duration={1.5} /> : 0}
              </span>
              <span className="text-lg md:text-xl lg:text-2xl mt-2 tracking-wide">
                {stat.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
