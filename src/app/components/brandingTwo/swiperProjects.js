"use client";

// components/ImageSwiperClient.tsx
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import swiperBrandingOne from "/public/branding/swiperBrandingOne.webp";
import swiperBrandingTwo from "/public/branding/swiperBrandingTwo.webp";
import swiperBrandingThree from "/public/branding/swiperBrandingThree.webp";
import swiperBrandingFour from "/public/branding/swiperBrandingFour.webp";
import swiperBrandingFive from "/public/branding/swiperBrandingFive.webp";
import swiperBrandingSix from "/public/branding/swiperBrandingSix.webp";

// Import CSS de Swiper (se carga solo en cliente porque este archivo se importa dinámicamente)
import "swiper/css";
import "swiper/css/pagination";

export default function SwiperProjects() {
  const images = [
    { src: swiperBrandingOne, alt: "Slide 1" },
    { src: swiperBrandingTwo, alt: "Slide 2" },
    { src: swiperBrandingThree, alt: "Slide 3" },
    { src: swiperBrandingFour, alt: "Slide 4" },
    { src: swiperBrandingFive, alt: "Slide 5" },
    { src: swiperBrandingSix, alt: "Slide 6" },
  ];

  return (
    <div className="w-full xl:max-w-4xl xl:mx-auto border border-[#E5E7EB]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={16}
        slidesPerView={1}
        className="swiper-projects"
      >
        {images.map((img, i) => (
          <SwiperSlide key={img.alt}>
            <div className="relative w-full mt-10 xl:mt-0 h-[500px] rounded-xl overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt ?? `slide-${i}`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
