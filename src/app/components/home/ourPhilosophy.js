import React from "react";
import Image from "next/image";

import Button from "../button";

import heartImageMobile from "/public/heartImageMobile.png";
import heart from "/public/heart.png";
import decoration from "/public/decoration.png";
import Section from "../section";

function OurPhilosophy() {
  return (
    <Section className={"bg-transparent mt-20 w-full"}>
      <h1 className="md:ml-20 SpaceGrotesk text-[27px] md:text-[40px] mb-5 md:mb-10 tracking-widest font-semibold">
        Nuestra filosofía
      </h1>
      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 md:gap-10 md:px-20 md:py-[100px] mb-10 border bg-background relative md:overflow-hidden">
        <div className="flex flex-col gap-6 max-w-[600px] px-5 pt-10 md:pt-0 md:px-0 ">
          <span className="text-base font-light font-SpaceGrotesk tracking-wider leading-8 lg:leading-9 lg:text-2xl">
            El activo más importante de{" "}
            <strong className="font-semibold">La Company</strong> es el
            <strong className="font-semibold"> recurso humano</strong>, por eso
            promovemos{" "}
            <strong className="font-semibold">
              el crecimiento personal y profesional
            </strong>
            , impulsamos planes de estudio y capacitación y permitimos su
            participación en las utilidades anuales.
          </span>
          <div className="mt-4 flex flex-col gap-14 lg:gap-0 absolute md:static bottom-[-10%] left-[0]">
            <Button color={"black"} type="link" link="/equipo">
              Conócenos
            </Button>
          </div>
        </div>
        <div className="relative md:static">
          <div className="hidden absolute flex-col gap-10 items-start lg:flex bottom-0  right-[-10%]">
            <Image
              src={decoration}
              alt="Human for human image"
              className="w-[90%]"
            />
          </div>
          <div className="hidden absolute flex-col gap-10 items-start lg:flex bottom-[-60%] right-[10%]">
            <Image
              src={heart}
              alt="Human for human image"
              className="w-[90%]"
            />
          </div>
          <div className="w-full">
            <Image
              src={heartImageMobile}
              alt="Human for human image"
              className="w-full md:hidden"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default OurPhilosophy;
