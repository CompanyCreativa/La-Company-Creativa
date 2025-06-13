import Image from "next/image";

import historia from "/public/branding/historia.png";
import estrategico from "/public/branding/estrategico.png";
import competencia from "/public/branding/competencia.png";
import visual from "/public/branding/visual.png";
import yourBrand from "/public/branding/your_brand.png";
import decorationBranding from "/public/branding/decoration_branding.png";

export default function weDoIt() {
  return (
    <div className="flex flex-col justify-center xl:bg-[#FFFFFF] xl:shadow-[0px_0px_16px_rgba(0,0,0,0.25)] xl:p-[42px] 2xl:p-[92px] gap-4">
      <h3 className="text-[28px] xl:text-[29px] 2xl:text-[33px] SpaceGrotesk font-bold text-[#23194F] uppercase text-center">
        Así lo hacemos
      </h3>
      <h4 className="inline-block w-auto text-[24px] xl:text-[20px] 2xl:text-[24px] font-medium text-companySalmon uppercase text-center border border-companySalmon border-[1px] px-2 py-1 xl:py-2 xl:px-4 mx-auto rounded-full">
        Y funciona
      </h4>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-12 xl:gap-16">
        <div className="flex flex-col gap-12 xl:gap-16">
          <div className="flex  gap-4 items-center">
            <Image src={historia} alt="Historia"/>
            <p className="text-[22px] xl:text-[20px] 2xl:text-[24px] font-light text-[#23194F] SpaceGrotesk">
              Escuchamos tu <span className="font-medium">historia,</span>
              <br /> mercado y propósito
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={competencia} alt="Competencia"/>
            <p className="text-[22px] xl:text-[20px] 2xl:text-[24px] font-light text-[#23194F] SpaceGrotesk">
              Investigamos contexto, <br /> tendencias{" "}
              <span className="font-medium">y competencia</span>
            </p>
          </div>
        </div>
        <Image src={decorationBranding} className="w-4/5 xl:w-auto" alt="Decoration"/>
        <div className="flex flex-col gap-16">
          <div className="flex gap-4 items-center">
            <Image src={estrategico} alt="Estrategico"/>
            <p className="text-[22px] xl:text-[20px] 2xl:text-[24px] font-light text-[#23194F] SpaceGrotesk">
              Escuchamos tu <span className="font-medium">historia,</span>
              <br /> mercado y propósito
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={visual} alt="Visual"/>
            <p className="text-[22px] xl:text-[20px] 2xl:text-[24px] font-light text-[#23194F] SpaceGrotesk">
              Escuchamos tu <span className="font-medium">historia,</span>
              <br /> mercado y propósito
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 items-center justify-center mt-12 xl:mt-14">
        <Image src={yourBrand} alt="Your brand"/>
        <p className="text-[22px] xl:text-[20px] 2xl:text-[24px] font-light text-[#23194F] SpaceGrotesk">
          Escuchamos tu <span className="font-medium">historia,</span>
          <br /> mercado y propósito
        </p>
      </div>
    </div>
  );
}
