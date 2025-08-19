"use client";
import Cicle from "../SVGicons/cicle";
import Papers from "../SVGicons/papers";
import MeetingPoint from "../SVGicons/meetingPoint";
import UnderCarriage from "../SVGicons/underCarriage";
import PlayPause from "../SVGicons/playPause";
import Things from "../SVGicons/things";
import Rock from "../SVGicons/rock";
import CurvedRoad from "../SVGicons/curvedRoad";
import Mosaic from "../SVGicons/mosaic";
import TrashCan from "../SVGicons/trashCan";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";
import ButtonEditorial from "./buttonEditorial";

export default function WhatWeDo({ city }) {
  const services = [
    {
      image: TrashCan,
      title: (
        <>
          Versión digital
          <br />
          y/o impresa
        </>
      ),
      description:
        "No importa si tu pieza va a vivir en papel, en PDF o en ambos. Diseñamos con criterio técnico para que se vea impecable en todas las versiones.",
    },
    {
      image: UnderCarriage,
      title: (
        <>
          Corrección de estilo
          <br />y edición
        </>
      ),
      description:
        "Revisamos ortografía, tono, estructura, coherencia y estilo para que todo tenga sentido.",
    },
    {
      image: Things,
      title: (
        <>
          Diseño y diagramación
          <br />
          editorial
        </>
      ),
      description:
        "Creamos el look & feel completo: tipografías, retículas, márgenes, ritmos, jerarquías, portadas y piezas gráficas, para que cada página tenga intención.",
    },
    {
      image: Papers,
      title: (
        <>
          Estructura y conceptualización
          <br />
          editorial
        </>
      ),
      description:
        "Te ayudamos a definir cómo se va a organizar el contenido, qué capítulos o secciones necesita, qué peso tiene cada parte y cómo debe fluir.",
    },
  ];

  return (
    <section className="flex flex-col justify-center gap-10 bg-[url('/editorial/bgWhatWeDo.webp')] bg-no-repeat bg-cover bg-center p-8 xl:p-10 2xl:p-16 rounded-2xl">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl SpaceGrotesk font-light uppercase text-[#F7F7F7] text-start md:text-center mb-4 md:mb-8 tracking-wide">
        ¿Qué hacemos con tu{" "}
        <span className="SpaceGrotesk font-medium text-companySalmon">
          diseño editorial?
        </span>
      </h2>
      <div className="lg:grid grid-cols-2 justify-between w-full gap-x-32 gap-y-12 2xl:gap-y-16 hidden px-40">
        {services.map((service) => (
          <div
            className="flex flex-col gap-1 xl:gap-2 2xl:gap-3"
            key={service.description}
          >
            <service.image className="w-12 h-12 xl:w-7 xl:h-7 2xl:w-9 2xl:h-9 text-companySalmon" />
            <h3 className="text-[28px] xl:text-lg 2xl:text-xl font-semibold text-[#fff8ea] text-left mt-3 SpaceGrotesk ">
              {service.title}
              <span className="text-companySalmon font-bold">.</span>
            </h3>
            <div className="w-full h-[1px] bg-[#fff8ea] mt-2"></div>
            <p className="text-sm 2xl:text-md font-light text-[#fff8ea] text-left mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="lg:hidden">
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
        >
          {services.map((service) => (
            <SwiperSlide key={service.description}>
              <div className="flex flex-col gap-1 bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                {service.image}
                <h3 className="text-lg font-semibold text-[#fff8ea] text-left mt-3 SpaceGrotesk">
                  {service.title}
                  <span className="text-companySalmon font-bold">.</span>
                </h3>
                <div className="w-full h-[1px] bg-[#fff8ea] mt-2"></div>
                <p className="text-sm font-light text-[#fff8ea] text-left mt-2">
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <ButtonEditorial text={"Contacta a un asesor"} />
      </div>
    </section>
  );
}
