"use client"

import { motion } from "framer-motion"

export default function About() {
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Top Left: Hello World Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              rotateY: 5,
              rotateX: 5,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="glass-card p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 group perspective-1000"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative">
              {/* Animated background particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-semibold mb-4 text-cyan-400 flex items-center font-mono"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                    className="mr-2 text-3xl"
                  >
                    👋
                  </motion.span>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "auto" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="overflow-hidden"
                  >
                    Hello, World!
                  </motion.span>
                </motion.h3>

                <motion.p
                  className="text-gray-300 leading-relaxed mb-4 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  I'm a <span className="text-cyan-400 font-semibold">self-taught</span> Full Stack Developer originally
                  from
                  <span className="mx-1">🇦🇷</span>Argentina, currently based in
                  <span className="mx-1">🌏</span>Córdoba.
                </motion.p>

                <motion.p
                  className="text-gray-300 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  I specialize in building <span className="text-green-400 font-semibold">practical, scalable</span>{" "}
                  applications at the intersection of <span className="text-purple-400 font-semibold">Web3</span>,
                  <span className="text-cyan-400 font-semibold"> AI</span>, and
                  <span className="text-orange-400 font-semibold"> Infrastructure</span>.
                </motion.p>

                {/* Status indicator */}
                <motion.div
                  className="mt-6 flex items-center space-x-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                  />
                  <span className="text-green-400 text-sm font-medium">Available for work</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Top Right: Fun Facts Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              rotateY: -5,
              rotateX: 5,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="glass-card p-8 rounded-2xl border border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/20 group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6 text-green-400 flex items-center font-mono"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="mr-2 text-2xl"
              >
                ⚡
              </motion.span>
              Fun Facts
            </motion.h3>

            <div className="space-y-4">
              {[
                { emoji: "🛞", text: "I ride electric unicycles and build software that moves fast too", delay: 0.6 },
                { emoji: "🧠", text: "I like solving complex problems with simple, slightly weird code", delay: 0.8 },
                { emoji: "📶", text: "Remote by default, focused by design", delay: 1.0 },
                { emoji: "🧃", text: "Driven by curiosity, late-night ideas and overpriced juice", delay: 1.2 },
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: fact.delay }}
                  whileHover={{ x: 5, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                >
                  <motion.span
                    className="text-2xl"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {fact.emoji}
                  </motion.span>
                  <span className="text-gray-300 font-light">{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Left: Languages Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              rotateY: 5,
              rotateX: -5,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="glass-card p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20 group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h4
              className="text-2xl font-semibold mb-6 text-purple-400 flex items-center font-mono"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="mr-2 text-2xl"
              >
                🌐
              </motion.span>
              Languages
            </motion.h4>

            <div className="grid grid-cols-1 gap-4">
              {[
                { lang: "Spanish", level: "Native", flag: "🇪🇸", delay: 0.6 },
                { lang: "English", level: "C1", flag: "🇺🇸", delay: 0.8 },
                { lang: "Portuguese", level: "B1", flag: "🇧🇷", delay: 1.0 },
                { lang: "German", level: "A1", flag: "🇩🇪", delay: 1.2 },
              ].map(({ lang, level, flag, delay }) => (
                <motion.div
                  key={lang}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.05)" }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.span
                      className="text-2xl"
                      whileHover={{ scale: 1.4, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {flag}
                    </motion.span>
                    <span className="text-gray-300 font-medium">{lang}</span>
                  </div>
                  <motion.span
                    className="text-purple-400 font-semibold px-2 py-1 bg-purple-500/20 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {level}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Right: Current Location Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              rotateY: -5,
              rotateX: -5,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="glass-card p-8 rounded-2xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/20 group relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0 animate-pulse"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.h4
                className="text-2xl font-semibold mb-6 text-orange-400 flex items-center font-mono"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    filter: [
                      "drop-shadow(0 0 5px rgba(251, 146, 60, 0.5))",
                      "drop-shadow(0 0 15px rgba(251, 146, 60, 0.8))",
                      "drop-shadow(0 0 5px rgba(251, 146, 60, 0.5))",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="mr-2 text-2xl"
                >
                  📍
                </motion.span>
                Current Location
              </motion.h4>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center"
                  >
                    <span className="text-white text-sm">🌏</span>
                  </motion.div>
                  <div>
                    <p className="text-gray-300 font-semibold text-lg">Córdoba, Argentina</p>
                    <motion.p
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      GMT-3 •{" "}
                      {new Date().toLocaleTimeString("en-US", {
                        timeZone: "America/Argentina/Buenos_Aires",
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}

                      local time
                    </motion.p>
                  </div>
                </div>

                <motion.div
                  className="mt-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <p className="text-gray-400 text-sm mb-2">Open to opportunities:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Remote", "Hybrid", "Relocation"].map((type, index) => (
                      <motion.span
                        key={type}
                        className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(251, 146, 60, 0.3)" }}
                      >
                        {type}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
