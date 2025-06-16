import React from 'react'
import NavBar from '../NavBar/NavBar'

const HeroSection = () => {
  return (
    <main className='select-none h-screen bg-cover bg-center bg-no-repeat bg-black relative' style={{ backgroundImage: "url('/images/background.avif')" }}>
      <div className='fixed top-0 w-[100%]'>
        <NavBar />
        </div>
      <section className='bg-black/70 h-[100%] flex justify-center items-center'>
        <div className=''>
          <p className='text-4xl font-extrabold text-center pb-7'>Feed your livestock the way nature intended</p>
          <p className='text-center px-5'>Harmony Feeds, in Ota, Ogun State, is your go-to source for 100% organic animal feed, fertilizer, and medicine</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b via-[#3F1D0E]/5 from-transparent to-[#645D3D]"></div>

      </section>
    </main>
  )
}

export default HeroSection