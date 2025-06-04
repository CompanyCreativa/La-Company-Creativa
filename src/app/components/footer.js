import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import IconContainer from "./iconContainer";
import LaCoSvg from "./SVGicons/laCoSvg";

export default function Footer() {
  return (
    <footer className="bg-black w-full pt-9 pb-5 px-5 relative">
      <div className="w-full flex flex-col justify-center items-center gap-3 lg:gap-20 max-w-[850px] lg:flex-row mx-auto lg:items-start lg:pt-10 lg:pb-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-white font-montserrat text-xs lg:text-sm tracking-[5px] lg:tracking-[8px] font-light text-center">
            Somos una agencia creativa
          </span>
          <div className="relative text-line w-full flex justify-center items-center gap-2 mt-1">
            <div className="w-full h-px bg-white"></div>
            <span className="text-white relative font-montserrat text-sm tracking-[8px] font-light pl-2">
              con
            </span>
            <div className="w-full h-px bg-white"></div>
          </div>
          <span className="text-[29px] text-companySalmon">36 años</span>
          <span className="text-white font-montserrat text-sm tracking-[8px] font-bold mt-2">
            de experiencia
          </span>
        </div>
        <div className="flex flex-col items-center gap-3 mt-5 lg:mt-0 lg:gap-[17px]">
          <span className="text-xs text-white font-montserrat tracking-widest font-thin lg:text-sm">
            Cra. 48 # 20-34
          </span>
          <span className="text-xs text-white font-montserrat tracking-widest font-thin lg:text-sm">
            Centro Empresarial Ciudad de Río
          </span>
          <span className="text-xs text-white font-montserrat tracking-widest font-thin lg:text-sm">
            Torre 1 - Oficina 901
          </span>
          <Link href="https://wa.link/omjp5g" target="_blank">
            <span className="text-xs text-white font-montserrat tracking-widest font-thin lg:text-sm">
              321 6393413
            </span>
          </Link>
          <div className="flex items-center gap-8 mt-5 mb-20">
            <Link
              href="https://co.linkedin.com/company/companycreativa"
              target="_blank"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link href="https://www.behance.net/lacompanycrea" target="_blank">
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faBehance}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link href="https://wa.link/omjp5g" target="_blank">
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link
              href="https://www.instagram.com/lacompanycrea/?hl=es"
              target="_blank"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
            <Link
              href="https://www.facebook.com/lacompanycreativa"
              target="_blank"
            >
              <IconContainer className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[16px] text-companySalmon"
                />
              </IconContainer>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <LaCoSvg />
      </div>
    </footer>
  );
}
