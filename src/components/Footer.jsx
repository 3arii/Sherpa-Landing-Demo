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
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <img src="/sherpa-manonly.svg" alt="Sherpa" className="h-8 w-auto" />
            <img src="/text-only.svg" alt="Sherpa" className="h-5 w-auto" />
          </motion.a>

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
