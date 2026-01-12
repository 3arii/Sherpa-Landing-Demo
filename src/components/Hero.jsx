import { Button } from '@/components/ui/button'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion, LayoutGroup } from 'framer-motion'

const automationBenefits = ["Seamless", "Automated", "Efficient", "Smart", "Custom"]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always"
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
              <motion.div layout className="flex flex-wrap items-center justify-center gap-3">
                <LayoutTextFlip
                  text=""
                  words={automationBenefits}
                  duration={3000}
                  wordClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-cyan-600 text-white dark:bg-cyan-600 dark:text-white"
                />
                <motion.h1 layout className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                  Workflows
                </motion.h1>
              </motion.div>
              <motion.h1 layout className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                for Real Estate
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
            Stop wasting time on repetitive tasks. We build{' '}
            <span className="text-foreground font-semibold">custom workflow automations</span> tailored for real estate professionals.
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
                  Automate Your Workflow
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

        </motion.div>
      </div>

      {/* Scroll Hint - positioned relative to section, not content */}
      <motion.button
        onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
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
      </motion.button>
    </section>
  )
}
