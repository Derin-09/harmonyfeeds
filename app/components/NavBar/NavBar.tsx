'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from '@/public/images/Logo.png'

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <nav className="relative z-50">
      {/* Top Nav Bar */}
      <div className={`fixed top-0 left-0 w-full flex items-center justify-between p-5 backdrop-blur-sm z-50 ${isClicked ? 'bg-white/80' : 'bg-white/25'}`}>
        <Image src={Logo} width={200} height={50} alt="Harmony Feeds Logo" />
        
        {/* Desktop menu */}
        <div className="hidden md:flex gap-6  font-bold">
          <a href="#About" className="hover:text-[#880015]">About Us</a>
          <a href="#Products" className="hover:text-[#880015]">Products</a>
          <a href="#FAQ" className="hover:text-[#880015]">FAQ</a>
          <a href="#Visit" className="hover:text-[#880015]">Visit Us</a>
        </div>

        {/* Hamburger icon for mobile */}
        <div onClick={handleClick} className="ml-auto md:hidden text-black cursor-pointer">
          {isClicked ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white px-6 pt-24 md:hidden text-black transition-transform duration-500 ease-in-out transform z-40 ${
          isClicked ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="font-bold pb-4 active:text-[#880015]">
          <a href="#About" onClick={handleClick}>About Us</a>
        </div>
        <div className="font-bold pb-4 active:text-[#880015]">
          <a href="#Products" onClick={handleClick}>Products Available</a>
        </div>
        <div className="font-bold pb-4 active:text-[#880015]">
          <a href="#FAQ" onClick={handleClick}>FAQ</a>
        </div>
        <div className="font-bold pb-4 active:text-[#880015]">
          <a href="#Visit" onClick={handleClick}>Visit Us</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
