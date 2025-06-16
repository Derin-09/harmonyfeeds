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
      <div className="border-t border-white bg-[#645D3D] pb-8 pt-8 text-center text-white w-full">
          <p className='text-center text-gray-400'>© {new Date().getFullYear()} Harmony Feeds. All rights reserved.</p>
        </div>
    </main>
  )
}

export default Mainpage