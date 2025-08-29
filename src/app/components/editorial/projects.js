"use client";
import { useState } from "react";
import Image from "next/image";

import accordionUCC from "/public/editorial/accordionUCC.webp";
import accordionMensula from "/public/editorial/accordionMensula.webp";
import accordionJardinBotanico from "/public/editorial/accordionJardinBotanico.webp";
import accordionAdoquinar from "/public/editorial/accordionAdoquinar.webp";
import accordionLafargeHolcim from "/public/editorial/accordionLafargeHolcim.webp";
import accordionQuarzzo from "/public/editorial/accordionQuarzzo.webp";
import accordionCristar from "/public/editorial/accordionCristar.webp";
import accordionDiamante from "/public/editorial/accordionDiamante.webp";

import Arrow from "../SVGicons/arrow";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(3);

  const projects = [
    {
      img: accordionUCC,
      title: "UCC",
      description: "Informe de sostenibilidad",
    },
    {
      img: accordionMensula,
      title: "Ménsula",
      description: "Brochure proyectos arquitectónicos",
    },
    {
      img: accordionJardinBotanico,
      title: <>Jardín&nbsp;Botánico</>,
      description: "Informe de gestión",
    },
    {
      img: accordionAdoquinar,
      title: "Adoquinar",
      description: "Revista Imaginaria",
    },
    {
      img: accordionLafargeHolcim,
      title: <>Lafarge&nbsp;Holcim</>,
      description: "Libro conmemorativo",
    },
    {
      img: accordionQuarzzo,
      title: "Quarzzo",
      description: "Brochure de proyecto",
    },
    {
      img: accordionCristar,
      title: "Cristar",
      description: "Catálogo de venta",
    },
    {
      img: accordionDiamante,
      title: "Diamante",
      description: "Catálogo de venta",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index);
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-between gap-4 md:px-20 xl:px-32 2xl:px-52 md:-mx-20 xl:-px-32 xl:-mx-32 2xl:-mx-52 md:bg-[#262626] py-12" id="projects">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl SpaceGrotesk font-light uppercase text-[#F7F7F7] text-start md:text-center mb-4 md:mb-8 tracking-wide">
        Página que cuentan{" "}
        <span className="SpaceGrotesk font-medium text-companySalmon">
          historias
        </span>
      </h2>
      <div className="md:h-[653px] flex flex-col md:flex-row gap-4">
        {projects.map((project, index) => (
          <div
            className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all ease-in-out duration-500 ${
              index === activeIndex
                ? "w-full h-[303px] md:h-full"
                : "md:w-40 h-[88px] md:h-full "
            }`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <Image
              src={project.img}
              className="h-full object-cover w-full object-center "
            />
            <div className="absolute z-10 bottom-1/2 translate-y-1/2  md:bottom-4 md:translate-y-0 md:right-1/2 translate-x-1/2">
              <div className="absolute bottom-1/2 translate-y-1/2 md:translate-y-0 md:bottom-16  left-14 md:left-auto md:right-1/2 md:translate-x-1/2 md:-rotate-90 w-full">
                <p
                  className={`text-[#FFFFFF] text-lg text-start transition-all duration-300 ease-in-out ${
                    index === activeIndex ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {project.title}
                </p>
              </div>
              <div
                className={`relative bg-[#FFFFFF]/30 p-2 rounded-full border border-[#FFFFFF] group-hover:border-none w-10 h-10 flex items-center justify-center transition-all duration-300 ease-in-out ${
                  index === activeIndex ? "opacity-0" : "opacity-100"
                }`}
              >
                <Arrow className="text-[#FFFFFF] md:-rotate-90 z-10" />
                <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-500 ease-in-out group-hover:h-full rounded-full"></div>
              </div>
            </div>
            <div
              className={`absolute w-1/3 h-full md:h-1/3 bottom-0 md:w-full bg-gradient-to-r md:bg-gradient-to-t from-[#252525] to-[#252525]/0  transition-all duration-300 ease-in-out pointer-events-none ${
                index === activeIndex
                  ? ""
                  : "group-hover:w-full md:group-hover:h-2/3 group-hover:from-[#000000]/70"
              }`}
            ></div>
            <div
              className={`absolute bottom-5 left-5 md:bottom-10 w-full md:left-10 text-white transition-all duration-200 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <h5 className="robout text-3xl md:text-5xl mb-2">
                {project.title}
              </h5>
              <p className="md:text-xl">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
