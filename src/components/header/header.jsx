'use client';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const images = [
    "/Images/headerBackground/bg1.jpg",
    "/Images/headerBackground/bg2.jpg",
    "/Images/headerBackground/bg3.jpg",
    "/Images/headerBackground/bg4.jpg",
    "/Images/headerBackground/bg5.jpg",
    "/Images/headerBackground/bg6.jpeg",
    "/Images/headerBackground/bg7.jpeg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 6000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="w-full min-h-[12rem] md:h-64 bg-cover bg-center flex items-start justify-center shadow-lg shadow-gray-800 transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className='mt-5 flex flex-col items-center justify-center text-center gap-15 w-full px-2'>
        <img
          src="/Images/Logo/logo.png"
          alt="logo"
          className='w-[6rem] h-[5rem] md:w-[9rem] md:h-[8rem] opacity-60'
        />
        <p className='text-white/70 text-2xl md:text-4xl'>
          Premium Marble for Every Space
        </p>
      </div>
    </header>
  );
};

export default Header;
