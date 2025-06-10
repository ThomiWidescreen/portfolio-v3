"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-green-500/20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            {"Let's Connect"}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to build something amazing together? Drop me a message!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <p className="text-gray-400">alejoidecano@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-gray-400">Córdoba, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Find me on social platforms:</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/thomiwidescreen", label: "GitHub", color: "hover:text-gray-300" },
                    { icon: Linkedin, href: "https://linkedin.com/in/alejo-thomas", label: "LinkedIn", color: "hover:text-blue-400" },
                    { icon: Mail, href: "mailto:alejoidecano@gmail.com", label: "Email", color: "hover:text-green-400" },

                  ].map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-gray-400 ${color}`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative group">
              {/* Original Form - blurs on hover */}
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 rounded-2xl space-y-6 transition-all duration-500 group-hover:blur-sm group-hover:scale-95 relative"
              >
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                {/* Form content with relative positioning */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-6 text-green-400">Send a Message</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 glow-button"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>

              {/* Hover Overlay - appears on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                <div className="text-center space-y-8 p-8">
                  {/* Fun Message */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text">
                      Wait, who uses forms anymore?
                    </h3>
                    <p className="text-gray-300 text-lg">Let's keep it simple!</p>
                  </div>

                  {/* Big Email Button */}
                  <motion.a
                    href="mailto:alejoidecano@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 glow-button"
                  >
                    <Mail size={24} className="mr-2" />
                    Reach me by email
                  </motion.a>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <p className="text-gray-400">Or find me on:</p>
                    <div className="flex justify-center space-x-6">
                      {[
                        { icon: Github, href: "https://github.com/thomiwidescreen", label: "GitHub", color: "hover:text-gray-300" },
                        { icon: Linkedin, href: "https://linkedin.com/in/alejo-thomas", label: "LinkedIn", color: "hover:text-blue-400" },
                      ].map(({ icon: Icon, href, label, color }) => (
                        <motion.a
                          key={label}
                          href={href}
                          whileHover={{ scale: 1.2, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className={`flex flex-col items-center w-18 h-18 space-y-2 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-gray-400 ${color} group/social`}
                        >
                          <Icon size={24} className="group-hover/social:scale-110 transition-transform" />
                          <span className="text-xs font-medium">{label}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Fun Footer */}
                  <p className="text-gray-200 text-sm italic">"Because clicking is easier than typing"</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
