import React from 'react'


const Header = () => {
  return (
    <header
      className="w-full min-h-[12rem] md:h-64 bg-[url('/Images/headerBackground/bg3.jpg')] bg-cover bg-center flex items-start justify-center shadow-lg shadow-gray-800">
      <div className='mt-5 flex flex-col items-center justify-center text-center gap-8 w-full px-2'>
        <img src="/Images/Logo/logo.png" alt="log" className='w-[6rem] h-[5rem] md:w-[9rem] md:h-[8rem] opacity-60' />
        {/* <h1 className="text-white text-[2rem] md:text-[3rem] font-bold drop-shadow-lg">Rushabh Marbles</h1> */}
        <p className='text-white/70 text-2xl md:text-4xl'>Primium Marble for Every Space</p>
      </div>
    </header>
  );
}
 
export default Header