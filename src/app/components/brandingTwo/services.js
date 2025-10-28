"use client";

import Image from "next/image";

import ArrowLeftAndRigth from "../SVGicons/arrowLeftAndRigth";
import Things from "../SVGicons/things";
import EyeV2 from "../SVGicons/eyeV2";
import Mosaic from "../SVGicons/mosaic";
import Papers from "../SVGicons/papers";
import Megaphone from "../SVGicons/megaphone";
import CicleV2 from "../SVGicons/cicleV2";

import texture from "/public/branding/texture.webp";
import textureTwo from "/public/branding/textureTwo.webp";
import Arrow from "../SVGicons/arrow";

export default function Services() {
  const projects = [
    {
      name: (
        <>
          Naming <br /> creativo.
        </>
      ),
      description: "Creamos nombres que resuenan Tu marca, inolvidable.",
      icon: ArrowLeftAndRigth,
    },
    {
      name: (
        <>
          Concepto <br /> estratégico.
        </>
      ),
      description: "La idea maestra de tu marca Impactante y memorable.",
      icon: Things,
    },
    {
      name: (
        <>
          Naming <br /> creativo.
        </>
      ),
      description:
        "Tu esencia convertida en diseño que cautiva.  Creamos la cara de tu marca  para que brille.",
      icon: EyeV2,
    },
    {
      name: (
        <>
          Sistema <br /> gráfico.
        </>
      ),
      description:
        "Reglas claras, impacto visual  impecable. Tu marca, siempre profesional y reconocible.",
      icon: Mosaic,
    },
    {},
    {
      name: (
        <>
          Brandbook <br /> completo.
        </>
      ),
      description:
        "La guía maestra de tu marca.  Aseguramos la coherencia y el impacto en cada aplicación.",
      icon: Papers,
    },
    {
      name: (
        <>
          Concepto <br /> estratégico.
        </>
      ),
      description:
        "Definimos cómo suena tu marca. Una voz única que conecta y resuena con tu audiencia.",
      icon: Megaphone,
    },
    {
      name: (
        <>
          Aplicaciones <br /> de marca.
        </>
      ),
      description: "Papelería, redes, empaques, espacios.",
      icon: CicleV2,
    },
  ];

  const handleClick = () => {
    window.open("https://wa.link/103gx5", "_blank"); // 👉 abre en otra pestaña
  };

  const className = "";

  return (
    <div className="w-full flex flex-col justify-center items-center relative bg-[#1D1D1D]">
      <Image
        src={texture}
        alt="texture"
        className="w-[22%] absolute top-0 right-0"
      />
      <Image
        src={textureTwo}
        alt="texture"
        className="w-[22%] absolute bottom-0 left-0"
      />
      <div className="xl:max-w-[1300px] 2xl:max-w-[1500px] w-full flex flex-col my-20">
        <h3 className="w-1/3 flex justify-between">
          <span className="SpaceGrotesk font-bold text-[#F2F1ED]">
            ¿Qué hacemos en branding?
          </span>
          <span className="SpaceGrotesk font-bold text-[#F2F1ED]"> (03)</span>
        </h3>
        <div className="w-1/3 h-[1px] mt-1 mb-5 bg-[#F2F1ED]"></div>
        <h4 className="font-montserrat text-2xl font-bold uppercase text-companySalmon">
          Agencia de branding en Medellín
        </h4>
        <h2 className="font-montserrat text-7xl font-bold tracking-wide uppercase text-[#F2F1ED]">
          Que CONSTRUYE MARCA, <br />
          NO SOLO APARIENCIA
        </h2>
        <div className="mx-[10px] grid grid-cols-4 gap-20 mt-20">
          {projects.map((project, index) => {
            // Si es el cuarto elemento (index = 3)
            if (index === 4) {
              return <div key={index}></div>;
            }

            // Resto de los elementos normales
            return (
              <div
                key={index}
                className="bg-[#F2F1ED] outline outline-[8px] outline-[#F2F1ED] border border-[#1D1D1D] rounded-lg gap-4 flex flex-col"
              >
                <div className="flex gap-8 px-6 pt-6">
                  <project.icon className="w-12 h-12 self-center" />
                  <h5 className="text-2xl font-montserrat font-bold">
                    {project.name}
                  </h5>
                </div>
                <div className="h-[1px] w-full bg-[#1D1D1D]"></div>
                <p className="px-6 pb-12 font-poppins text-lg">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full items-center flex justify-center mt-20">
          <button
            className={`flex text-sm md:text-base 2xl:text-lg font-light items-center gap-5 robout text-[#302F32] bg-[#fff] px-4 py-2 rounded-full group ${className} overflow-hidden border border-white/10  shadow-[0_12px_40px_rgba(8,15,30,0.55)] relative `}
            onClick={handleClick}
          >
            <p className="flex-1 ml-5 text-center font-[400]">
              Solicita diagnóstico gratuito
            </p>
            <div className="relative bg-[#302F32] w-8 h-8 flex items-center justify-center rounded-full ">
              <Arrow className="text-white z-10" />
              <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in-out group-hover:h-full rounded-full"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
