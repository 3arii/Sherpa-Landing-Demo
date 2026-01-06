import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { HelpCircle, Mail, Star } from 'lucide-react'

const navItems = [
  {
    name: "Why Sherpa",
    link: "#why-sherpa",
    icon: <Star className="h-4 w-4" />,
  },
  {
    name: "How It Works",
    link: "#how-it-works",
    icon: <HelpCircle className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Mail className="h-4 w-4" />,
  },
]

function Navbar() {
  return (
    <FloatingNav
      navItems={navItems}
      logo={
        <div className="flex items-center gap-2">
          <img src="/sherpa-manonly.svg" alt="Sherpa" className="h-8 w-auto" />
          <img src="/text-only.svg" alt="Sherpa" className="h-5 w-auto" />
        </div>
      }
    />
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
