import { MessageSquare, Cog, Rocket, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/aurora-background'

const steps = [
  {
    icon: MessageSquare,
    number: 1,
    title: 'Tell Us Your Needs',
    description: 'Share your current workflows, pain points, and what you want to automate in your real estate business.',
    gradient: 'from-primary/10 to-slate-500/10',
    borderColor: 'border-primary/20',
    shadowColor: 'shadow-primary/5',
    iconColor: 'text-primary',
    badgeColor: 'bg-primary'
  },
  {
    icon: Cog,
    number: 2,
    title: 'We Build Your Solution',
    description: 'Our team designs and develops custom automations tailored to your specific processes and tools.',
    gradient: 'from-slate-500/10 to-cyan-500/10',
    borderColor: 'border-slate-500/20',
    shadowColor: 'shadow-slate-500/5',
    iconColor: 'text-slate-600',
    badgeColor: 'bg-slate-600'
  },
  {
    icon: Rocket,
    number: 3,
    title: 'Launch & Scale',
    description: 'Deploy your automations and watch your productivity soar—we provide ongoing support as you grow.',
    gradient: 'from-cyan-500/10 to-teal-500/10',
    borderColor: 'border-cyan-500/20',
    shadowColor: 'shadow-cyan-500/5',
    iconColor: 'text-cyan-600',
    badgeColor: 'bg-cyan-600'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const stepVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="min-h-screen overflow-hidden snap-start snap-always relative">
      <AuroraBackground className="min-h-screen py-24 md:py-32">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. Three steps to automating your workflow.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, index) => (
              <motion.div key={index} className="text-center" variants={stepVariants}>
                <motion.div
                  className={`relative mx-auto w-32 h-32 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-8 border ${step.borderColor} shadow-xl ${step.shadowColor} bg-white/80 backdrop-blur-sm`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.span
                    className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${step.badgeColor} text-white text-sm font-bold flex items-center justify-center`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, type: "spring", stiffness: 500 }}
                  >
                    {step.number}
                  </motion.span>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <step.icon className={`w-12 h-12 ${step.iconColor}`} />
                  </motion.div>
                </motion.div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Scroll Hint */}
        <motion.button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="text-sm font-medium">Get Started</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </AuroraBackground>
    </section>
  )
}
