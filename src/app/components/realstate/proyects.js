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
import logoRetiroAlto from "/public/retiro-alto/logoWhite.png";
import logoDistritoFlorida from "/public/distrito-florida/distritoFloridaLogo-Vive.png";
import logoZigzag from "/public/zig-zag/zigzagLogo.png";

export default function Proyects() {
  const projects = [
    {
      url: "retiroAltoCard.png",
      logo: logoRetiroAlto,
      description: (
        <>
          Bodega Hábitat es un proyecto de vivienda y talleres comerciales
          ubicado
          <br className="hidden lg:block" /> en el corazón del Perpetuo Socorro
        </>
      ),
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
          title: "Pauta digital",
        },
      ],
    },
    {
      url: "distritoFloridaCard.png",
      logo: logoDistritoFlorida,
      description: (
        <>
          Haz parte del desarrollo urbanístico más importante
          <br className="hidden lg:block" /> del norte de la ciudad
        </>
      ),
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
          title: "Pauta digital",
        },
      ],
    },
    {
      url: "zigzagCard.png",
      logo: logoZigzag,
      description: (
        <>
          Es cambio constante. Es la flexibilidad de los espacios.
          <br className="hidden lg:block" /> Es arquitectura que se abre y se
          adapta al mundo.
        </>
      ),
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
    },
  ];

  return (
    <section className="flex flex-col justify-center">
      <h3 className="text-[28px] xl:text-[29px] 2xl:text-[33px] SpaceGrotesk text-[#23194F] uppercase text-center">
        <span className="font-semibold SpaceGrotesk">Esto es lo que pasa</span>{" "}
        cuando se hace con estrategia
      </h3>
      <h3 className="text-[28px] xl:text-[29px] 2xl:text-[33px] SpaceGrotesk font-bold text-companySalmon uppercase text-center">
        (Y con alma)
      </h3>
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
        }}
        className="flex flex-col lg:flex-row gap-4 mt-4 2xl:mt-6"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url("/realstate/${project.url}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="relative flex flex-col w-full h-[370px] xl:h-[600px] 2xl:h-[822px] p-[18px] 2xl:p-5 gap-2 justify-end items-center rounded-3xl"
            >
              <div className="flex justify-center h-20 lg:h-auto">
                <Image src={project.logo} className="w-full" />
              </div>
              <div className="z-10 w-full">
                <p className="text-sm 2xl:text-lg text-[#FFF8EA] font-light tracking-wide text-center">
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
                        style={{ width: "auto", height: "40px" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full flex justify-center mt-5">
                  <button className="px-[19px] py-[12px] 2xl:px-[29px] 2xl:py-[20px] text-[13px] uppercase tracking-wider bg-[#FFF8EA] hover:bg-companySalmon text-[#23194F] hover:text-[#FFF8EA] transition-all duration-300 robout">
                    Ver caso completo
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
