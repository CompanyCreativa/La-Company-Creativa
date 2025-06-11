import Image from "next/image";

import decoration3 from "/public/branding/decoration3_branding.png";

export default function FormBranding() {
  return (
    <div className="flex px-[42px] justify-between pt-[99px] pb-[85px] bg-[#fff] shadow-[0px_0px_16px_rgba(0,0,0,0.25)] px-[120px]">
      <div className="flex flex-col gap-8">
        <h2 className="z-10 text-[24px] md:text-[40px] 2xl:text-[66px]  SpaceGrotesk text-companySalmon  font-semibold uppercase">
          Hablemos <br />
          <span className="text-[#23194F]">podemos hacerlo</span>
          <br />
          <span className="mr-[-115px] text-outline border-[#23194F] border-[2px] rounded-full px-10">
            juntos
          </span>
        </h2>
        <Image src={decoration3} alt="decoration" className="rounded-2xl" />
      </div>
      <div>
        <h3 className="text-[33px] SpaceGrotesk font-bold text-companySalmon uppercase">
          No solo diseñamos marcas.
        </h3>
        <p className="text-[18px] font-light text-[#23194F]">
          Si llegaste hasta aquí es porque seguramente te gustó lo que viste y
          <br /> tienes algo en mente.{" "}
          <span className="font-semibold">
            Escríbenos y lo hacemos realidad.
          </span>
        </p>
      </div>
    </div>
  );
}
