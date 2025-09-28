"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroMaps() {
  return (
    <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-6xl flex justify-center">

        <Image
          src="/ilustrasi-jawa.png"
          alt="Map of Java"
          width={1600}
          height={600}
          className="w-full h-auto object-contain"
        />

        <div
          className="absolute"
          style={{
            top: "30%", // SURABAYA Y-position (percentage of map height)
            left: "74%", // SURABAYA X-position (percentage of map width)
            transform: "translate(-50%, -50%)",
          }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="text-white font-bold text-xl sm:text-2xl md:text-4xl text-center mb-2">
            SURABAYA
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "80px" }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="bg-white w-[2px] mx-auto"
          />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-white rounded-full w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 mx-auto mt-2"
          />
        </div>
      </motion.div>
    </div>
  )
}
