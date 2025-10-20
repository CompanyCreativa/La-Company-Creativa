"use client"; // si usas Next.js con app router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import sliderProjectOne from "/public/web/sliderProject1.webp";
import sliderProjectTwo from "/public/web/sliderProject2.webp";
import sliderProjectThree from "/public/web/sliderProject3.webp";
import sliderProjectFour from "/public/web/sliderProject4.webp";
import starsTestimonials from "/public/web/starsTestimonials.webp";
import imageTestimonial1 from "/public/web/imageTestimonial1.webp";

// Importa los estilos de Swiper (asegúrate de tenerlos en tu index.css o globals.css también)
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import ButtonWeb from "./buttonWeb";

export default function SwiperTestimonials() {
  return (
    <div className="h-[400px]">
      {" "}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={80}
        slidesPerView={2}
        loop={true}
        direction={"vertical"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="rounded-2xl gap-5"
      >
        <SwiperSlide>
          <div className="flex flex-col items-start text-white bg-[#272020] py-5 px-7 gap-5 max-w-[654px]">
            <Image
              src={starsTestimonials}
              alt="sliderProjectOne"
              className="!w-[120px]"
            />
            <p className="text-[#9D9D9D] text-sm md:text-base">
              Destaco la cercanía y el acompañamiento en todo el proceso. No
              solo hicieron la web, también nos guiaron en cómo aprovecharla.
            </p>
            <div className="flex w-full items-center">
              <Image
                src={imageTestimonial1}
                alt="sliderProjectOne"
                className="!w-[70px] !h-[70px] rounded-full"
              />
              <div className="flex flex-col ml-4 w-full">
                <h3 className="font-poppins text-sm md:text-base">
                  María Fernanda Ruiz,
                </h3>
                <p className="font-poppins text-xs md:text-sm">
                  Coach Profesional
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start text-white bg-[#272020] py-5 px-7 gap-5 max-w-[654px]">
            <Image
              src={starsTestimonials}
              alt="sliderProjectOne"
              className="!w-[120px]"
            />
            <p className="text-[#9D9D9D]">
              Destaco la cercanía y el acompañamiento en todo el proceso. No
              solo hicieron la web, también nos guiaron en cómo aprovecharla.
            </p>
            <div className="flex w-full items-center">
              <Image
                src={imageTestimonial1}
                alt="sliderProjectOne"
                className="!w-[70px] !h-[70px] rounded-full"
              />
              <div className="flex flex-col ml-4 w-full">
                <h3 className="font-bold">María Fernanda Ruiz,</h3>
                <p>Coach Profesional</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start text-white bg-[#272020] py-5 px-7 gap-5 max-w-[654px]">
            <Image
              src={starsTestimonials}
              alt="sliderProjectOne"
              className="!w-[120px]"
            />
            <p className="text-[#9D9D9D]">
              Destaco la cercanía y el acompañamiento en todo el proceso. No
              solo hicieron la web, también nos guiaron en cómo aprovecharla.
            </p>
            <div className="flex w-full items-center">
              <Image
                src={imageTestimonial1}
                alt="sliderProjectOne"
                className="!w-[70px] !h-[70px] rounded-full"
              />
              <div className="flex flex-col ml-4 w-full">
                <h3 className="font-bold">María Fernanda Ruiz,</h3>
                <p>Coach Profesional</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Botones de navegación 
      <button className="custom-prev absolute left-2 bottom-[-80px] -translate-y-1/2 z-10 bg-[#272121] text-white py-3 px-4 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
        <span>←</span>
      </button>
      <button className="custom-next absolute left-32 bottom-[-80px] -translate-y-1/2 z-10 bg-[#272121] text-white py-3 px-4 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
        <span>→</span>
      </button>
      */}
    </div>
  );
}
