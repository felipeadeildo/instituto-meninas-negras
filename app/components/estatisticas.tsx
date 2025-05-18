import { motion } from "framer-motion"
import { Award, GraduationCap, Laptop, Users } from "lucide-react"
import { useEffect, useState } from "react"

export const Estatisticas = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      value: 200,
      label: "Jovens Impactados",
      suffix: "+",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      value: 8,
      label: "Anos de Atuação",
    },
    {
      icon: <Laptop className="h-8 w-8 text-indigo-600" />,
      value: 12,
      label: "Programas Desenvolvidos",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      value: 30,
      label: "Parcerias Estabelecidas",
      suffix: "+",
    },
  ]

  // Estado para controlar a contagem animada
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  // Animação de contagem quando o componente é visível
  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const element = document.getElementById("estatisticas-section")

    if (element && !hasAnimated) {
      observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            animateNumbers()
            setHasAnimated(true)
            if (observer) observer.disconnect()
          }
        },
        { threshold: 0.3 }
      )

      observer.observe(element)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [hasAnimated])

  const animateNumbers = () => {
    // Duração da animação em ms
    const duration = 2000
    // Número de passos para a animação
    const steps = 50
    // Intervalo entre os passos
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++

      if (step <= steps) {
        setCounts(
          stats.map((stat, index) => {
            return Math.floor((stat.value * step) / steps)
          })
        )
      } else {
        setCounts(stats.map(stat => stat.value))
        clearInterval(timer)
      }
    }, interval)
  }

  return (
    <section id="estatisticas-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {counts[index]}
                {stat.suffix || ""}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
