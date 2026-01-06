import K2Logo from './K2Logo'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="py-12 border-t border-border bg-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <K2Logo className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-semibold text-foreground">Sherpa</span>
          </motion.div>

          <div className="text-muted-foreground text-sm">
            © 2025 Sherpa. All rights reserved.
          </div>

          <motion.a
            href="mailto:deniz@sherpalead.com"
            className="text-muted-foreground hover:text-primary text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            deniz@sherpalead.com
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
}
