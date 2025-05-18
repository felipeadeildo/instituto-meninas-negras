import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              <span className="text-blue-300">Criando</span> Protagonistas
            </h1>
            <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-xl">
              Transformando vidas através da educação, tecnologia e desenvolvimento pessoal de
              jovens em situação de vulnerabilidade social.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça Nosso Trabalho
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-md hover:bg-white hover:text-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Faça Parte
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-xl w-full max-w-md">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://picsum.photos/600/400"
                  alt="Meninas Negras em atividade educacional"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-purple-600/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-white p-2">
                <p className="font-medium text-lg">Conheça nossa história</p>
                <p className="text-sm text-purple-100">
                  Desde 2017 transformando a vida de jovens em São Paulo
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="#quem-somos" className="text-white flex flex-col items-center">
            <span className="text-sm mb-2">Saiba mais</span>
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
