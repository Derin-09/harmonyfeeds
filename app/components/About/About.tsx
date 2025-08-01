'use client'

import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Premium Quality',
    desc: 'We stock only trusted, nutrient-rich feeds to ensure your animals get the best.',
  },
  {
    title: 'Wide Variety',
    desc: "From poultry to livestock and pets, we've got something for every animal.",
  },
  {
    title: 'Locally Sourced & Fresh',
    desc: 'Supporting local farms means better feed and a stronger community.',
  },
  {
    title: 'Affordable Prices',
    desc: "Great nutrition doesn't have to break the bank.",
  },
  {
    title: 'Customer-Focused',
    desc: 'We offer friendly service, advice, and support tailored to your needs.',
  },
]

const About = () => {
  return (
    <main
  className="relative max-w-screen bg-black bg-no-repeat bg-cover bg-center pt-10 select-none pb-10"
  id="About"
  style={{ backgroundImage: "url('/images/background3.avif')" }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-[#3F1D0E] via-[#3F1D0E]/10 to-transparent z-0 pointer-events-none"></div>
  {/*<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white z-0 pointer-events-none"></div>*/}

  <div className="relative px-5 h-full z-10">
    <p className="text-center font-bold text-2xl pb-4 text-white">Why Choose Harmony Feeds?</p>

    <motion.p
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="pb-4 text-center text-white/90"
    >
      At Harmony Feeds, we&apos;re more than just an animal feed store — we&apos;re your partner in raising healthy, happy animals. Here&apos;s what makes us different:
    </motion.p>

    <div className="md:px-30">
      {features.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="p-7 border-1 border-white/30 rounded-2xl bg-white/25 mb-5"
        >
          <p className="text-center font-bold text-white">{item.title}</p>
          <p className="text-center text-black text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</main>

  )
}

export default About
