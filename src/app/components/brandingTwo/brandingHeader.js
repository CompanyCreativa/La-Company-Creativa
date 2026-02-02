"use client";
import Image from "next/image";
import Link from "next/link";

import logo from "/public/logoCompany.svg";
import Arrow from "../SVGicons/arrow";

export default function BrandingHeader() {
  const handleClick = () => {
    window.open("https://wa.link/103gx5", "_blank"); // 👉 abre en otra pestaña
  };

  const className = "";

  return (
    <header className="flex justify-center bg-[#1D1D1D] shadow-[0px_4px_4px_rgba(0,0,0,0.12)] p-[16px] lg:p-[28px] sticky top-0 z-50">
      <div className="flex w-full justify-center xl:justify-between items-center gap-5 max-w-[1300px] 2xl:max-w-[1500px]">
        <Link href="/" className="flex justify-center">
          <Image
            src={logo}
            className="max-w-[150px] lg:max-w-[153px] cursor-pointer"
            alt="Logo"
          />
        </Link>
        <button
          className={`flex text-sm md:text-base 2xl:text-lg font-light items-center gap-5 robout text-[#302F32] bg-[#fff] px-4 py-4 xl:py-2 rounded-full group ${className} overflow-hidden border border-white/10  shadow-[0_12px_40px_rgba(8,15,30,0.55)] relative hidden lg:flex`}
          onClick={handleClick}
          id="botonwp-branding"
        >
          <p className="flex-1 ml-5 text-center font-[400]">Hablemos</p>
          <div className="relative bg-[#302F32] w-8 h-8 flex items-center justify-center rounded-full ">
            <Arrow className="text-white z-10" />
            <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in-out group-hover:h-full rounded-full"></div>
          </div>
        </button>
      </div>
    </header>
  );
}
