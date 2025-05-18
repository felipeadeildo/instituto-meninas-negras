import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Início", href: "#" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Propósito", href: "#proposito" },
    { name: "Impacto", href: "#impacto" },
    { name: "Contato", href: "#contato" },
  ]

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-purple-700 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">MN</span>
            </div>
            <span className={`font-bold text-lg ${scrolled ? "text-purple-700" : "text-white"}`}>
              Meninas Negras
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-500 ${scrolled ? "text-gray-800" : "text-white"}`}
              >
                {item.name}
              </a>
            ))}
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apoie
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md outline-none focus:outline-none ${scrolled ? "text-gray-800" : "text-white"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-white rounded-md mt-2 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col py-2">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm text-gray-800 hover:bg-purple-50 hover:text-purple-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#apoie"
                className="mx-4 my-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Apoie
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
