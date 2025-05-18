import { motion } from "framer-motion"

import { AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import { ContatoApoio } from "~/components/contato-apoio"
import { CTA } from "~/components/cta"
import { Estatisticas } from "~/components/estatisticas"
import { Footer } from "~/components/footer"
import { Hero } from "~/components/hero"
import { ImpactosCases } from "~/components/impactos-cases"
import { Navbar } from "~/components/navbar"
import { ODSFuturo } from "~/components/ods-futuro"
import { Parceiros } from "~/components/parceiros"
import { PublicoAtuacao } from "~/components/publico-atuacao"
import { QuemSomos } from "~/components/quem-somos"
import { SplashScreen } from "~/components/splash-screen"
import { VisaoValores } from "~/components/visao-valores"
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula um tempo de carregamento
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <SplashScreen key="splash" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white"
        >
          <Navbar />
          <Hero />
          <QuemSomos />
          <VisaoValores />
          <PublicoAtuacao />
          <Estatisticas />
          <ImpactosCases />
          <ODSFuturo />
          <Parceiros />
          <CTA />
          <ContatoApoio />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
