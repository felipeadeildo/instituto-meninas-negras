import { motion } from "framer-motion"

export const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="text-center">
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="h-24 w-24 bg-white rounded-md flex items-center justify-center">
            <div className="h-20 w-20 bg-purple-700 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-3xl">MN</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-white text-3xl md:text-4xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          Instituto Meninas Negras
        </motion.h1>

        <motion.p
          className="text-purple-200 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
        >
          Criando Protagonistas
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
        >
          <div className="w-24 h-1 bg-white mx-auto mb-2"></div>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-white opacity-90 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-blue-400 opacity-90 animate-pulse animation-delay-200"></div>
            <div className="w-3 h-3 rounded-full bg-purple-400 opacity-90 animate-pulse animation-delay-500"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
