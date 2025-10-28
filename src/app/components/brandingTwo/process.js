"use client";

import Image from "next/image";

import ArtificialInteligence from "../SVGicons/artificialInteligence";
import LighAI from "../SVGicons/lightAI";
import BrainV2 from "../SVGicons/brainV2";
import PenToolAdd from "../SVGicons/penToolAdd";
import ViewAI from "../SVGicons/viewAI";
import decorationBranding from "/public/branding/decoration_branding.webp";

export default function Process() {
  return (
    <div className="w-full xl:max-w-[1300px] 2xl:max-w-[1500px] flex flex-col justify-center items-start xl:items-center relative bg-[#F2F1ED] px-4">
      <h3 className="w-full xl:w-1/3 flex justify-between">
        <span className="SpaceGrotesk font-bold text-[#1D1D1D]">
          ¿Qué hacemos en branding?
        </span>
        <span className="SpaceGrotesk font-bold text-[#1D1D1D]"> (04)</span>
      </h3>
      <div className="w-full xl:w-1/3 h-[1px]  mt-1 mb-5 bg-[#1D1D1D]"></div>
      <h2 className="font-montserrat text-3xl xl:text-7xl font-bold tracking-wide uppercase text-[#1D1D1D]">
        ASÍ LO HACEMOS
      </h2>
      <div className="w-full flex flex-col lg:flex-row justify-center items-start xl:items-center gap-12 xl:gap-16">
        <div className="flex flex-col gap-4 xl:gap-16 items-start xl:items-center w-full xl:w-auto">
          <div className="flex flex-row-reverse xl:flex-row gap-4 items-center">
            <p className="xl:text-[20px] 2xl:text-[24px] font-light text-[#1D1D1] SpaceGrotesk font-medium">
              Escuchamos tu historia,
              <br /> mercado y propósito
            </p>
            <ArtificialInteligence className="text-companySalmon w-14 md:w-auto" />
          </div>
          <div className="flex flex-row-reverse xl:flex-row gap-4 items-center xl:w-auto ml-auto xl:ml-0">
            <p className="xl:text-[20px] 2xl:text-[24px] font-light text-[#1D1D1] SpaceGrotesk font-medium">
              Investigamos contexto, <br /> tendencias y competencia
            </p>
            <LighAI className="text-companySalmon w-14 md:w-auto" />
          </div>
        </div>
        <Image
          src={decorationBranding}
          className="w-3/5 xl:w-auto self-center"
          alt="Decoration"
        />
        <div className="flex flex-col gap-4 xl:gap-16 w-full xl:w-auto">
          <div className="flex gap-4 items-center ">
            <BrainV2 className="text-companySalmon w-14 md:w-auto" />
            <p className="xl:text-[20px] 2xl:text-[24px] font-light text-[#1D1D1D] SpaceGrotesk font-medium">
              Definimos el concepto
              <br /> estratégico
            </p>
          </div>
          <div className="flex gap-4 items-center justify-end xl:justify-start">
            <PenToolAdd className="text-companySalmon w-14 md:w-auto" />
            <p className="xl:text-[20px] 2xl:text-[24px] font-light text-[#1D1D1D] SpaceGrotesk font-medium">
              Diseñamos todo el universo
              <br /> visual y verbal
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 items-center xl:justify-center mt-4 xl:mt-12 xl:mt-14">
        <ViewAI className="text-companySalmon w-14 md:w-auto" />
        <p className="xl:text-[20px] 2xl:text-[24px] font-light font-medium text-[#1D1D1D] SpaceGrotesk">
          Entregamos herramientas claras para
          <br /> aplicar tu marca con coherencia
        </p>
      </div>
    </div>
  );
}
