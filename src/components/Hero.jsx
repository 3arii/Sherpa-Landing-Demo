import { Particles } from '@/components/ui/particles'
import { Button } from '@/components/ui/button'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Multiple Particle Layers for depth */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={150}
        staticity={30}
        ease={70}
        color="#6366f1"
        size={0.6}
      />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={80}
        staticity={50}
        ease={50}
        color="#8b5cf6"
        size={0.4}
      />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        staticity={70}
        ease={30}
        color="#06b6d4"
        size={0.3}
      />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 to-violet-500/30 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-violet-500/10 rounded-full blur-3xl -z-10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-6 text-center">
        {/* Animated Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-violet-500/10 border border-primary/20 text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            <span>Now accepting new partners</span>
            <Zap className="w-4 h-4 text-yellow-500" />
          </div>
        </motion.div>

        {/* Main Headline with stagger animation */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-foreground">Qualified Leads for</span>
          <br />
          <motion.span
            className="gradient-text"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Property Managers
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Stop chasing cold leads. We deliver property owners who are{' '}
          <span className="text-foreground font-semibold">actively looking</span> for management services.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ShimmerButton
            className="h-14 px-8 text-lg font-semibold"
            shimmerColor="#ffffff"
            shimmerSize="0.1em"
            background="linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
          >
            <a href="#contact" className="flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
          </ShimmerButton>

          <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold group">
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

        {/* Animated Stats */}
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
              <TrendingUp className="w-6 h-6 text-green-500" />
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
            <div className="text-3xl md:text-4xl font-bold text-foreground">$0</div>
            <p className="text-sm text-muted-foreground mt-1">Upfront Cost</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
