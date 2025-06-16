'use client'

import React from 'react'
import { motion } from 'framer-motion'
import NavBar from '../NavBar/NavBar'

const HeroSection = () => {
  return (
    <main
      className="select-none h-screen bg-cover bg-center bg-no-repeat bg-black relative"
      style={{ backgroundImage: "url('/images/background.avif')" }}
    >
      <div className="fixed top-0 w-full z-50">
        <NavBar />
      </div>

      <section className="bg-black/70 h-full flex justify-center items-center relative">
        <div className="text-white text-center px-5 z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold pb-7"
          >
            Feed your livestock the way nature intended
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg"
          >
            Harmony Feeds, Ota, Ogun State, is your go-to source for 100% organic animal feed, fertilizer, and medicine.
          </motion.p>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b via-[#3F1D0E]/5 from-transparent to-[#3F1D0E]"></div>
      </section>
    </main>
  )
}

export default HeroSection
