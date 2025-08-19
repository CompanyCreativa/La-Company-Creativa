"use client";
import { useState } from "react";
import Image from "next/image";

import AccordionOne from "/public/editorial/accordionOne.webp";
import AccordionTwo from "/public/editorial/accordionTwo.webp";
import AccordionThree from "/public/editorial/accordionThree.webp";
import AccordionFour from "/public/editorial/accordionFour.webp";
import AccordionFive from "/public/editorial/accordionFive.webp";
import AccordionSix from "/public/editorial/accordionSix.webp";
import AccordionSeven from "/public/editorial/accordionSeven.webp";
import AccordionEight from "/public/editorial/accordionEight.webp";
import Arrow from "../SVGicons/arrow";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(3);

  const projects = [
    {
      img: AccordionOne,
      title: "UCC",
    },
    {
      img: AccordionTwo,
      title: "Ménsula",
    },
    {
      img: AccordionThree,
      title: "Jardín Botánico",
    },
    {
      img: AccordionFour,
      title: "Adoquinar",
    },
    {
      img: AccordionFive,
      title: "Cultura",
    },
    {
      img: AccordionSix,
      title: "Cultura",
    },
    {
      img: AccordionSeven,
      title: "Cultura",
    },
    {
      img: AccordionEight,
      title: "Cultura",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index);
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-between gap-4 md:px-20 xl:px-32 2xl:px-52 md:-mx-20 xl:-px-32 2xl:-mx-52 bg-[#262626] py-12">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl SpaceGrotesk font-light uppercase text-[#F7F7F7] text-start md:text-center mb-4 md:mb-8 tracking-wide">
        Página que cuentan{" "}
        <span className="SpaceGrotesk font-medium text-companySalmon">
          historias
        </span>
      </h2>
      <div className="h-[653px] flex gap-4">
        {projects.map((project, index) => (
          <div
            className={`relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all ease-in-out duration-500 ${
              index === activeIndex ? "w-full" : "w-40"
            }`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <Image
              src={project.img}
              className="h-full object-cover w-full object-center"
            />
            <div className="absolute z-10 bottom-4 right-1/2 translate-x-1/2">
              <p className="transform -rotate-90 text-[#FFFFFF] text-md mb-10">
                {project.title}
              </p>
              <div className=" bg-[#FFFFFF]/30 p-2 rounded-full border-2 border-[#FFFFFF] w-10">
                <Arrow className="text-[#FFFFFF]  -rotate-90" />
              </div>
            </div>
            <div className="absolute h-1/3 bottom-0 w-full bg-gradient-to-t from-[#252525] to-[#252525]/0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
