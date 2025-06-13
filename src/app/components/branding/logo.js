import Image from "next/image";

import ArrowTopRight from "../SVGicons/arrowTopRigth";

import decoration from "/public/branding/decoration2_branding.png";
import decorationMobile from "/public/branding/decoration2_branding_mobile.png";
import tenemosLogo from "/public/branding/tenemos_logo.png";
import noTenemos from "/public/branding/no_tenemos.png";
import comunicacionNO from "/public/branding/comunicacion_no.png";
import comoNosVen from "/public/branding/como_nos_ven.png";
import tenemosLogoHover from "/public/branding/tenemos_logo_hover.png";
import noTenemosHover from "/public/branding/no_tenemos_hover.png";
import comunicacionNOHover from "/public/branding/comunicacion_no_hover.png";
import comoNosVenHover from "/public/branding/como_nos_ven_hover.png";

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

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:mt-10 w-full gap-16 lg:gap-8">
      <div className="flex flex-col justify-center relative lg:w-1/2 bg-[#FFFFFF] shadow-[0px_0px_16px_rgba(0,0,0,0.25)] py-[32px] lg:pt-[70px] px-[20px] lg:px-[45px] pb-[174px]">
        <h2 className="text-[18px] xl:text-[28px] 2xl:text-[40px] SpaceGrotesk font-bold text-companySalmon uppercase text-center 2xl:text-end">
          ¿y si el problema no es el logo...
          <br />
          <span className="xl:text-[28px] 2xl:text-[40px] SpaceGrotesk font-bold text-[#23194F] uppercase text-end mr-4 xl:mr-7 2xl:mr-10 ">
            sino lo que no dice?
          </span>
        </h2>
        <div className="mt-16">
          <p className="text-[18px] 2xl:text-[22px] text-[#23194F]">
            Muchas marcas se ven <span className="font-semibold">bonitas,</span>
          </p>
          <p className="text-[18px] 2xl:text-[22px] text-[#23194F] text-end mr-4 mt-8 lg:mt-16">
            pero no dicen nada. Otras tienen
            <br />
            algo que decir,{" "}
            <span className="font-semibold">pero no saben cómo</span>
          </p>
        </div>
        <div className="w-full flex flex-col items-start lg:items-end mt-12 lg:mt-24">
          <p className="text-[18px] 2xl:text-[22px] text-[#23194F] text-start mt-4">
            <span className="inline-block xl:text-[18px] 2xl:text-[22px] font-medium text-companySalmon uppercase text-center border border-companySalmon border-[1px] px-2 mx-auto rounded-full mr-2">
              En la company
            </span>
            resolvemos eso: traducimos la
            <br className="hidden lg:block" /> esencia de{" "}
            <span className="font-semibold">
              tu <br className="lg:hidden" />
              negocio
            </span>{" "}
            en una identidad que
            <br className="lg:hidden" /> hable por ti con{" "}
            <br className="hidden lg:block" />
            estrategia, <br className="lg:hidden" />
            <span className="font-semibold">
              creatividad y<br className="lg:hidden" /> propósito
            </span>
          </p>
        </div>
        <Image
          src={decoration}
          alt="Branding Decoration Image"
          className="hidden lg:block absolute w-[170px] 2xl:w-[300px] bottom-0 left-0"
        />
        <Image
          src={decorationMobile}
          alt="Branding Decoration Image Mobile"
          className="absolute w-[170px] 2xl:w-[300px] bottom-0 right-0 lg:hidden"
        />
      </div>
      <div className="flex flex-col lg:w-1/2 bg-[#FFFFFF] shadow-[0px_0px_16px_rgba(0,0,0,0.25)]">
        {phrases.map((phrase, index) => (
          <div
            key={index}
            className="relative group overflow-hidden flex gap-4 items-center w-full h-full p-4 lg:px-10  lg:py-2 pb-14 lg:pb-0 cursor-pointer"
          >
            {/* Capas de animación controladas por opacidad */}
            <span className="pointer-events-none absolute inset-0 z-0">
              <span className="absolute top-0 left-0 w-full h-1/2 bg-[#23194F] translate-y-[-100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="absolute bottom-0 left-0 w-full h-1/2 bg-[#23194F] translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" />
            </span>

            {/* Contenido visible */}
            <Image
              src={phrase.icon}
              alt="Icon"
              className="z-10 transition duration-500  group-hover:opacity-0 group-hover:hidden w-[35px] lg:w-auto"
            />
            <Image
              src={phrase.iconHover}
              alt="Icon"
              className="opacity-0 hidden  z-10 transition duration-500 group-hover:opacity-100 group-hover:block w-[35px] lg:w-auto"
            />
            <h3 className="z-10 text-[18px] xl:text-[24px] 2xl:text-[32px] font-semibold text-[#23194F] transition-colors duration-500 group-hover:text-white mr-auto">
              {phrase.text}
            </h3>
            <ArrowTopRight
              className="lg:hidden z-10 transition-colors duration-500 group-hover:text-white w-[25px] 2xl:w-auto"
              color="#F55548"
            />
            <ArrowTopRight className="hidden lg:block z-10 w-[25px] 2xl:w-auto transition-colors duration-500 text-[#23194F] group-hover:text-white" />
          </div>
        ))}
      </div>
    </div>
  );
}
