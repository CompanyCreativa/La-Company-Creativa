"use client";

import tenemosLogo from "/public/branding/tenemos_logo.png";
import noTenemos from "/public/branding/no_tenemos.png";
import comunicacionNO from "/public/branding/comunicacion_no.png";
import comoNosVen from "/public/branding/como_nos_ven.png";
import tenemosLogoHover from "/public/branding/tenemos_logo_hover.png";
import noTenemosHover from "/public/branding/no_tenemos_hover.png";
import comunicacionNOHover from "/public/branding/comunicacion_no_hover.png";
import comoNosVenHover from "/public/branding/como_nos_ven_hover.png";
import Arrow from "../SVGicons/arrow";
import SwiperProjects from "./swiperProjects";

export default function Logo() {
  const phrases = [
    {
      icon: tenemosLogo,
      iconHover: tenemosLogoHover,
      text: (
        <>
          “Tenemos logo...
          <br />
          <span className="font-normal">pero todo se ve diferente.”</span>
        </>
      ),
    },
    {
      icon: noTenemos,
      iconHover: noTenemosHover,
      text: (
        <>
          “No tenemos
          <br />
          <span className="font-normal">una línea clara de marca.”</span>
        </>
      ),
    },
    {
      icon: comunicacionNO,
      iconHover: comunicacionNOHover,
      text: (
        <>
          “Siento que nuestra
          <br />
          <span className="font-normal">comunicación no conecta.”</span>
        </>
      ),
    },
    {
      icon: comoNosVen,
      iconHover: comoNosVenHover,
      text: (
        <>
          “No sé cómo nos ven
          <br />
          <span className="font-normal">desde afuera.”</span>
        </>
      ),
    },
  ];

  const handleClick = () => {
    window.open("https://wa.link/103gx5", "_blank"); // 👉 abre en otra pestaña
  };

  const className = "";

  return (
    <div className="w-full flex items-center justify-center relative xl:max-w-[1300px] 2xl:max-w-[1500px]">
      <div>
        <h3 className="w-1/2 flex justify-between">
          <span className="SpaceGrotesk font-bold">
            El problema y la oportunidad
          </span>

          <span className="SpaceGrotesk font-bold"> (01)</span>
        </h3>
        <div className="w-1/2 h-[1px] bg-[#353535] mt-1 mb-5"></div>
        <h2 className="font-montserrat text-7xl font-bold tracking-wide uppercase">
          ¿Y si el problema <br /> no es el logo... <br /> sino lo que no dice?
        </h2>
        <p className="font-montserrat uppercase mt-10">
          Muchas marcas se ven bonitas, pero no dicen nada.{" "}
          <span className="font-montserrat font-bold">Otras tienen algo que decir,</span>{" "}
          pero no saben cómo.{" "}
          <span className="font-montserrat font-bold">en la company</span> resolvemos eso:
          traducimos la esencia de tu negocio en una identidad que hable por ti
          con estrategia,{" "}
          <span className="font-montserrat font-bold">creatividad y propósito.</span>
        </p>
        <button
          className={`flex text-sm md:text-base 2xl:text-lg font-light items-center gap-5 robout text-[#FFFFFF] bg-[#1D1D1D] px-4 py-2 rounded-full group ${className} overflow-hidden border border-white/10 relative mt-40`}
          onClick={handleClick}
        >
          <p className="flex-1 ml-5 text-center font-[400]">Hablemos</p>
          <div className="relative bg-[#FFFFFF] w-8 h-8 flex items-center justify-center rounded-full ">
            <Arrow className="text-[#353535] z-10" />
            <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in-out group-hover:h-full rounded-full"></div>
          </div>
        </button>
      </div>
      <div className="w-[456px]">
        <SwiperProjects />
      </div>
    </div>
  );
}
