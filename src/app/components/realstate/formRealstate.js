import Image from "next/image";

import decoration3 from "/public/branding/decoration3_branding.png";
import Form from "./form";

export default function FormRealstate() {
  return (
    <div className="flex flex-col lg:flex-row px-[24px] justify-between gap-8 pt-[99px] pb-[85px] bg-[#fff] shadow-[0px_0px_16px_rgba(0,0,0,0.25)] 2xl:px-[120px]">
      <div className="flex flex-col gap-8">
        <h2 className="z-10 text-center md:text-start text-[31px] md:text-[52px] 2xl:text-[66px]  SpaceGrotesk text-companySalmon font-semibold uppercase">
          Hablemos, <br />
          <span className="text-[#23194F] font-light">podemos hacerlo juntos</span>
        </h2>
        <Image
          src={decoration3}
          alt="decoration"
          className="rounded-2xl xl:w-[500px] 2xl:w-auto"
        />
      </div>
      <div className="mt-[42px] xl:mt-0 flex items-center justify-center flex-col gap-4 lg:mr-[60px]">
        <h3 className="text-[24px] xl:text-[33px] text-center lg:text-start SpaceGrotesk font-bold text-companySalmon uppercase">
          ¡TENEMOS MÁS PARA
          <br className="md:hidden" /> CONTARTE!
        </h3>
        <p className="text-[18px] font-light text-[#23194F]">
          Si llegaste hasta aquí es porque seguramente te gustó lo que viste y
          <br /> tienes algo en mente.{" "}
          <span className="font-semibold">
            Escríbenos y lo hacemos realidad.
          </span>
        </p>
        <Form />
      </div>
    </div>
  );
}
