import { motion } from "framer-motion"
import { ArrowRight, Check, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export const ContatoApoio = () => {
  const [activeTab, setActiveTab] = useState("contato")
  const [formSubmitted, setFormSubmitted] = useState(false)

  // TODO: implementar funcionalidade de envio de formulário
  const handleSubmit = () => {
    // Simulação de envio de formulário
    setTimeout(() => {
      setFormSubmitted(true)
      setTimeout(() => setFormSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contato e Apoio</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Entre em contato para mais informações ou faça sua contribuição para o Instituto
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="flex border-b">
              <button
                className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === "contato" ? "text-purple-700 border-b-2 border-purple-700" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("contato")}
              >
                Contato e Inscrições
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === "apoio" ? "text-purple-700 border-b-2 border-purple-700" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("apoio")}
              >
                Apoie o Instituto
              </button>
            </div>

            <div className="p-6 md:p-8">
              {activeTab === "contato" ? (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Informações de Contato</h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                          <Phone className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Telefone</p>
                          <p className="font-medium text-gray-900">(11) 9XXXX-XXXX</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                          <Mail className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium text-gray-900">
                            contato@institutomeninasngras.org.br
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1">
                          <MapPin className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Endereço</p>
                          <p className="font-medium text-gray-900">São Paulo, SP</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                      <h4 className="font-medium text-purple-700 mb-2">
                        Informações para Inscrições
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Para inscrições de jovens em nossos programas, preencha o formulário ao lado
                        ou entre em contato pelos nossos canais de comunicação.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                          <span>Idade: entre 14 e 24 anos</span>
                        </li>
                        <li className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                          <span>Residir em São Paulo ou Grande SP</span>
                        </li>
                        <li className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-purple-600 mr-2" />
                          <span>Estar matriculado na escola (para menores de 18 anos)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Envie sua mensagem</h3>

                    {formSubmitted ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-green-800">
                            Mensagem enviada com sucesso!
                          </p>
                          <p className="text-sm text-green-600">Entraremos em contato em breve.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nome completo
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Telefone
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Assunto
                          </label>
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                            <option value="informacoes">Informações</option>
                            <option value="inscricao">Inscrição no programa</option>
                            <option value="parceria">Proposta de parceria</option>
                            <option value="voluntariado">Trabalho voluntário</option>
                            <option value="outro">Outro</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mensagem
                          </label>
                          <textarea
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          ></textarea>
                        </div>

                        <motion.button
                          onClick={handleSubmit}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensagem
                        </motion.button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Faça sua contribuição</h3>
                    <p className="text-gray-600 mb-6">
                      Sua doação é fundamental para continuarmos transformando vidas. Cada
                      contribuição nos ajuda a expandir nosso trabalho e impactar mais jovens.
                    </p>

                    <div className="space-y-6">
                      <div className="border border-gray-200 rounded-lg p-5">
                        <h4 className="font-bold text-gray-900 mb-2">Transferência bancária</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>
                            <span className="font-medium">Banco:</span> 000 - Banco Exemplo
                          </li>
                          <li>
                            <span className="font-medium">Agência:</span> 0000
                          </li>
                          <li>
                            <span className="font-medium">Conta:</span> 00000-0
                          </li>
                          <li>
                            <span className="font-medium">CNPJ:</span> 00.000.000/0001-00
                          </li>
                          <li>
                            <span className="font-medium">Titular:</span> Instituto Meninas Negras
                          </li>
                        </ul>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-5">
                        <h4 className="font-bold text-gray-900 mb-2">Doação via Pix</h4>
                        <p className="text-gray-600 mb-4">Chave PIX (CNPJ): 00.000.000/0001-00</p>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-center">
                          <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                        </div>
                        <p className="text-sm text-gray-500 text-center">QR Code para doação</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Outras formas de apoio</h3>

                    <div className="space-y-6">
                      <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                        <h4 className="font-semibold text-purple-700 mb-2">Seja voluntário</h4>
                        <p className="text-gray-600 mb-4">
                          Compartilhe seu conhecimento e experiência com nossos jovens, ajudando em
                          mentorias, palestras e outras atividades.
                        </p>
                        <motion.a
                          href="#"
                          className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800"
                          whileHover={{ x: 5 }}
                        >
                          Quero ser voluntário
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </motion.a>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                        <h4 className="font-semibold text-blue-700 mb-2">Parcerias empresariais</h4>
                        <p className="text-gray-600 mb-4">
                          Sua empresa pode contribuir com recursos, conhecimento, vagas de estágio
                          ou emprego para nossos jovens.
                        </p>
                        <motion.a
                          href="#"
                          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                          whileHover={{ x: 5 }}
                        >
                          Propor parceria
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </motion.a>
                      </div>

                      <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
                        <h4 className="font-semibold text-indigo-700 mb-2">
                          Doação de equipamentos
                        </h4>
                        <p className="text-gray-600 mb-4">
                          Contribua com computadores, tablets e outros equipamentos que possam ser
                          utilizados em nossas atividades.
                        </p>
                        <motion.a
                          href="#"
                          className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                          whileHover={{ x: 5 }}
                        >
                          Saiba como doar
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
