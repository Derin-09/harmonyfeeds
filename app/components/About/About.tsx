import React from 'react'

const About = () => {
  return (
    <main className='bg-[#645D3D] w-screen pt-10 select-none pb-10' id='About'>
      <div className='px-5'>
        <p className='text-center font-bold text-2xl pb-4'>Why Choose Harmony Feeds?</p>
        <div className=''>
          <p className='pb-4'>At Harmony Feeds, we&apos;re more than just an animal feed store — we&apos;re your partner in raising healthy, happy animals. Here&apos;s what makes us different:</p>
          {/*
          <p className='pb-2'><span className='font-bold'>Premium Quality</span> - We stock only trusted, nutrient-rich feeds to ensure your animals get the best.</p>
          <p className='pb-2'> <span className='font-bold'>Wide Variety</span> - From poultry to livestock and pets, we&apos;ve got something for every animal.</p>
          <p className='pb-2'><span className='font-bold'>Locally Sourced & Fresh</span> - Supporting local farms means better feed and a stronger community.</p>
          <p className='pb-2'><span className='font-bold'>Affordable Prices</span>
             - Great nutrition doesn&apos;t have to break the bank.</p>
          <p className='pb-2'><span className='font-bold'>Customer-Focused</span>  - We offer friendly service, advice, and support tailored to your needs.</p>
          <p className='pb-2'>Because when your animals thrive, so do you.</p>
         */}
          <div className='p-7 border-1 border-white/30 rounded-2xl bg-white/25 mb-5 '>
            <p className='text-center font-bold'>Premium Quality</p>
            <p className='text-center text-gray-300 text-sm'>We stock only trusted, nutrient-rich feeds to ensure your animals get the best.</p>
          </div>
          <div className='p-7 border-1 border-white/30 rounded-2xl bg-white/25 mb-5 '>
            <p className='text-center font-bold'>Wide Variety</p>
            <p className='text-center text-gray-300 text-sm'>From poultry to livestock and pets, we&apos;ve got something for every animal.</p>
          </div>
          <div className='p-7 border-1 border-white/30 rounded-2xl bg-white/25 mb-5 '>
            <p className='text-center font-bold'>Locally Sourced & Fresh</p>
            <p className='text-center text-gray-300 text-sm'> Supporting local farms means better feed and a stronger community.</p>
          </div>
          <div className='p-7 border-1 border-white/30 rounded-2xl bg-white/25 mb-5 '>
            <p className='text-center font-bold'>Affordable Prices</p>
            <p className='text-center text-gray-300 text-sm'> Great nutrition doesn&apos;t have to break the bank.</p>
          </div>
          <div className='p-7 border-1 border-white/30 rounded-2xl bg-white/25 mb-5 '>
            <p className='text-center font-bold'>Customer-Focused</p>
            <p className='text-center text-gray-300 text-sm'> We offer friendly service, advice, and support tailored to your needs</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About