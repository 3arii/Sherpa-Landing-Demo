import { Home, Search, KeyRound } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: Home,
    number: 1,
    title: 'List Your Property',
    description: 'Share your property details: location, unit type, amenities, and rental requirements.',
    gradient: 'from-primary/10 to-slate-500/10',
    borderColor: 'border-primary/20',
    shadowColor: 'shadow-primary/5',
    iconColor: 'text-primary',
    badgeColor: 'bg-primary'
  },
  {
    icon: Search,
    number: 2,
    title: 'We Find Quality Tenants',
    description: 'Our team screens and matches qualified tenants based on your specific criteria.',
    gradient: 'from-slate-500/10 to-cyan-500/10',
    borderColor: 'border-slate-500/20',
    shadowColor: 'shadow-slate-500/5',
    iconColor: 'text-slate-600',
    badgeColor: 'bg-slate-600'
  },
  {
    icon: KeyRound,
    number: 3,
    title: 'Sign the Lease',
    description: 'Review pre-qualified applicants and close the deal—we handle the rest.',
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
    <section id="how-it-works" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
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
            Getting started is simple. Three steps to filling your vacancy.
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
                className={`relative mx-auto w-32 h-32 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-8 border ${step.borderColor} shadow-xl ${step.shadowColor}`}
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
    </section>
  )
}
