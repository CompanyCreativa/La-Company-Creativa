import React, { useState } from "react";
import Image from "next/image";
import LogoCompany from "../../../public/logoCompany.svg";
import Heart from "../../../public/corazonThanks.png";

const ModalThankYou = ({ isOpen }) => {

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white lg:px-[175px] lg:py-[100px] rounded-lg shadow-lg text-center flex flex-col gap-5 relative overflow-hidden lg:max-w-[1000px] md:max-w-[800px] md:px-20 md:py-16 px-4 py-20 max-w-[370px]">
            <h1 className="lg:text-4xl md:text-3xl font-semibold z-10 text-xl">
              ¡Gracias por enviarnos tus datos!
            </h1>
            <p className="underline-offset-8 decoration-1 z-10 md:text-lg decoration-0 md:underline text-m">
              En breve un asesor se comunicará contigo para contarte todos los
              detalles.
            </p>

            <div className="flex justify-center mt-10">
              <Image
                src={LogoCompany}
                alt="Logo"
                width={200}
                height={200}
                className="z-10"
              />
            </div>

            <Image
              src={Heart}
              alt="Heart"
              width={500}
              height={200}
              className="absolute top-0 right-0 md:right-[-40px] z-0 opacity-100 w-[170px] md:w-[330px] lg:w-[430px]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalThankYou;
