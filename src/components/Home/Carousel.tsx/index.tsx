"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import caroulsel1 from "../../../../public/assets/icons/Carrousel1.svg";
import caroulsel2 from "../../../../public/assets/icons/Carrousel2.svg";
import { barlow } from "../../../app/fonts";


const slides = [
  { src: caroulsel1, alt: "carousel1", value: "$26.67", discount: "$21.67" },
  { src: caroulsel2, alt: "carousel2", value: "$21.55", discount: "$15.23" }
];

export const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Keyboard, Parallax]}
      navigation
      parallax={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }}
      loop
      enabled={true}
      keyboard={true}
      className="w-full h-[700px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <Image 
            src={slide.src} 
            alt={slide.alt}
            width={0} 
            height={0} 
            className="w-full h-[700px] object-cover"
            priority
          />
          
          <div data-swiper-parallax="-200" className="my-[166px] mx-[280px] absolute flex flex-col inset-0 z-10">
            <div className="flex flex-col gap-1.5">
              <div data-swiper-parallax="-180" className="text-[12px] font-semibold text-[#166534] max-w-[132px] px-[10px] py-1.5 bg-gradient-to-r from-0% from-[#16A34A]/50 to-60% to-[#22C55E]/0 rounded-md">
                Weekend Discount
              </div>
              <h1 data-swiper-parallax="-150" className="text-[#39245F] w-[610px] text-[58px] font-bold leading-tight">Shopping with us for better quality and the best price</h1>
              <p data-swiper-parallax="-100" className="text-[16px] text-[#030712] w-[500px]">We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
            </div>
            <button data-swiper-parallax="-200" className="flex gap-4 mt-[42px]">
              <div className="bg-[#634C9F] text-white py-3 pl-[18px] pr-[49px] font-bold text-[14px] rounded-lg overflow-hidden flex relative z-30 justify-center items-center before:scale-150 before:w-[100%] before:bottom-[-100px] hover:before:bottom-0 cursor-pointer before:h-[100%] before:bg-[#39245F] before:z-[-1] before:origin-bottom before:transition-all before:duration-500 before:ease-out hover:scale-105 transition ease-in before:absolute">
                Shop Now
              </div>
              <div className="flex flex-col items-start leading-tight">
                <p className={`font-bold text-[28px] ${barlow.className} text-[#DC2626]`}>{slide.discount} <strong className="line-through text-[#111827] font-medium text-[20px]">{slide.value}</strong></p>
                <p className="text-[11px] text-[#030712] opacity-50">Don't miss this limited time offer.</p>
              </div>
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
