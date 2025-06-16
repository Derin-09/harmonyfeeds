'use client'
import React from 'react'
import { useState } from 'react'


type Freq = {
    id: number;
    question: string
    answer: string
}

const options: Freq[] = [
    { id: 1, question: "What types of animal feed do you sell?", answer: "We offer a variety of feed for poultry, livestock, and more. Whether you raise chickens, goats, cows, or keep pets, we’ve got the right nutrition for them." },

    { id: 2, question: "Are your feeds locally produced or imported?", answer: "Most of our feeds are locally sourced from trusted Nigerian producers, ensuring freshness, affordability, and support for local agriculture." },

    { id: 3, question: "Do you offer bulk or wholesale options?", answer: "Yes, we do! If you're buying in large quantities, we offer bulk pricing and discounts. Contact us directly or visit the store for details." },

    { id: 4, question: "How do I know which feed is right for my animals?", answer: "We are always ready to guide you. Tell us about your animals, their age, and purpose (e.g., egg-laying, meat, breeding), and we’ll recommend the best feed." },

    { id: 5, question: "Do you deliver?", answer: "Yes, delivery may be arranged for bulk purchases within select areas. Reach out to confirm availability in your location." },

    { id: 6, question: "Where is your shop located?", answer: "We're located at Iju-Ota (after Canaanland) , Ogun State, Nigeria. Use the “Visit Us” section on the site for directions, map, and opening hours." },
]
const FAQ = () => {
    const [active, setActive] = useState<number | null>(null)

    return (

        <main className=' pb-10  select-none bg-gradient-to-b from-[#645D3D] to-[#3F1D0E] pt-5' id='FAQ'>
            <p className='font-bold ml-5 pb-4 text-white text-2xl text-center mr-5'>Frequently Asked Questions</p>

            <div className='bg-white/25 rounded-2xl ml-5 mr-5'>
                {options.map((opt) => (
                    <div key={opt.id}>
                        <div onClick={() => { console.log("clicked", opt.id); setActive(() => active === opt.id ? null : opt.id); }}>
                            <div className=' hover:bg-neutral-700 hover:cursor-pointer ml-5 mr-5 mb-0.5  py-4 flex justify-between items-center'>

                                <p className='text-lg'>{opt.question}</p>
                                <button className='text-4xl font-extralight'>
                                    {active === opt.id ? "-" : "+"}
                                </button>
                            </div>
                            {active === opt.id && (
                                <div className={`  ml-5 mr-5 mb-2 py-6  flex justify-between items-center text-lg`}>
                                    {opt.answer}
                                </div>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </main>
    )
}

export default FAQ