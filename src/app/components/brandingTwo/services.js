"use client";

import Image from "next/image";
import { useState } from "react";

import ArrowLeftAndRigth from "../SVGicons/arrowLeftAndRigth";
import Things from "../SVGicons/things";
import EyeV2 from "../SVGicons/eyeV2";
import Mosaic from "../SVGicons/mosaic";
import Papers from "../SVGicons/papers";
import Megaphone from "../SVGicons/megaphone";
import CicleV2 from "../SVGicons/cicleV2";
import Arrow from "../SVGicons/arrow";

import texture from "/public/branding/texture.webp";
import textureTwo from "/public/branding/textureTwo.webp";
import Return from "../SVGicons/return";

export default function Services() {
  const projects = [
    {
      name: (
        <>
          Naming <br /> creativo.
        </>
      ),
      description: "Creamos nombres que resuenan. Tu marca, inolvidable.",
      icon: ArrowLeftAndRigth,
      back: "Un buen nombre define la esencia y propósito de tu marca.",
    },
    {
      name: (
        <>
          Concepto <br /> estratégico.
        </>
      ),
      description: "La idea maestra de tu marca. Impactante y memorable.",
      icon: Things,
      back: "Desarrollamos conceptos sólidos que guían tu identidad.",
    },
    {
      name: (
        <>
          Identidad <br /> visual.
        </>
      ),
      description:
        "Tu esencia convertida en diseño que cautiva. Creamos la cara de tu marca para que brille.",
      icon: EyeV2,
      back: "Diseñamos sistemas visuales coherentes y versátiles.",
    },
    {
      name: (
        <>
          Sistema <br /> gráfico.
        </>
      ),
      description:
        "Reglas claras, impacto visual impecable. Tu marca, siempre profesional y reconocible.",
      icon: Mosaic,
      back: "Establecemos guías gráficas que garantizan consistencia visual.",
    },
    {},
    {
      name: (
        <>
          Brandbook <br /> completo.
        </>
      ),
      description:
        "La guía maestra de tu marca. Aseguramos coherencia e impacto en cada aplicación.",
      icon: Papers,
      back: "Incluye lineamientos, tipografías, colores y tono comunicacional.",
    },
    {
      name: (
        <>
          Voz <br /> de marca.
        </>
      ),
      description:
        "Definimos cómo suena tu marca. Una voz única que conecta con tu audiencia.",
      icon: Megaphone,
      back: "Creamos un tono comunicacional auténtico y coherente.",
    },
    {
      name: (
        <>
          Aplicaciones <br /> de marca.
        </>
      ),
      description: "Papelería, redes, empaques, espacios.",
      icon: CicleV2,
      back: "Llevamos tu identidad visual a todas las piezas de comunicación.",
    },
  ];

  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClick = () => {
    window.open("https://wa.link/103gx5", "_blank");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center relative bg-[#1D1D1D] px-4">
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
        <h3 className="xl:w-1/3 flex justify-between">
          <span className="SpaceGrotesk font-bold text-[#F2F1ED]">
            ¿Qué hacemos en branding?
          </span>
          <span className="SpaceGrotesk font-bold text-[#F2F1ED]"> (03)</span>
        </h3>

        <div className="xl:w-1/3 h-[1px] mt-1 mb-5 bg-[#F2F1ED]"></div>

        <h4 className="font-montserrat text-3xl font-bold uppercase text-companySalmon">
          Agencia de branding en Medellín
        </h4>

        <h2 className="hidden xl:block font-montserrat text-7xl font-bold tracking-wide uppercase text-[#F2F1ED]">
          Que CONSTRUYE MARCA, <br />
          NO SOLO APARIENCIA
        </h2>

        <div className="mx-[10px] flex flex-col xl:grid grid-cols-4 gap-20 mt-20">
          {projects.map((project, index) => {
            if (index === 4) return <div key={index}></div>;

            return (
              <div
                key={index}
                onClick={() => handleFlip(index)}
                className="cursor-pointer w-full h-[260px] perspective hover:scale-[1.1] duration-700"
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
                    flippedCards[index] ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Frente */}
                  <div className="absolute w-full h-full backface-hidden bg-[#F2F1ED] outline outline-[8px] outline-[#F2F1ED] border border-[#1D1D1D] rounded-lg shadow-lg flex flex-col items-center justify-center overflow-hidden group">
                    <div className="flex gap-8 px-6 ">
                      <project.icon className="w-12 h-12 self-center" />
                      <h5 className="text-2xl font-montserrat font-bold">
                        {project.name}
                      </h5>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-[#F2F1ED] pt-4 pb-2 pl-4 pr-2 rounded-tl-full group-hover:bg-[#1D1D1D] group-hover:text-[#F2F1ED] text-[#1D1D1D] transition-ease duration-300">
                      <Return className="" />
                    </div>
                  </div>

                  {/* Reverso */}
                  <div className="absolute w-full h-full backface-hidden bg-[#F2F1ED] text-[#1D1D1D] outline outline-[8px] outline-[#F2F1ED] border border-[#1D1D1D] rounded-lg shadow-lg flex items-center justify-center rotate-y-180  text-center">
                    <p className="text-lg font-poppins">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full items-center flex justify-center mt-20">
          <button
            onClick={handleClick}
            className="flex text-sm md:text-base 2xl:text-lg font-light items-center gap-5 robout text-[#302F32] bg-[#fff] px-4 py-2 rounded-full group overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(8,15,30,0.55)] relative"
          >
            <p className="flex-1 ml-5 text-center font-[400]">
              Solicita diagnóstico gratuito
            </p>
            <div className="relative bg-[#302F32] w-8 h-8 flex items-center justify-center rounded-full">
              <Arrow className="text-white z-10" />
              <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in-out group-hover:h-full rounded-full"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
