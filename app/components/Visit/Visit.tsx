import React from 'react'

const Visit = () => {
  return (
    <main className='bg-[#3F1D0E] px-5 md:px-15 select-none' id='Visit'>
      <h2 className="text-2xl font-bold mb-6 ">Visit Us</h2>
      <div className="h-96 w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.792874227624!2d3.1328133355662717!3d6.672567193350284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9fee2a72db59%3A0xe8f0167d74de9a28!2sLove%20bus%20stop%20iju%20ota!5e0!3m2!1sen!2sng!4v1750039159339!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-6">
        <p className=" mb-2"><strong>Address:</strong> Iju-Love, Ota,  Ogun State, Nigeria</p>
        <p className=" mb-2"><strong>Hours:</strong> Mon-Sat: 9am-6:30pm</p>
        <div className=""><strong>Phone:</strong>
          <a href="tel:+2348163309006" className="text-white underline">
            +234 816 330 9006
          </a> <a href="tel:+2349019474548" className="text-white underline">
            +234 901 947 4548
          </a></div>
      </div>

    </main>
  )
}

export default Visit