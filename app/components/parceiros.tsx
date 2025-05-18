import { motion } from "framer-motion"

export const Parceiros = () => {
  // Lista de parceiros fictícios
  const parceiros = [
    { id: 1, nome: "TechCorp" },
    { id: 2, nome: "GlobalSolutions" },
    { id: 3, nome: "Fundação Educar" },
    { id: 4, nome: "Banco Nacional" },
    { id: 5, nome: "Instituto Desenvolvimento" },
    { id: 6, nome: "EmpresaDigital" },
    { id: 7, nome: "ConsultingGroup" },
    { id: 8, nome: "FundoSocial" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Nossos Apoiadores
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Parceiros</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Empresas e instituições que acreditam no nosso trabalho e nos apoiam nessa missão
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {parceiros.map((parceiro, index) => (
            <motion.div
              key={parceiro.id}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex items-center justify-center h-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-gray-500 font-bold">{parceiro.nome.charAt(0)}</span>
                </div>
                <h3 className="font-medium text-gray-900">{parceiro.nome}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-6">
            Sua empresa também pode fazer parte dessa rede de parceiros que transformam vidas.
          </p>
          <motion.a
            href="#contato"
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Seja um Parceiro
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
