"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Alejo Thomas Cano
          </span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          Full Stack Developer
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Building at the intersection of <span className="text-cyan-400 font-semibold">Web3</span>,{" "}
          <span className="text-green-400 font-semibold">AI</span> and{" "}
          <span className="text-purple-400 font-semibold">Infrastructure</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >


          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/thomiwidescreen", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/alejo-thomas", label: "LinkedIn" },
              { icon: Mail, href: "mailto:alejoidecano@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                target="_blank"
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Icon size={24} className="text-gray-300 hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="animate-bounce">
          <ArrowDown size={32} className="text-gray-500 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}
