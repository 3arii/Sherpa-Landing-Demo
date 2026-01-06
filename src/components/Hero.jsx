import { Button } from '@/components/ui/button'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { ArrowRight, TrendingUp, ChevronDown } from 'lucide-react'
import { motion, LayoutGroup } from 'framer-motion'

const tenantQualities = ["Reliable", "High-Earning", "Long-Term", "Qualified", "Verified"]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Overlay gradient - subtle fade to background at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 via-70% to-white/70" />

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        {/* Main Content Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Main Headline with LayoutTextFlip */}
          <LayoutGroup>
            <motion.div layout className="flex flex-col items-center justify-center gap-2 mb-6">
              <motion.div layout className="flex items-center justify-center gap-3">
                <motion.h1 layout className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                  Find
                </motion.h1>
                <LayoutTextFlip
                  text=""
                  words={tenantQualities}
                  duration={3000}
                  wordClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-cyan-600 text-white dark:bg-cyan-600 dark:text-white"
                />
              </motion.div>
              <motion.h1 layout className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                Tenants
              </motion.h1>
            </motion.div>
          </LayoutGroup>

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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
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

            <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold group bg-white/50" asChild>
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

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 md:gap-12 pt-6 border-t border-border/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.div
              className="text-center px-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-bold text-foreground">
                <TrendingUp className="w-5 h-5 text-cyan-600" />
                <span>3x*</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Higher Close Rate</p>
            </motion.div>

            <div className="w-px h-10 bg-border/50 hidden md:block" />

            <motion.div
              className="text-center px-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground">48h*</div>
              <p className="text-sm text-muted-foreground mt-1">To First Lead</p>
            </motion.div>

            <div className="w-px h-10 bg-border/50 hidden md:block" />

            <motion.div
              className="text-center px-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground">100%</div>
              <p className="text-sm text-muted-foreground mt-1">Pre-Screened</p>
            </motion.div>
          </motion.div>

          <p className="text-xs text-muted-foreground mt-4">*Based on average results</p>
        </motion.div>
      </div>

      {/* Scroll Hint - positioned relative to section, not content */}
      <motion.a
        href="#why-sherpa"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
    </section>
  )
}
