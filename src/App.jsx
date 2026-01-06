import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'
import K2Logo from './components/K2Logo'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <K2Logo className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-semibold text-foreground">Sherpa</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            How It Works
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Contact
          </a>
        </div>

        <Button asChild className="shadow-lg shadow-primary/20">
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </motion.nav>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
