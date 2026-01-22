import { motion } from "framer-motion"

export default function LocationMap() {
  const youtubeUrl = import.meta.env.VITE_VIDEO_URL

  return (
    <div className="flex justify-center items-center min-h-[120vh] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-6xl flex justify-center px-4"
      >
        <div className="relative w-full max-w-[850px]">
          <img
            src="/ilustrasi-jawa.png"
            alt="Map of Java"
            width={850}
            height={600}
            className="w-full h-auto object-contain"
          />

          <div
            className="absolute"
            style={{
              top: "10%",
              left: "73.5%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.6 }}
              className="text-white font-bold text-lg sm:text-xl md:text-3xl text-center mb-2"
            >
              SURABAYA
            </motion.div>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "200px" }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="bg-white w-[2px] mx-auto"
            />

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="bg-white rounded-full w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mx-auto mt-2"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute"
            style={{
              top: "-16%",
              left: "78%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-[200px] h-[120px] sm:w-[260px] sm:h-[160px] md:w-[250px] md:h-[180px] bg-black rounded-xl overflow-hidden shadow-lg border border-white/20">
              <iframe
                width="100%"
                height="100%"
                src={youtubeUrl}
                title="Foremost Padel Surabaya"
                frameBorder="0"
                allow="autoplay; encrypted-media; clipboard-write; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
