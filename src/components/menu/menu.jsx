import React from 'react'
import { menuData } from '@/contents/menu/data'
import Link from 'next/link'
const Menu = () => {
  return (
    <div className='mt-10 w-full h-fit bg-gray-100 flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-10 p-2 sm:p-5'>
      {menuData.map((item, index) => (
        <Link href={item.link || "/"} key={index}>
          <div key={index} className='w-[7rem] h-[7rem] sm:w-[12.5rem] sm:h-[12.5rem] flex flex-col items-center justify-center gap-2 hover:scale-105 transition duration-500 cursor-pointer'>
            <img src={item.image} alt={item.title} className='w-full h-[80%] shadow-2xl shadow-amber-900 rounded-[0.2rem]' />
            <div className='text-gray-800 font-semibold text-xs sm:text-base text-center sm:text-left'>{item.title}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default Menu