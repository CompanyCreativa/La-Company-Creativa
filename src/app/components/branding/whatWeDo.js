"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import rebrandingIcon from "/public/branding/rebranding.png";
import designSystemIcon from "/public/branding/design_system.png";
import motionGraphicsIcon from "/public/branding/motion_graphics.png";
import conceptualization from "/public/branding/conceptualization.png";
import instagramVerified from "/public/branding/instagram_verified.png";
import Link from "next/link";

export default function WhatWeDo() {
  const projects = [
    {
      url: "paco_branding.png",
      title: "Eso que te abogia paco lo hace",
      description: (
        <>
          Los que piensan que el trabajo debe ser difícil
          <br />y estresante, no conoces a Paco, no conocen el futuro.
        </>
      ),
      categories: [
        {
          icon: rebrandingIcon,
          title: "Rebranding",
        },
        {
          icon: designSystemIcon,
          title: "Design System",
        },
        {
          icon: motionGraphicsIcon,
          title: "Motion Graphics",
        },
      ],
      link: "/portafolio/paco",
    },
    {
      url: "minipet.png",
      title: (
        <>
          Pequeños envases para
          <br /> grandes marcas
        </>
      ),
      description: "Envases a la medida para marcas únicas",
      categories: [
        {
          icon: rebrandingIcon,
          title: "branding",
        },
        {
          icon: conceptualization,
          title: "Conceptualización",
        },
        {
          icon: designSystemIcon,
          title: "Design System",
        },
      ],
      link: "/portafolio/envases-minipet",
    },
    {
      url: "zig_zag.png",
      title: <>Es cambio constante</>,
      description:
        "Es la flexibilidad de los espacios. Es arquitectura que se abre y se adapta al mundo",
      categories: [
        {
          icon: rebrandingIcon,
          title: "branding",
        },
        {
          icon: conceptualization,
          title: "Conceptualización",
        },
      ],
      link: "/portafolio/zig-zag",
    },
    {
      url: "franca_co.png",
      title: <>Inspirada en la transparencia</>,
      description:
        "la ética con la que elegimos cada ingrediente y la honestidad con la que se maneja cada relación.",
      categories: [
        {
          icon: rebrandingIcon,
          title: "branding",
        },
        {
          icon: conceptualization,
          title: "Conceptualización",
        },
      ],
      link: "/portafolio/franca",
    },
    {
      url: "retiro_alto.png",
      title: <>El espacio perfecto</>,
      description: "Para disfrutar de la tranquilidad de la naturaleza",
      categories: [
        {
          icon: rebrandingIcon,
          title: "branding",
        },
        {
          icon: conceptualization,
          title: "Conceptualización",
        },
        {
          icon: designSystemIcon,
          title: "Diseño web",
        },
      ],
      link: "/portafolio/retiro-alto",
    },
  ];

  return (
    <section className="flex flex-col justify-center gap-4" id="whatWeDo">
      <h3 className="text-[28px] xl:text-[29px] 2xl:text-[33px] SpaceGrotesk font-bold text-[#23194F] uppercase text-center">
        Lo que hacemos, se ve
      </h3>
      <h4 className="inline-block w-auto text-[24px] xl:text-[20px] 2xl:text-[24px] font-medium text-companySalmon uppercase text-center border border-companySalmon border-[1px] px-2 py-1 xl:py-2 xl:px-4 mx-auto rounded-full SpaceGrotesk">
        Y se siente
      </h4>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        navigation={{
          nextEl: ".next-swiper-button",
          prevEl: ".prev-swiper-button",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        className="flex flex-col lg:flex-row gap-4xl:mt-4 2xl:mt-6"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url("/branding/${project.url}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="relative flex flex-col w-full h-[639px] 2xl:h-[806px] p-[18px] 2xl:p-5 gap-2 border border-white xl:border-[18px] justify-end items-start shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />
              <div className="z-10 w-full">
                <h5 className="flex items-start SpaceGrotesk text-lg xl:text-xl 2xl:text-2xl text-[#FFF8EA] font-bold gap-2">
                  {project.title}
                  <Image
                    src={instagramVerified}
                    alt="instagram verified"
                    style={{ width: "28px", height: "28px" }}
                  />
                </h5>
                <p className="text-sm 2xl:text-lg text-[#FFF8EA] font-light tracking-wide">
                  {project.description}
                </p>
                <div className="w-full flex justify-center mt-5">
                  {project.categories.map((category, i) => (
                    <div
                      key={i}
                      className="relative flex flex-col gap-2 items-center px-2 2xl:px-4"
                    >
                      {i < project.categories.length - 1 && (
                        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 h-1/2 w-px bg-[#FFF8EA] opacity-50" />
                      )}
                      <p className="text-[12px] 2xl:text-sm text-[#FFF8EA] tracking-wider1920 font-light ">
                        {category.title}
                      </p>
                      <Image
                        src={category.icon}
                        alt={category.title}
                        style={{ width: "auto", height: "35px" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full flex justify-center mt-5">
                  <Link
                    className="px-[19px] py-[12px] 2xl:px-[29px] 2xl:py-[20px] text-[13px] uppercase tracking-wider bg-[#FFF8EA] hover:bg-companySalmon text-[#23194F] hover:text-[#FFF8EA] transition-all duration-300"
                    href={project.link} 
                    target="_blank"
                  >
                    Ver caso completo
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
