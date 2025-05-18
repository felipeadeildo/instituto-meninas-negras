import { motion } from "framer-motion"
import { Briefcase, ChevronRight, Heart, User } from "lucide-react"

export const CTA = () => {
  const ctaOptions = [
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: "Inscrever um Jovem",
      description:
        "Conhece um jovem entre 14 e 24 anos que poderia se beneficiar de nosso programa?",
      btnText: "Fazer Inscrição",
      href: "#contato",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "Apoiar Financeiramente",
      description: "Sua contribuição pode ajudar a transformar a realidade de centenas de jovens.",
      btnText: "Quero Apoiar",
      href: "#apoie",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-white" />,
      title: "Parcerias Empresariais",
      description: "Sua empresa pode ser parceira e oferecer oportunidades aos nossos jovens.",
      btnText: "Formar Parceria",
      href: "#contato",
      color: "bg-indigo-600 hover:bg-indigo-700",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como você pode contribuir</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-purple-100 text-lg">
            Existem diversas formas de fazer parte dessa transformação social. Escolha como você
            deseja contribuir com o Instituto Meninas Negras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{option.title}</h3>
              <p className="text-purple-100 mb-6">{option.description}</p>
              <motion.a
                href={option.href}
                className={`inline-flex items-center ${option.color} py-2 px-4 rounded-md font-medium text-white transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.btnText}
                <ChevronRight className="h-4 w-4 ml-1" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Junte-se a nós nessa missão</h3>
          <p className="text-purple-100 mb-6">
            "Sozinhos vamos mais rápido, mas juntos vamos mais longe. A educação e a tecnologia são
            os meios mais poderosos para transformar a realidade de jovens em situação de
            vulnerabilidade social."
          </p>
          <p className="text-right text-sm text-purple-200 italic">— Instituto Meninas Negras</p>
        </motion.div>
      </div>
    </section>
  )
}
