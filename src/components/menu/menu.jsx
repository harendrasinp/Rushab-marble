import React from 'react'

const Menu = () => {
    return (
        <div className='mt-10 w-full h-fit bg-gray-100 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-10 px-2'>
            <div className='w-[5.5rem] h-[5.5rem] sm:w-[15rem] sm:h-[12rem] flex flex-col items-center justify-center gap-2 hover:scale-105 transition duration-500 cursor-pointer'>
                <img src="/Images/menu/sink.png" alt="sink" className='w-[4.5rem] h-[4.5rem] sm:w-full sm:h-full shadow-2xl shadow-amber-900 rounded-[0.2rem]' />
                <div className='text-gray-800 font-semibold text-xs sm:text-base text-center sm:text-left'>Sink</div>
            </div>
            <div className='w-[5.5rem] h-[5.5rem] sm:w-[15rem] sm:h-[12rem] flex flex-col items-center justify-center gap-2 hover:scale-105 transition duration-500 cursor-pointer'>
                <img src="/Images/menu/bathtub.png" alt="sink" className='w-[4.5rem] h-[4.5rem] sm:w-full sm:h-full shadow-2xl shadow-amber-900 rounded-[0.2rem]' />
                <div className='text-gray-800 font-semibold text-xs sm:text-base text-center sm:text-left'>BathTub</div>
            </div>
            <div className='w-[5.5rem] h-[5.5rem] sm:w-[15rem] sm:h-[12rem] flex flex-col items-center justify-center gap-2 hover:scale-105 transition duration-500 cursor-pointer'>
                <img src="/Images/menu/tilse.png" alt="sink" className='w-[4.5rem] h-[4.5rem] sm:w-full sm:h-full shadow-2xl shadow-amber-900 rounded-[0.2rem]' />
                <div className='text-gray-800 font-semibold text-xs sm:text-base text-center sm:text-left'>tilse</div>
            </div>
            <div className='w-[5.5rem] h-[5.5rem] sm:w-[15rem] sm:h-[12rem] flex flex-col items-center justify-center gap-2 hover:scale-105 transition duration-500 cursor-pointer'>
                <img src="/Images/menu/slab2.jpg" alt="sink" className='w-[4.5rem] h-[4.5rem] sm:w-full sm:h-full shadow-2xl shadow-amber-900 rounded-[0.2rem]' />
                <div className='text-gray-800 font-semibold text-xs sm:text-base text-center sm:text-left'>Slab</div>
            </div>
        </div>

    )
}

export default Menu