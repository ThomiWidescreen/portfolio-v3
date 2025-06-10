"use client"

import { motion, useAnimation, type Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { ExternalLink, BarChart3, Globe, Bot, Code, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Proof of Reserves Dashboard",
    description:
      "Real-time crypto audit tool for CEXs like OKX & KuCoin with live monitoring and transparency features.",
    tech: [
      { name: "React", description: "Frontend UI library" },
      { name: "Node.js", description: "Backend runtime" },
      { name: "PostgreSQL", description: "Relational database" },
      { name: "Web3", description: "Blockchain interaction" },
      { name: "Real-time APIs", description: "Live data streaming" },
    ],
    primaryTech: ["React", "PostgreSQL", "Web3.js"],
    color: "cyan",
    icon: BarChart3,
    demo: "#",
    github: "#",
    animationType: "matrix",
  },
  {
    title: "Escrow DApp",
    description: "Worldcoin + ZetaChain powered global freelance DApp using Kleros for dispute resolution.",
    tech: [
      { name: "Solidity", description: "Smart contract language" },
      { name: "ZetaChain", description: "Cross-chain protocol" },
      { name: "Worldcoin", description: "Identity verification" },
      { name: "Kleros", description: "Decentralized arbitration" },
      { name: "React", description: "Frontend UI library" },
      { name: "Web3", description: "Blockchain interaction" },
    ],
    primaryTech: ["Solidity", "ZetaChain", "React"],
    color: "green",
    icon: Globe,
    demo: "#",
    github: "#",
    animationType: "chain",
  },
  {
    title: "Insurance Bot Framework",
    description: "Automated AWS Lambda bots for Safeco, Progressive, and other insurance providers.",
    tech: [
      { name: "Python", description: "Primary language" },
      { name: "AWS Lambda", description: "Serverless functions" },
      { name: "FastAPI", description: "API framework" },
      { name: "Automation", description: "Process automation" },
      { name: "Insurance APIs", description: "Provider integrations" },
    ],
    primaryTech: ["Python", "AWS Lambda", "FastAPI"],
    color: "purple",
    icon: Bot,
    demo: "#",
    github: "#",
    animationType: "terminal",
  },
  {
    title: "AI Agent Builder",
    description:
      "Internal tool using LangChain & FastAPI to let users build their own AI agents with custom workflows.",
    tech: [
      { name: "LangChain", description: "AI orchestration framework" },
      { name: "FastAPI", description: "API framework" },
      { name: "OpenAI", description: "AI model provider" },
      { name: "React", description: "Frontend UI library" },
      { name: "Python", description: "Backend language" },
    ],
    primaryTech: ["LangChain", "FastAPI", "React"],
    color: "orange",
    icon: Code,
    demo: "#",
    github: "#",
    animationType: "code",
  },
  {
    title: "EUC Marketplace",
    description: "Comparison and resale platform for electric unicycles with advanced filtering and user reviews.",
    tech: [
      { name: "Next.js", description: "React framework" },
      { name: "MongoDB", description: "NoSQL database" },
      { name: "TailwindCSS", description: "Utility CSS framework" },
      { name: "Node.js", description: "Backend runtime" },
    ],
    primaryTech: ["Next.js", "MongoDB"],
    color: "blue",
    icon: Database,
    demo: "#",
    github: "#",
    animationType: "pulse",
  },
]

