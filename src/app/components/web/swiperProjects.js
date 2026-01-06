"use client";

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
        loop
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        navigation={{
          prevEl: "#projects-prev",
          nextEl: "#projects-next",
        }}
        className="rounded-2xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image src={project.image} alt={`Proyecto ${index + 1}`} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones únicos */}
      <button
        id="projects-prev"
        className="absolute left-2 bottom-[-80px] z-10 bg-[#272121] text-white py-3 px-4 rounded-full  shadow-[0_4px_4px_rgba(8,15,30,0.55)]"
      >
        ←
      </button>

      <button
        id="projects-next"
        className="absolute left-32 bottom-[-80px] z-10 bg-[#272121] text-white py-3 px-4 rounded-full shadow-[0_4px_4px_rgba(8,15,30,0.55)]"
      >
        →
      </button>

      <ButtonWeb
        text="Contáctanos"
        action="https://wa.link/103gx5"
        newTab
        className="absolute right-[-70px] bottom-[80px] z-10 rotate-[-90deg] scale-[0.9] opacity-0 md:opacity-100"
      />
    </div>
  );
}
