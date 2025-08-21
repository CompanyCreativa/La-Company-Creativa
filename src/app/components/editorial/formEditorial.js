import Image from "next/image";

import decoration3 from "/public/branding/decoration3_branding.png";
import Form from "./form";

export default function FormEditorial() {
  return (
    <div className="flex flex-col justify-between gap-8">
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl SpaceGrotesk font-light uppercase text-[#F7F7F7] text-start md:text-center mb-4 md:mb-8 tracking-wide">
        <span className="SpaceGrotesk font-semibold">
          ¿Tienes una historia,{" "}
        </span>
        informe o publicación que necesita <br /> verse{" "}
        <span className="text-companySalmon font-semibold SpaceGrotesk">
          como lo que vale?
        </span>
      </h2>
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="flex flex-col gap-8">
          <Image
            src={decoration3}
            alt="decoration"
            className="rounded-2xl xl:w-[600px] 2xl:w-auto"
          />
        </div>
        <div className="mt-[42px] xl:mt-0 flex items-start justify-center flex-col gap-4 ">
          <h3 className="text-[24px] xl:text-3xl text-start lg:text-start SpaceGrotesk text-companySalmon uppercase">
            <span className="font-semibold SpaceGrotesk">Nosotros</span> lo
            diseñamos contigo.
          </h3>
          <p className="text-lg text-start font-light text-[#fff] tracking-wider">
            Si llegaste hasta aquí es porque tienes algo en mente.
            <br />
            <span className="font-medium">
              Escríbenos y lo hacemos realidad.
            </span>
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}
