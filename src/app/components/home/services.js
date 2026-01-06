"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import brandingImage from "/public/branding.webp";
import webImage from "/public/web.webp";
import editorialImage from "/public/editorial.webp";
import inmobiliariaImage from "/public/inmobiliaria.webp";
import pautaImage from "/public/pauta.webp";

import Arrow from "../SVGicons/arrow";
import Section from "../section";
import ModalForm from "../modalForm";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(3);
  const router = useRouter();

  const projects = [
    {
      img: brandingImage,
      title: <>Branding</>,
      description: "Tu marca con una identidad clara y creativa.",
      link: "agencia-de-branding",
    },
    {
      img: webImage,
      title: <>Páginas&nbsp;web</>,
      description: "Más que un sitio, convierte clics en clientes.",
      link: "agencia-de-desarrollo-web",
    },
    {
      img: editorialImage,
      title: <>Página&nbsp;Editorial</>,
      description:
        "Piezas editoriales que cuentan historias con una gran experiencia.",
      link: "editorial",
    },
    {
      img: inmobiliariaImage,
      title: <>Proyectos&nbsp;inmobiliarios</>,
      description: "Estrategia que vende espacios.",
      link: "publicidad-proyectos-inmobiliarios",
    },
    {
      img: pautaImage,
      title: <>Pauta&nbsp;digital</>,
      description: "Anuncios que convierten de verdad.",
      link: "agencia-de-pauta-digital",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index);
    setIsOpen(!isOpen);
  };

  const handleClick = (index) => {
    if (index === activeIndex) {
      router.push(`/${projects[index].link}`);
      return;
    }

    toggleAccordion(index);
  };

  return (
    <Section className={"bg-transparent w-full"}>
      <div className="flex flex-col space-between gap-4" id="projects">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-light uppercase text-[#11190C] text-start md:text-center mb-4 md:mb-8 tracking-wide mt-20">
          <span className="font-bold text-[#11190C]">Explora </span>
          nuestros servicios
        </h2>
        <div className="md:h-[653px] flex flex-col md:flex-row gap-4">
          {projects.map((project, index) => (
            <div
              className={`group relative overflow-hidden cursor-pointer transition-all ease-in-out duration-500 ${
                index === activeIndex
                  ? "w-full h-[303px] md:h-full"
                  : "md:w-40 h-[88px] md:h-full "
              }`}
              key={index}
              onClick={() => handleClick(index)}
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
    </Section>
  );
}
