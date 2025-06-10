"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">


          {/* Copyright */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="text-red-400 mx-1" /> by Alejo Thomas Cano
            </p>
            <p className="text-gray-500 text-xs mt-1">© 2024 All rights reserved</p>
          </motion.div>


        </div>
      </div>
    </footer>
  )
}
