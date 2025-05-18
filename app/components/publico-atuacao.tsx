import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, UserCheck, Users } from "lucide-react"

export const PublicoAtuacao = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Nosso Alcance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quem Atendemos</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Conheça o público atendido e as áreas de atuação do Instituto Meninas Negras
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-xl p-8 shadow-xl text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Público Atendido</h3>
            </div>

            <p className="mb-6 text-purple-100">
              Atendemos jovens de 14 a 24 anos em situação de vulnerabilidade social, moradores da
              capital e Grande São Paulo.
            </p>

            <motion.ul
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemVariants} className="flex items-center">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                  <UserCheck className="h-4 w-4 text-white" />
                </div>
                <span>Jovens pretos e pardos</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                  <UserCheck className="h-4 w-4 text-white" />
                </div>
                <span>Jovens indígenas</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                  <UserCheck className="h-4 w-4 text-white" />
                </div>
                <span>Brancos em situação de pobreza</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                  <UserCheck className="h-4 w-4 text-white" />
                </div>
                <span>Jovens imigrantes e refugiados</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                  <UserCheck className="h-4 w-4 text-white" />
                </div>
                <span>Pessoas com deficiência</span>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 shadow-xl text-white"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Áreas de Atuação</h3>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Onde estamos</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-lg font-medium">São Paulo - Capital</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-lg font-medium">Grande São Paulo</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Nossa Atuação Estratégica</h4>
              <p className="text-blue-100 mb-4">
                Inclinamos os jovens para áreas de tecnologia, por entender que a tecnologia é
                transversal a todas as profissões e representa um dos maiores vetores de ascensão
                social e econômica no século XXI.
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Impactando desde 2017</p>
                  <p className="text-sm text-blue-200">De 12 meninas a mais de 200 jovens</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Evolução</h3>
            <p className="text-gray-600 mb-6">
              Acompanhe o crescimento do Instituto Meninas Negras ao longo dos anos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="w-0.5 h-full bg-purple-100 mx-auto mt-2"></div>
                </div>
                <div>
                  <h4 className="font-bold text-purple-700">2017</h4>
                  <p className="text-gray-700">Início das atividades com 12 meninas</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="w-0.5 h-full bg-blue-100 mx-auto mt-2"></div>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700">2019</h4>
                  <p className="text-gray-700">Abertura de público - 49 jovens</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="w-0.5 h-full bg-purple-100 mx-auto mt-2"></div>
                </div>
                <div>
                  <h4 className="font-bold text-purple-700">2023</h4>
                  <p className="text-gray-700">Escalabilidade - 128 integrantes</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700">2025</h4>
                  <p className="text-gray-700">Nova turma - 29 jovens em formação</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
