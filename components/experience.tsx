"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Trophy } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    period: "2024 – Present",
    company: "Hacken",
    role: "Blockchain Auditor & Full Stack Developer",
    location: "Remote",
    description:
      "Leading blockchain security audits and developing full-stack solutions for CEX's. Building audit tools and dashboards for enhanced security analysis.",
    tech: ["Solidity", "React", "Node.js", "Security Auditing", "DeFi"],
    color: "cyan",
  },
  {
    period: "2024",
    company: "Aleph Hackathon ($3000)",
    role: "Winner - Polygon & GoPlus Bounties",
    location: "Virtual",
    description: "Signlana is a secure mobile wallet for Solana and EVM that enables offline transaction signing via QR codes—no internet needed on the device holding your keys.",
    tech: ["Web3", "Blockchain", "Security"],
    color: "gold",
    isSpecial: true,
    links: [
      { name: "GitHub", url: "https://github.com/jowisaidman/Signlana" },
      { name: "DoraHacks", url: "https://dorahacks.io/buidl/15188" },
    ],
  },
  {
    period: "2024",
    company: "Xilo",
    role: "Full Stack Developer",
    location: "Remote",
    description:
      "Developed automated insurance bots for major providers including Safeco and Progressive. Built scalable AWS Lambda functions for policy automation.",
    tech: ["Python", "AWS Lambda", "FastAPI", "Insurance APIs", "Automation"],
    color: "green",
  },
  {
    period: "2022 – 2024",
    company: "Peninsula",
    role: "Full Stack Developer",
    location: "Remote",
    description:
      "Built microservices architecture and LangChain-powered AI agents for sales automation. Developed scalable SaaS solutions with advanced AI capabilities.",
    tech: ["LangChain", "Microservices", "AI Agents", "SaaS", "Python", "React"],
    color: "purple",
  },
  {
    period: "2021 – 2022",
    company: "OTS",
    role: "Full Stack Developer",
    location: "Remote",
    description:
      "Developed logistics applications with MongoDB, focusing on performance optimization and multi-country support. Enhanced system scalability and user experience.",
    tech: ["MongoDB", "Node.js", "React", "Performance Optimization", "Logistics"],
    color: "orange",
  },
]

const colorClasses = {
  cyan: "border-cyan-500/30 bg-cyan-500/10",
  green: "border-green-500/30 bg-green-500/10",
  purple: "border-purple-500/30 bg-purple-500/10",
  orange: "border-orange-500/30 bg-orange-500/10",
  gold: "border-yellow-500/30 bg-yellow-500/10",
}

export default function Experience() {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const CelebrationParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="experience" className="py-20 relative">
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
            Experience Timeline
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey through innovative companies and cutting-edge technologies
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-green-500 to-purple-500"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full border-4 border-gray-950 z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} ml-16 md:ml-0`}
                >
                  {exp.isSpecial ? (
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="relative glass-card p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group"
                    >
                      <CelebrationParticles />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-yellow-400 flex items-center">
                            <Trophy size={16} className="mr-2" />
                            {exp.period}
                          </span>
                          <span className="text-sm text-gray-400 flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {exp.location}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-yellow-400 mb-1">{exp.company}</h3>
                        <h4 className="text-sm text-white mb-2">{exp.role}</h4>
                        <p className="text-xs text-gray-300 mb-3">{exp.description}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {exp.links?.map((link) => (
                              <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-yellow-400 hover:text-yellow-300 underline"
                              >
                                {link.name}
                              </a>
                            ))}
                          </div>
                          <div className="flex space-x-2">
                            <Image src={"/polygon.svg"} width={20} height={20} alt="Polygon"/>
                            <Image src={"/goplus.svg"} width={20} height={20} alt="GoPlus Security" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`glass-card p-6 rounded-2xl border transition-all duration-300 ${colorClasses[exp.color as keyof typeof colorClasses]}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-400 flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </span>
                        <span className="text-sm text-gray-400 flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-1">{exp.company}</h3>
                      <h4 className="text-lg text-cyan-400 mb-3">{exp.role}</h4>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
