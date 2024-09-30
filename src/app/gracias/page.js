import React from "react";
import Image from "next/image";
import LogoCompany from "../../../public/logoCompany.svg";
import Heart from "../../../public/corazonThanks.png";
import MainContainer from "../components/mainContainer";
import Link from "next/link";

// * Modal de gracias por llenar el formulario y enviarlo.
const ModalThankYou = () => {
  const redirect = () => {
    window.location.href = "/";
  };

  return (
    <MainContainer>
      <div className="h-screen inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
        <div className="lg:px-[175px] lg:py-[100px] rounded-lg text-center flex flex-col gap-5  relative lg:max-w-[1000px] md:max-w-[800px] md:px-20 md:py-16 px-4 py-20 max-w-[370px]">
          <h1 className="lg:text-4xl md:text-3xl font-semibold z-10 text-xl">
            ¡Gracias por enviarnos tus datos!
          </h1>
          <p className="underline-offset-8 decoration-1 z-10 md:text-lg decoration-0 md:underline text-m">
            En breve un asesor se comunicará contigo para contarte todos los
            detalles.
          </p>
          <Link className="flex justify-center mt-10" href="/">
            <Image
              src={LogoCompany}
              alt="Logo"
              width={200}
              height={200}
              className="z-10"
            />
          </Link>

          <Image
            src={Heart}
            alt="Heart"
            width={500}
            height={200}
            className="absolute top-0 right-0 md:right-[-40px] z-0 opacity-100 w-[170px] md:w-[330px] lg:w-[430px]"
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default ModalThankYou;
