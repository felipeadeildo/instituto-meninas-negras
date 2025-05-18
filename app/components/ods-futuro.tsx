import { motion } from "framer-motion"

export const ODSFuturo = () => {
  const odsItems = [
    {
      number: 1,
      name: "Erradicação da Pobreza",
      color: "bg-red-500",
    },
    {
      number: 4,
      name: "Educação de Qualidade",
      color: "bg-red-600",
    },
    {
      number: 5,
      name: "Igualdade de Gênero",
      color: "bg-orange-500",
    },
    {
      number: 8,
      name: "Trabalho Decente e Crescimento Econômico",
      color: "bg-red-700",
    },
    {
      number: 10,
      name: "Redução das Desigualdades",
      color: "bg-pink-600",
    },
    {
      number: 13,
      name: "Ação Contra a Mudança Global do Clima",
      color: "bg-green-600",
    },
    {
      number: 16,
      name: "Paz, Justiça e Instituições Eficazes",
      color: "bg-blue-600",
    },
    {
      number: 17,
      name: "Parcerias para a Implementação dos Objetivos",
      color: "bg-blue-800",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              Desenvolvimento Sustentável
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ODS Atingidos</h2>
            <div className="w-20 h-1 bg-blue-500 mb-6"></div>

            <p className="text-gray-600 mb-8">
              O Instituto Meninas Negras contribui diretamente para os Objetivos de Desenvolvimento
              Sustentável da ONU, alinhando nossas ações com metas globais para construir um mundo
              mais justo e sustentável.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {odsItems.map((ods, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div
                    className={`w-16 h-16 ${ods.color} rounded-md flex items-center justify-center text-white text-xl font-bold mb-2`}
                  >
                    {ods.number}
                  </div>
                  <p className="text-xs text-gray-600 leading-tight">{ods.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Visão de Futuro</h2>

            <div className="mb-8">
              <p className="text-gray-700 text-lg mb-4">
                Queremos ser reconhecidos como um polo de desenvolvimento de talentos periféricos
                para o Brasil e para o mundo, ampliando nossas parcerias e impactando cada vez mais
                jovens.
              </p>

              <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
                <p className="text-purple-700 italic">
                  "Transformar vidas através da educação e tecnologia, gerando oportunidades em um
                  mundo cada vez mais digital."
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Nossos Objetivos Futuros</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Expandir nossa atuação para mais regiões metropolitanas de São Paulo
                </p>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Aumentar o número de parceiros e apoiadores para nossa causa
                </p>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Desenvolver novos programas de formação em tecnologia e inovação
                </p>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Estabelecer parcerias com empresas de tecnologia para garantir oportunidades de
                  estágio e emprego
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Junte-se a Nós Nessa Missão</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Acreditamos que todos os jovens merecem oportunidades para desenvolver seu potencial,
            independentemente de sua origem socioeconômica. Juntos, podemos transformar mais vidas
            através da educação, tecnologia e desenvolvimento pessoal.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#contato"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Seja um Parceiro
            </motion.a>
            <motion.a
              href="#apoie"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apoie com Doações
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
