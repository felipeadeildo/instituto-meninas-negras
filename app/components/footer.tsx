import { motion } from "framer-motion"
import { ArrowUp, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", href: "#" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", href: "#" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", href: "#" },
  ]

  const quickLinks = [
    { name: "Início", href: "#" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Propósito", href: "#proposito" },
    { name: "Impacto", href: "#impacto" },
    { name: "Contato", href: "#contato" },
    { name: "Apoie", href: "#apoie" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-purple-700 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">MN</span>
              </div>
              <span className="font-bold text-lg text-white">Meninas Negras</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando vidas através da educação, tecnologia e desenvolvimento pessoal.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-700 hover:text-white transition-colors"
                  whileHover={{ y: -5 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-purple-500 mr-3 mt-1" />
                <span className="text-gray-400">(11) 9XXXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-purple-500 mr-3 mt-1" />
                <span className="text-gray-400">contato@institutomeninasngras.org.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-500 mr-3 mt-1" />
                <span className="text-gray-400">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber novidades e atualizações sobre nosso trabalho.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l-md flex-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-r-md transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Instituto Meninas Negras. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Termos de Uso
            </a>
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-700 hover:text-white transition-colors"
              whileHover={{ y: -5 }}
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
