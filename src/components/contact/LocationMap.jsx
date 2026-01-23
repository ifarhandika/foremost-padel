import { motion } from "framer-motion"

export default function LocationMap() {
  const youtubeUrl = import.meta.env.VITE_VIDEO_URL

  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] sm:min-h-[80vh] md:min-h-[100vh] lg:min-h-[120vh] relative pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-6xl flex justify-center px-4 overflow-visible"
      >
        <div className="relative w-full max-w-[850px] overflow-visible">
          <img
            src="/ilustrasi-jawa.png"
            alt="Map of Java"
            width={850}
            height={600}
            className="w-full h-auto object-contain"
          />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bg-white rounded-full w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
            style={{
              top: "43%",
              left: "72.5%",
              transform: "translate(-50%, -50%)",
            }}
          />

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "30%" }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bg-white w-[1px] sm:w-[2px]"
            style={{
              bottom: "60%",
              left: "73.75%",
              transform: "translateX(-50%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="absolute text-white font-bold text-xs sm:text-lg md:text-xl lg:text-3xl text-center"
            style={{
              bottom: "92%",
              left: "65%",
              transform: "translateX(-50%)",
            }}
          >
            SURABAYA
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="hidden md:block absolute"
            style={{
              bottom: "72%",
              left: "88%",
              transform: "translateX(-50%)",
            }}
          >
            <div className="md:w-[200px] md:h-[120px] lg:w-[250px] lg:h-[150px] bg-black rounded-xl overflow-hidden shadow-lg border border-white/20">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="md:hidden mt-8 px-4 w-full max-w-[90%] sm:max-w-[600px]"
      >
        <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg border border-white/20">
          <iframe
            width="100%"
            height="100%"
            src={youtubeUrl}
            title="Foremost Padel Surabaya"
            frameBorder="0"
            allow="autoplay; encrypted-media; clipboard-write; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </motion.div>
    </div>
  )
}
