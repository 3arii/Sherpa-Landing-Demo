import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { HelpCircle } from 'lucide-react'

const navItems = [
  {
    name: "How It Works",
    link: "#how-it-works",
    icon: <HelpCircle className="h-4 w-4" />,
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
    <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
