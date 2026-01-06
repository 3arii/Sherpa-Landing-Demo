import { MagicCard } from '@/components/ui/magic-card'
import { NumberTicker } from '@/components/ui/number-ticker'
import { MapPin, Shield, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: MapPin,
    title: 'Targeted Leads',
    description: 'We find property owners actively looking for management services in your specific area and niche.',
    stat: 95,
    statLabel: '% Match Rate'
  },
  {
    icon: Shield,
    title: 'Verified & Qualified',
    description: 'Every lead is pre-screened for intent, budget, and property details before reaching you.',
    stat: 100,
    statLabel: '% Verified'
  },
  {
    icon: TrendingUp,
    title: 'Percent of Rent',
    description: 'We only earn when you earn. Pay a small percentage of collected rent—no upfront fees.',
    stat: 3,
    statLabel: '% of Rent'
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
    <section className="py-24 md:py-32 bg-muted/30 overflow-hidden">
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
            We handle the hard work of finding qualified leads so you can focus on growing your portfolio.
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
                gradientColor="rgba(99, 102, 241, 0.1)"
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

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {feature.description}
                  </p>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary">
                        <NumberTicker value={feature.stat} />
                      </span>
                      <span className="text-lg text-muted-foreground">{feature.statLabel}</span>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
