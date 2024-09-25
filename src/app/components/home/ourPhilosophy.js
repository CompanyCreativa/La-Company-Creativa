import React from "react";
import Image from "next/image";

import Button from "../button";

import heartImg from "/public/heartImg.png";
import Section from "../section";

function OurPhilosophy() {
  return (
    <Section className={"bg-background"}>
      <div className="w-full mt-12 max-w-[1230px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 px-5">
        <div className="flex flex-col gap-6 max-w-[486px]">
          <h1 className="text-[32px] font-normal tracking-wider">
            <strong>Nuestra</strong> filosofía
          </h1>
          <span className="text-base font-thin leading-8 lg:leading-9 lg:text-lg">
            El activo más importante de <strong>La Company</strong> es el
            <strong> recurso humano</strong>, por eso promovemos{" "}
            <strong>el crecimiento personal y profesional</strong>, impulsamos
            planes de estudio y capacitación y permitimos su participación en
            las utilidades anuales.
          </span>
          <div className="mt-4 flex flex-col gap-14 lg:gap-0">
            <div className="-ml-1 flex flex-col gap-10 items-start lg:hidden lg:mt-8">
              <Image
                src={heartImg}
                className="w-[90%]"
                alt="Human for human image"
              />
            </div>
            <Button color={"black"} type="link" link="/equipo">
              Conócenos
            </Button>
          </div>
        </div>
        <div className="mt-8 -ml-1 hidden flex-col gap-10 items-start lg:flex">
          <Image src={heartImg} alt="Human for human image" />
        </div>
      </div>
    </Section>
  );
}

export default OurPhilosophy;
