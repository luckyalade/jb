"use client";

import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/jb-1.jpg",
    "/jb-2.jpg",
    "/jb-3.jpg",
    "/jb-6.jpg",
    "/jb-7.jpg",
    "/jb-8.jpg",
    "/jb-9.jpg",
    "/jb-10.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden w-full h-[500px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-[500px] object-contain shadow-white shadow-2xl z-2"
          />
        </div>
      ))}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        {/* <button
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
            )
          }
          className="btn btn-circle bg-gray-800 text-white border-none
           hover:bg-[#222] hover:text-white"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          className="btn btn-circle bg-gray-800 text-white border-none hover:bg-[#222] hover:text-white"
        >
          ❯
        </button> */}
      </div>
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full border-none ${
              currentSlide === index ? "bg-gray-800" : "bg-[#333]"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
