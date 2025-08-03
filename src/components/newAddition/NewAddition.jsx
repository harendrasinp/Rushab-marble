'use client';
import React from "react";
import Slider from "react-slick";
const NewAddition = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const images = [
        "/Images/newAddition/bathtub.png",
        "/Images/newAddition/new1.jpg",
        "/Images/newAddition/sink.png",
        "/Images/newAddition/slab.png",
        "/Images/newAddition/tilse.png",
    ];

    return (
        <div className="mt-2 w-full h-fit bg-[url('/Images/newAddition/newaddition-bg.jpg')] bg-cover bg-center flex flex-col items-center justify-center p-4 gap-5">
            <p className="text-[1.2rem] md:text-[1.5rem] text-cyan-950">New Additions</p>
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-evenly gap-8">
                <div className="w-full md:w-[25rem] h-auto md:h-[25rem] gap-5 flex flex-col items-center md:items-start justify-center">
                    <p className="text-red-600 text-[1.1rem] md:text-[1.5rem] font-semibold text-center md:text-left">
                        Populer additions
                    </p>
                    <p className="w-full text-blue-950 text-justify text-[0.95rem] md:text-[1rem]">Discover the latest additions to our exquisite marble and bathroom sink collection. From stunning hand-carved marble bathtubs to sleek, modern sinks designed for luxurious living, our new arrivals blend timeless craftsmanship with contemporary style. Whether you're renovating your home or designing a new space, these thoughtfully selected pieces bring unmatched beauty, durability, and elegance to your bathroom or kitchen. Explore the collection and experience the charm of natural stone reimagined for modern interiors.</p>
                </div>
                <div className="w-full md:w-[50rem] h-[18rem] md:h-[25rem]">
                    <Slider {...settings}>
                        {images.map((src, index) => (
                            <div key={index} className="px-2 md:px-4 flex items-center justify-center">
                                <img src={src} alt={`Slide ${index}`} className="w-full md:w-fit h-full object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-10" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default NewAddition