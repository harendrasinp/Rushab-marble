import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="w-full min-h-64 bg-[url('/Images/contact/contact-bg.jpg')] bg-cover bg-center flex items-start justify-center shadow-lg shadow-gray-800 py-8">

      <div className='flex flex-col md:flex-row md:justify-between w-full max-w-6xl     mx-auto gap-8 px-4 items-center md:items-start text-center md:text-left'>

        <div className='flex flex-col items-center md:items-start justify-center min-w-[150px]'>
          <span className="text-red-600 text-[1.2rem] text-center mt-5">Collections</span>
          <ul className='text-white text-[1rem] list-none text-center md:text-left'>
            <li>Bathtubs</li>
            <li>Faucets (Taps)</li>
            <li>Western Toilets (Commodes)</li>
            <li>Indian Toilets (Squat Pans)</li>
            <li>Wash Basins & Kitchen Sinks</li>
          </ul>
        </div>

        <div className='flex flex-col items-center md:items-start justify-center min-w-[150px]'>
          <span className="text-red-600 text-[1.2rem] text-center mt-5">Career</span>
          <ul className='text-white text-[1rem] list-none text-center md:text-left'>
            <li>Showroom Sales Executive</li>
            <li>Site Supervisor</li>
            <li>Marble Cutting & Finishing Expert</li>
            <li>Delivery & Logistics Assistant</li>
            <li>Interior Designer(Part-Time)</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center min-w-[150px]">
          <span className="text-red-600 text-[1.2rem] text-center mt-5">Quik Links</span>
          <ul className='text-white text-[1rem] list-none text-center md:text-left'>
            <li>Home</li>
            <li>About Us</li>
            <li>Media Resources</li>
            <li>Products</li>
            <li>Quality</li>
          </ul>
        </div>

        <div className='flex flex-col items-center md:items-start min-w-[200px]'>
          <span className="text-red-600 text-[1.2rem] text-center mt-5">Contact</span>
          <ul className='text-white text-[1rem] list-none h-[8rem] flex flex-col justify-between '>
            <li className='flex items-start gap-2'>
              <FaMapMarkerAlt className="text-white text-[1.5rem]" />
              <p className='w-[15rem] text-justify'>Rushab Marbles, Near Refferal Hospital,Surat Dhuliya Road Vyara 394650</p>
            </li>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className="text-white text-[1.5rem]" />
              <p>94268 24190</p>
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className="text-white text-[1.5rem]" />
              <p>RushabMarbles@gmail.com</p>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Footer