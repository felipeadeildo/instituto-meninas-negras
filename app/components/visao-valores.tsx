import { motion } from "framer-motion"
import { BookOpen, Sparkles, Star, Target, Users } from "lucide-react"

export const VisaoValores = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
      },
    }),
  }

  const valores = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Igualdade racial, de gênero e social",
      color: "bg-purple-600",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Inclusão e diversidade",
      color: "bg-blue-600",
    },
    {
      icon: <Star className="h-6 w-6 text-white" />,
      title: "Educação transformadora",
      color: "bg-indigo-600",
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Autonomia e protagonismo juvenil",
      color: "bg-violet-600",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: "Compromisso com a inovação e desenvolvimento sustentável",
      color: "bg-fuchsia-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                Nossos Princípios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visão e Valores</h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Nossa Visão</h3>
              <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-600">
                <p className="text-gray-700 leading-relaxed">
                  Ser referência na formação de jovens para a inclusão produtiva no mercado de
                  trabalho, inserção na educação de qualidade e formação superior, inclusão cultural
                  e para o fortalecimento da cidadania.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Nosso Propósito</h3>
              <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
                <p className="text-gray-700 leading-relaxed">
                  Promover a igualdade racial, de gênero e social no Brasil através do
                  desenvolvimento acadêmico, profissional e cultural de jovens em vulnerabilidade
                  social, capacitando-os para atuar no novo contexto econômico da quarta revolução
                  Industrial, tecnologia e inovação.
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">Nossos Valores</h3>
            <div className="grid gap-4">
              {valores.map((valor, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className={`rounded-full p-3 mr-4 ${valor.color}`}>{valor.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{valor.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
