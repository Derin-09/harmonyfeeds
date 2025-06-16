import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Visit from '../Visit/Visit'

const Mainpage = () => {
  return (
    <main>
      <HeroSection/>
      <About/>
      <FAQ/>
      <Visit/>
      <Footer/>
    </main>
  )
}

export default Mainpage