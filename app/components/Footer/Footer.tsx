import { MapPinIcon, PhoneIcon, } from '@heroicons/react/24/outline';
import Image from 'next/image'
import Logo from '@/public/images/Logo.png'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-12 pt-20 px-6 md:px-15 bg-[#645D3D] ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-xl font-bold mb-4 text-[#880015]">
              <Image src={Logo} width={200} height={50} alt='Harmony Feeds Icon' />
            </div>
            <p className="text-gray-400">
              Harmony Feeds provides trusted, affordable animal nutrition to help your farm and pets thrive every day.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 ">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition active:text-[#880015]">Home</a></li>
              <li><a href="#Shop" className="text-gray-400 hover:text-white transition active:text-[#880015]">Shop</a></li>
              <li><a href="#About" className="text-gray-400 hover:text-white transition active:text-[#880015]">About</a></li>
              <li><a href="#FAQ" className="text-gray-400 hover:text-white transition active:text-[#880015]">FAQ</a></li>
              <li><a href="#Visit" className="text-gray-400 hover:text-white active:text-[#880015] transition">Visit Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold  mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <PhoneIcon className="w-4 h-4 mr-2" />
                <a href="tel:+2348163309006" className="text-white underline">
                  +234 816 330 9006
                </a><a href="tel:+2349019474548" className="text-white underline">
                  +234 901 947 4548
                </a>
              </li>
              {/*<li className="flex items-center">
                <EnvelopeIcon className="w-4 h-4 mr-2" /> hello@bloomandroot.com
              </li>*/}
              <li className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2" /> Iju-Love, Opposite Love B/Stop, Ota,  Ogun State, Nigeria
              </li>
            </ul>
          </div>

          {/*<div>
            <h4 className="font-bold mb-4 text-[#880015]">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaPinterest className="w-6 h-6" />
              </a>
            </div>
          </div>*/}
        </div>


      </div>
    </footer>
  );
}