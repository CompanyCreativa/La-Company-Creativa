"use client";
import Image from "next/image";
import ButtonBranding from "./buttonBranding";
import decorationOne from "/public/branding/decorationOne.webp";
import Arrow from "../SVGicons/arrow";
import { motion } from "motion/react";
import ScrollDownIcon from "../SVGicons/scrollDownIcon";

export default function MainSection({ city }) {
  const handleClickProjects = () => {
    window.location.href = "/portafolio";
  };

  return (
    <div className="w-full 2xl:h-[91vh] bg-[url('/branding/mainImage.webp')] justify-center flex bg-cover bg-center bg-no-repeat relative pb-[120px]">
      <div className="w-full xl:max-w-[1300px] 2xl:max-w-[1500px] pt-[100px] mx-4">
        <h1 className="text-5xl xl:text-8xl uppercase  text-[#E8E8E8] font-bold 2xl:tracking-wider">
          <span className=" text-dodge font-montserrat  leading-[0.5] font-bold">
            Aquí&nbsp;hacemos <br />
          </span>
          <span className="mix-blend-lighten   font-montserrat text-[#F55548]/80 leading-[0.5] font-bold">
            Branding
          </span>
        </h1>
        <p className="font-montserrat 2xl:text-lg text-[#E5E7EB] uppercase 2xl:tracking-wider">
          Para que tu marca{" "}
          <span className="font-montserrat font-bold">se vea bien,</span> pero
          también para que{" "}
          <span className="font-montserrat font-bold">se entienda</span> se
          recuerde
          <span className="font-montserrat font-bold"> y se elija.</span>
        </p>
        <div className="flex gap-5 mt-10 2xl:mt-20">
          <a
            href="https://wa.link/103gx5"
            id="botonwp-branding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonBranding
              text="Solicita diagnóstico gratuito"
              className="hidden xl:flex"
            />
          </a>
          <ButtonBranding
            text="Ver proyectos de branding"
            action={handleClickProjects}
          />
        </div>
        <div className="absolute bottom-5 xl:bottom-20 right-10 xl:right-40 flex justify-end w-32 h-32 xl:w-auto xl:h-auto">
          <div className="relative">
            <Arrow className="text-white w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 " />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 12, // velocidad de la rotación (ajústala)
                ease: "linear",
              }}
            >
              <Image src={decorationOne} alt="decoration" />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center "
      >
        <ScrollDownIcon className="text-[#F2F1ED]" />
      </motion.div>
    </div>
  );
}
