import { MagicCard } from '@/components/ui/magic-card'
import { Users, Shield, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Users,
    title: 'Pre-Screened Tenants',
    description: 'Every tenant is vetted for credit, income, rental history, and background before reaching you.',
    stat: '100%',
    statLabel: 'Pre-Screened',
  },
  {
    icon: Shield,
    title: 'Verified & Qualified',
    description: 'We verify employment, references, and rental history to ensure only quality applicants.',
    stat: '3x*',
    statLabel: 'Higher Close Rate',
  },
  {
    icon: Clock,
    title: 'Fast Placement',
    description: 'Fill vacancies faster with our network of ready-to-move tenants actively searching.',
    stat: '48h*',
    statLabel: 'Avg. Time to First Lead',
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function ValueProps() {
  return (
    <section id="why-sherpa" className="py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Property Managers Choose Sherpa
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We handle the hard work of finding quality tenants so you can focus on managing your properties.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <MagicCard
                className="p-8 bg-card border-border/50 cursor-pointer h-full"
                gradientColor="rgba(30, 41, 59, 0.1)"
              >
                <div className="flex flex-col h-full">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-7 h-7" />
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed grow mb-6">
                    {feature.description}
                  </p>

                  <div className="pt-4 border-t border-border/50">
                    <motion.div
                      className="text-3xl font-bold text-primary"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {feature.stat}
                    </motion.div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-xs text-muted-foreground text-center mt-8">*Based on average results</p>
      </div>
    </section>
  )
}
