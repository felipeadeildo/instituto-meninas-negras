import { motion } from "framer-motion"
import { Award, Briefcase, CheckCircle, Globe, GraduationCap } from "lucide-react"

export const ImpactosCases = () => {
  const impactos = [
    {
      icon: <Briefcase className="h-6 w-6 text-purple-600" />,
      title: "Inserção no mercado de trabalho",
      description:
        "Formação de jovens que hoje atuam em empresas como Oracle, Google, BRF, Vivo, IBM, Itaú, Citibank entre outras grandes corporações.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-purple-600" />,
      title: "Formação de multiplicadores",
      description:
        "Ex-alunos que se tornaram docentes em instituições referenciadas e fundaram suas próprias iniciativas sociais.",
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "Reconhecimento profissional",
      description: "Palestrantes reconhecidos em diferentes áreas de atuação.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
      title: "Acesso à educação de qualidade",
      description:
        "Desenvolvimento de jovens que conquistaram bolsas de estudo e hoje estão inseridos no mercado de trabalho.",
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      title: "Mobilidade internacional",
      description:
        "Jovens que estudam, trabalham e vivem no exterior graças à mentoria recebida no Instituto.",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="impacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Nossos Resultados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impactos Gerados</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Conheça os impactos positivos e transformações promovidas pelo Instituto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {impactos.map((impacto, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                {impacto.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{impacto.title}</h3>
              <p className="text-gray-600">{impacto.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Cases de Sucesso</h3>
              <p className="text-purple-100 mb-8">
                Nossos cases demonstram a efetividade de nosso trabalho e o impacto transformador na
                vida dos jovens atendidos.
              </p>

              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 mr-3">
                  1
                </span>
                <h4 className="font-semibold">Grupo de estudos para bolsas de excelência</h4>
              </div>
              <p className="text-purple-100 mb-6 pl-11">
                Durante a pandemia, organizamos um grupo de estudos para preparar jovens para
                processos seletivos de bolsas em colégios de excelência. Seis jovens foram
                contemplados e, hoje, já estão no ensino superior e no mercado de trabalho.
              </p>

              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 mr-3">
                  2
                </span>
                <h4 className="font-semibold">Mestrado com bolsa em Nova Iorque</h4>
              </div>
              <p className="text-purple-100 pl-11">
                Outro case emblemático é o de uma jovem do extremo sul de São Paulo que, após
                mentoria de carreira no Instituto, foi aprovada em um mestrado com bolsa em Nova
                Iorque, onde hoje mora e trabalha.
              </p>
            </div>

            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Depoimentos</h3>

              <div className="bg-gray-50 p-6 rounded-lg mb-6 relative">
                <div className="text-5xl text-purple-200 absolute -top-6 left-4">"</div>
                <p className="text-gray-700 mb-4 relative z-10">
                  O Instituto Meninas Negras mudou completamente minha trajetória de vida. Hoje
                  trabalho em uma multinacional de tecnologia e ajudo minha família. Sem o apoio e
                  mentoria que recebi, isso não seria possível.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-200 mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Ana Luiza</p>
                    <p className="text-sm text-gray-500">
                      Ex-aluna, hoje Desenvolvedora de Software
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg relative">
                <div className="text-5xl text-purple-200 absolute -top-6 left-4">"</div>
                <p className="text-gray-700 mb-4 relative z-10">
                  Participar do Instituto abriu minha mente para possibilidades que eu nem
                  imaginava. Aprendi não apenas habilidades técnicas, mas também a acreditar no meu
                  potencial. Hoje sou a primeira pessoa da minha família a cursar ensino superior.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-200 mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Carlos Eduardo</p>
                    <p className="text-sm text-gray-500">Ex-aluno, Estudante de Engenharia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
