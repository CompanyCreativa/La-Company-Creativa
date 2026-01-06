"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import sliderProjectOne from "/public/web/sliderProject1.webp";
import sliderProjectTwo from "/public/web/sliderProject2.webp";
import sliderProjectThree from "/public/web/sliderProject3.webp";
import sliderProjectFour from "/public/web/sliderProject4.webp";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import ButtonWeb from "./buttonWeb";

export default function SwiperProjects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const projects = [
    { image: sliderProjectOne, link: "https://ryr.ideocreo.co/" },
    { image: sliderProjectTwo, link: "https://adoquinar.ideocreo.co/" },
    { image: sliderProjectThree, link: "https://proyectomoss.com/" },
    { image: sliderProjectFour, link: "https://sescopoweramerica.com/" },
  ];

  return (
    <div className="w-full max-w-3xl relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Asignar las referencias antes de que Swiper se inicialice
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="rounded-2xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center text-white text-2xl
            font-bold"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <a>
              <Image src={project.image} alt={`Proyecto ${index + 1}`} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones con referencias únicas */}
      <button
        ref={prevRef}
        className="absolute left-2 bottom-[-80px] -translate-y-1/2 z-10 bg-[#272121] text-white py-3 px-4 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"
      >
        <span>←</span>
      </button>
      <button
        ref={nextRef}
        className="absolute left-32 bottom-[-80px] -translate-y-1/2 z-10 bg-[#272121] text-white py-3 px-4 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"
      >
        <span>→</span>
      </button>

      <ButtonWeb
        text="Contáctanos"
        action={"https://wa.link/103gx5"}
        newTab
        className={
          "absolute right-[-70px] bottom-[80px] z-10 rotate-[-90deg] scale-[0.9] opacity-0 md:opacity-100 w-0 h-0 md:w-auto md:h-auto"
        }
      />
    </div>
  );
}