const colorClasses: Record<string,{
        border: string;
        bg: string;
        text: string;
        glow: string;
        button: string;
        icon: string;
    }> = {
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-400/70",
    bg: "from-cyan-500/20 to-blue-600/20",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/30",
    button: "border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400",
    icon: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  green: {
    border: "border-green-500/30 hover:border-green-400/70",
    bg: "from-green-500/20 to-teal-600/20",
    text: "text-green-400",
    glow: "shadow-green-500/30",
    button: "border-green-500/30 hover:border-green-400 hover:bg-green-500/10 text-green-400",
    icon: "bg-gradient-to-r from-green-500 to-teal-500",
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-400/70",
    bg: "from-purple-500/20 to-pink-600/20",
    text: "text-purple-400",
    glow: "shadow-purple-500/30",
    button: "border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 text-purple-400",
    icon: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  orange: {
    border: "border-orange-500/30 hover:border-orange-400/70",
    bg: "from-orange-500/20 to-red-600/20",
    text: "text-orange-400",
    glow: "shadow-orange-500/30",
    button: "border-orange-500/30 hover:border-orange-400 hover:bg-orange-500/10 text-orange-400",
    icon: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  blue: {
    border: "border-blue-500/30 hover:border-blue-400/70",
    bg: "from-blue-500/20 to-indigo-600/20",
    text: "text-blue-400",
    glow: "shadow-blue-500/30",
    button: "border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 text-blue-400",
    icon: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
}

// Custom animations for each project type
const MatrixBackground = ({ color }: { color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500">
      <div className="matrix-animation">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`matrix-column ${colorClasses[color as keyof typeof colorClasses].text}`}
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0, 1, 0], y: 20 }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: j * 0.2 + i * 0.1,
                }}
                className="text-xs font-mono"
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const ChainBackground = ({ color }: { color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500">
      <div className="chain-animation">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          >
            <div className="flex items-center">
              {Array.from({ length: 8 }).map((_, j) => (
                <motion.div
                  key={j}
                  className={`w-8 h-8 mx-1 rounded-full border-2 ${colorClasses[color as keyof typeof colorClasses].border}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: j * 0.1 + i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const TerminalBackground = ({ color }: { color: string }) => {
  const lines = [
    "> initializing bot...",
    "> connecting to API...",
    "> fetching policy data...",
    "> processing request...",
    "> generating response...",
    "> request complete",
  ]

  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-500">
      <div className="terminal-animation p-4 font-mono text-xs">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={`${colorClasses[color as keyof typeof colorClasses].text}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.4 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const CodeBackground = ({ color }: { color: string }) => {
  const codeLines = [
    "import { LangChain } from 'langchain';",
    "const agent = new Agent({",
    "  model: 'gpt-4',",
    "  tools: [search, calculator],",
    "  memory: new BufferMemory()",
    "});",
    "",
    "await agent.run('Analyze market data');",
  ]

  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-500">
      <div className="code-animation p-4 font-mono text-xs">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className={`${colorClasses[color as keyof typeof colorClasses].text}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const PulseBackground = ({ color }: { color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500">
      <div className="pulse-animation">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${colorClasses[color as keyof typeof colorClasses].bg}`}
            style={{
              top: "50%",
              left: "50%",
              width: "50%",
              height: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scale: [1, 2, 3],
              opacity: [0.2, 0.1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const cardVariants: Variants = {
    rest: {
      y: 0,
      opacity: 0,
      rotate: index % 2 === 0 ? -2 : 2,
      scale: 0.95,
    },
    hover: {
      y: -6,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.25 },
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  }

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -20 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3 + index * 0.2,
      },
    },
  }

  const renderBackgroundAnimation = () => {
    switch (project.animationType) {
      case "matrix":
        return <MatrixBackground color={project.color} />
      case "chain":
        return <ChainBackground color={project.color} />
      case "terminal":
        return <TerminalBackground color={project.color} />
      case "code":
        return <CodeBackground color={project.color} />
      case "pulse":
        return <PulseBackground color={project.color} />
      default:
        return null
    }
  }

  // const renderCustomButton = () => {
  //   const buttonClass = `flex-1 border bg-transparent ${colorClasses[project.color as keyof typeof colorClasses].button}`

  //   switch (project.animationType) {
  //     case "matrix":
  //       return (
  //         <Button size="sm" variant="outline" className={`${buttonClass} relative overflow-hidden group/button`}>
  //           <span className="relative z-10 flex items-center">
  //             <ExternalLink size={16} className="mr-2" />
  //             Demo
  //           </span>
  //           <motion.div
  //             className={`absolute inset-0 opacity-0 group-hover/button:opacity-20 ${colorClasses[project.color as keyof typeof colorClasses].bg}`}
  //             animate={{
  //               backgroundPosition: ["0% 0%", "100% 100%"],
  //             }}
  //             transition={{
  //               duration: 2,
  //               repeat: Number.POSITIVE_INFINITY,
  //               repeatType: "reverse",
  //             }}
  //             style={{ backgroundSize: "200% 200%" }}
  //           />
  //         </Button>
  //       )
  //     case "chain":
  //       return (
  //         <motion.div className="flex-1" whileHover={{ scale: 1.05 }}>
  //           <Button size="sm" variant="outline" className={buttonClass}>
  //             <ExternalLink size={16} className="mr-2" />
  //             Demo
  //           </Button>
  //         </motion.div>
  //       )
  //     case "terminal":
  //       return (
  //         <Button size="sm" variant="outline" className={buttonClass}>
  //           <ExternalLink size={16} className="mr-2" />
  //           <motion.span
  //             initial={{ width: 0 }}
  //             whileHover={{ width: "auto" }}
  //             className="overflow-hidden whitespace-nowrap"
  //           >
  //             Demo
  //           </motion.span>
  //         </Button>
  //       )
  //     default:
  //       return (
  //         <Button size="sm" variant="outline" className={buttonClass}>
  //           <ExternalLink size={16} className="mr-2" />
  //           Demo
  //         </Button>
  //       )
  //   }
  // }

  return (
    <motion.div
      className={`glass-card rounded-2xl overflow-hidden border transition-all duration-500 group relative ${colorClasses[project.color].border} ${colorClasses[project.color].glow}`}
      variants={cardVariants}
      initial="rest"
      animate="visible"
      whileHover="hover"
    >
      {renderBackgroundAnimation()}

      <div className={`h-1 bg-gradient-to-r ${colorClasses[project.color].icon}`}></div>

      <div className="p-6 relative z-10">
        {/* Icon and Title */}
        <div className="flex items-start mb-4">
          <motion.div
            variants={iconVariants}
            className={`p-3 rounded-lg ${colorClasses[project.color].icon} mr-4 mt-1`}
          >
            <project.icon size={24} className="text-white" />
          </motion.div>
          <div>
            <h3
              className={`text-xl font-semibold mb-1 group-hover:text-white transition-colors ${colorClasses[project.color].text}`}
            >
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: any) => (
            <div
              key={`${project.title}-${tech.name}`}
              className="relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.span
                whileHover={{ y: -2, scale: 1.05 }}
                className={`px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700 transition-all duration-300`}
              >
                {tech.name}
              </motion.span>

              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pointer-events-none absolute bottom-full left-0 mb-2 p-2 bg-gray-900/95 backdrop-blur-sm border border-gray-600 rounded-lg text-xs text-gray-300 whitespace-nowrap z-20 shadow-lg"
                >
                  {tech.description}
                  <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-600"></div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        {/* <div className="flex space-x-3">
          {renderCustomButton()}
          <Button
            size="sm"
            variant="outline"
            className="border-gray-600 bg-transparent hover:border-gray-500 hover:bg-gray-800/50"
          >
            <Github size={16} />
          </Button>
        </div> */}
      </div>
    </motion.div>
  )
}


export default function Projects() {
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative solutions across Web3, AI, and full-stack development
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
