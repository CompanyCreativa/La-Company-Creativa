"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import bgSliderOne from "/public/branding/bgSliderOne.webp";
import bgSliderTwo from "/public/branding/bgSliderTwo.webp";
import bgSliderThree from "/public/branding/bgSliderThree.webp";
import bgSliderFour from "/public/branding/bgSliderFour.webp";

const images = [bgSliderOne, bgSliderTwo, bgSliderThree, bgSliderFour];
export default function MainSection({ city }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="-mt-[88.64px] md:mt-[80px] -mx-8 lg:mx-0 flex flex-col md:flex-row justify-between">
      <div className="2xl:pb-24 flex flex-col justify-center lg:justify-start order-2 md:order-1">
        <h1 className="relative mt-[24px] md:mt-[0px] text-[32px] md:text-[35px] xl:text-[42px] 2xl:text-[62px] text-[#23194F] font-bold text-start 2xl:text-start z-10 SpaceGrotesk uppercase mx-4">
          Aquí hacemos branding <br />
          <span className="SpaceGrotesk inline-block text-outline  rounded-full">
            para que tu marca <br /> se vea bien,
          </span>
        </h1>
        <h2 className="hidden lg:block 2xl:mt-[14px] text-[22px] 2xl:text-[24px] text-companySalmon">
          pero también para que se entienda,
          <span className="font-semibold"> se recuerde y se elija </span>
        </h2>
        <div className="hidden lg:flex w-full flex justify-start z-10 py-20 text-white gap-4">
          <Link
            className="p-[20px] text-[12px] 2xl:text-[13px] bg-[#FFF8EA] text-[#23194F] border border-x-[12px] border-y-[8px] border-companySalmon robout uppercase hover:bg-companySalmon hover:text-[#FFF8EA] transition-all duration-300"
            href="https://wa.link/pemtg8"
            target="_blank"
            id="botonwp-branding"
          >
            Solicita diagnóstico gratuito
          </Link>
          <Link
            className="xl:p-[19px] 2xl:p-[20px] text-[12px] 2xl:text-[13px] bg-[#FFF8EA] text-[#23194F] border border-x-[12px] border-y-[8px] border-companySalmon robout uppercase hover:bg-companySalmon hover:text-[#FFF8EA] transition-all duration-300 "
            href="
        #whatWeDo"
          >
            Ver proyectos de branding
          </Link>
        </div>
        <Link
          className="SpaceGrotesk lg:hidden p-[20px] mt-[24px] mx-6 text-[18px] bg-companySalmon text-[#F2F1ED] robout uppercase font-semibold text-center"
          href="https://wa.link/pemtg8"
          target="_blank"
          id="botonwp-branding"
        >
          Solicita diagnóstico gratuito
        </Link>
        <Link
          className="SpaceGrotesk lg:hidden p-[20px] mt-[24px] mx-6 text-[18px] bg-[#F2F1ED] border border-companySalmon border-[1px] text-companySalmon robout uppercase font-semibold text-center"
          href="
        #whatWeDo"
        >
          Ver proyectos de branding
        </Link>
      </div>
      <div className="relative w-full md:w-1/2 z-0 overflow-hidden mt-20 md:mt-0 order-1 md:order-2">
        <motion.div
          key={index}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image
            src={images[index]}
            alt="branding image"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
