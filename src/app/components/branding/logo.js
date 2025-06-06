import Image from "next/image";

import decoration from "/public/branding/decoration2_branding.png";
import tenemosLogo from "/public/branding/tenemos_logo.png";
import noTenemos from "/public/branding/no_tenemos.png";
import comunicacionNO from "/public/branding/comunicacion_no.png";
import comoNosVen from "/public/branding/como_nos_ven.png";
import ArrowTopRight from "../SVGicons/arrowTopRigth";

export default function Logo() {
  const phrases = [
    {
      icon: tenemosLogo,
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
    <div className="flex  justify-center mt-10 w-full gap-8">
      <div className="flex flex-col justify-center relative w-1/2 bg-[#FFFFFF] shadow-[0px_0px_16px_rgba(0,0,0,0.25)] py-[64px] px-[70px] pb-[174px]">
        <h2 className="text-[40px] SpaceGrotesk font-bold text-companySalmon uppercase text-end">
          ¿y si el problema no es el logo...
        </h2>
        <span className="text-[40px] SpaceGrotesk font-bold text-[#23194F] uppercase text-end mr-10">
          sino lo que no dice?
        </span>
        <div className="mt-16">
          <p className="text-[22px] text-[#23194F]">
            Muchas marcas se ven <span className="font-semibold">bonitas,</span>
          </p>
          <p className="text-[22px] text-[#23194F] text-end mr-4 mt-16">
            pero no dicen nada. Otras tienen
            <br />
            algo que decir,{" "}
            <span className="font-semibold">pero no saben cómo</span>
          </p>
        </div>
        <div className="w-full flex flex-col items-end mt-24">
          <p className="text-[22px] text-[#23194F] text-end mt-4 ">
            <span className="inline-block text-[22px] font-medium text-companySalmon uppercase text-center border border-companySalmon border-[1px] px-2 mx-auto rounded-full mr-2">
              En la company
            </span>
            resolvemos eso: traducimos la
            <br /> esencia de <span>tu negocio</span> en una identidad que hable
            por ti con <br />
            estrategia, <span>creatividad y propósito</span>
          </p>
        </div>
        <Image
          src={decoration}
          alt="Branding Decoration Image"
          className="absolute bottom-0 left-0"
        />
      </div>
      <div className="flex flex-col w-1/2 bg-[#FFFFFF] shadow-[0px_0px_16px_rgba(0,0,0,0.25)]">
        {phrases.map((phrase, index) => (
          <div
            key={index}
            className="relative group overflow-hidden flex gap-4 items-center w-full h-full px-10 py-2 cursor-pointer"
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
              className="z-10 transition duration-500 group-hover:brightness-200"
            />
            <h3 className="z-10 text-[32px] font-semibold text-[#23194F] transition-colors duration-500 group-hover:text-white mr-auto">
              {phrase.text}
            </h3>
            <ArrowTopRight className="z-10 transition-colors duration-500 group-hover:text-white" />
          </div>
        ))}
      </div>
    </div>
  );
}
