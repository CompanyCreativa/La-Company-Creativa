"use client";
import Image from "next/image";
import ButtonBranding from "./buttonBranding";
import decorationOne from "/public/branding/decorationOne.webp";
import Arrow from "../SVGicons/arrow";
import { motion } from "motion/react";
import ScrollDownIcon from "../SVGicons/scrollDownIcon";

export default function MainSection({ city }) {
  return (
    <div className="w-full h-[91vh] bg-[url('/branding/mainImage.webp')] justify-center flex bg-cover bg-center bg-no-repeat relative">
      <div className="w-full xl:max-w-[1300px] 2xl:max-w-[1500px] pt-[100px]">
        <h1 className=" text-8xl uppercase  text-[#E8E8E8] font-bold tracking-wider">
          <span className="mix-blend-difference grift leading-[0.5] font-bold">
            Aquí hacemos <br />
          </span>
          <span className="mix-blend-lighten  grift text-[#F55548] leading-[0.5] font-bold">
            Branding
          </span>
        </h1>
        <p className="grift text-lg text-[#E5E7EB] uppercase tracking-wider">
          Para que tu marca{" "}
          <span className="grift font-bold">se vea bien,</span> pero también
          para que <span className="grift font-bold">se entienda</span> se
          recuerde<span className="grift font-bold"> y se elija.</span>
        </p>
        <div className="flex gap-5 mt-20">
          <ButtonBranding text="Solicita diagnóstico gratuito" />
          <ButtonBranding text="Ver proyectos de branding" />
        </div>
        <div className="absolute bottom-20 right-40 flex justify-end ">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 "
      >
        <ScrollDownIcon className="text-[#F2F1ED]" />
      </motion.div>
    </div>
  );
}
