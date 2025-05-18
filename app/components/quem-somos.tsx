import { motion } from "framer-motion"
import { Clock, Users } from "lucide-react"

export const QuemSomos = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Nossa História
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quem Somos</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Conheça a história e a missão do Instituto Meninas Negras
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
              src="https://picsum.photos/600/400"
              alt="Jovens participantes do Instituto Meninas Negras"
              className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-purple-600 rounded-lg z-0"></div>
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-blue-500 rounded-lg z-0"></div>
            <div className="absolute z-20 -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-purple-700">8+</span>
                <span className="text-gray-700">Anos transformando vidas</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nossa história de transformação
            </h3>
            <p className="text-gray-600 mb-6">
              O Instituto Meninas Negras é uma iniciativa social que nasceu a partir da trajetória
              pessoal de uma mãe solo, mulher preta e periférica do extremo sul de São Paulo
              (Grajaú), que, preocupada com os desafios sociais que enfrentou na juventude,
              determinou que sua filha não passaria pelas mesmas dificuldades.
            </p>
            <p className="text-gray-600 mb-6">
              Criou um método de alfabetização focado em educação, tecnologia, criatividade e
              desenvolvimento pessoal. Esse trabalho iniciado precocemente foi expandido ao longo
              dos anos, surtindo resultados expressivos na vida acadêmica da filha e com o sucesso
              deu origem ao Instituto Meninas Negras, com o objetivo de transformar a realidade de
              jovens em situação de vulnerabilidade social.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Desde 2017</h4>
                <p className="text-sm text-gray-600">Iniciamos com apenas 12 meninas</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">+200 jovens</h4>
                <p className="text-sm text-gray-600">Impactados ao longo dos anos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
