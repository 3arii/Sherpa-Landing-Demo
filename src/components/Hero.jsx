import { Button } from '@/components/ui/button'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { ArrowRight, TrendingUp, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const tenantQualities = ["Reliable", "High-Earning", "Long-Term", "Qualified", "Verified"]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="container mx-auto px-6 text-center pt-20">
        {/* Main Headline with LayoutTextFlip */}
        <motion.div
          className="flex flex-col items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
            Find
          </h1>
          <motion.div layout className="flex items-center justify-center">
            <LayoutTextFlip
              text=""
              words={tenantQualities}
              duration={3000}
              wordClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-cyan-600 text-white dark:bg-cyan-600 dark:text-white"
            />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
            Tenants
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Stop dealing with vacancies. We connect property managers with{' '}
          <span className="text-foreground font-semibold">pre-screened, qualified tenants</span> ready to sign.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#contact">
            <ShimmerButton
              className="h-14 px-8 text-lg font-semibold"
              shimmerColor="#ffffff"
              shimmerSize="0.1em"
              background="linear-gradient(135deg, #1e293b 0%, #334155 100%)"
            >
              <span className="flex items-center gap-2">
                Fill Your Vacancies
                <ArrowRight className="w-5 h-5" />
              </span>
            </ShimmerButton>
          </a>

          <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold group" asChild>
            <a href="#how-it-works" className="flex items-center gap-2">
              See How It Works
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </Button>
        </motion.div>

        {/* Stats from original */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-bold text-foreground">
              <TrendingUp className="w-6 h-6 text-cyan-600" />
              <span>3x</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Higher Close Rate</p>
          </motion.div>

          <div className="w-px h-12 bg-border hidden md:block" />

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-foreground">48h</div>
            <p className="text-sm text-muted-foreground mt-1">To First Lead</p>
          </motion.div>

          <div className="w-px h-12 bg-border hidden md:block" />

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl md:text-4xl font-bold text-foreground">100%</div>
            <p className="text-sm text-muted-foreground mt-1">Pre-Screened</p>
          </motion.div>
        </motion.div>

        {/* Scroll Hint */}
        <motion.a
          href="#why-sherpa"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}
