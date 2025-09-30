import Image from "next/image";
import iconDigital6 from "/public/digital/icon-digital6.png";
import bannerHero from "/public/digital/backgroundSectionDigitalMobile.png";

export default function Results() {
  return (
    <div className="flex flex-col lg:bg-digitalSection w-full lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-no-repeat bg-cover rounded-[25px] mt-14 lg:mt-40 ">
      <Image
        src={bannerHero}
        alt="iconDigital1"
        className="w-full  lg:hidden"
      />
      <div className="flex flex-col lg:h-full gap-4 px-6 py-4 lg:py-10 bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[#2BFFC3] lg:border-none lg:bg-none border-opacity-[0.1] rounded-b-[11px] border-t-0 lg:items-center justify-end">
        <p className="text-[17px] lg:text-[16px] 2xl:text-[24px] font-montserrat font-thin lg:text-center">
          Si buscas una agencia de publicidad que no trabaje en automático
          <br className="hidden lg:block" /> sino que piense contigo, cuestione
          contigo y cree contigo…{" "}
          <span className="font-semibold">estás en el lugar correcto.</span>
        </p>
        <a
          className="inline-flex max-w-max items-center gap-2 text-[12px] uppercase tracking-[3px] bg-companySalmon py-4 px-7 font-thin hover:bg-[#B92A1D] transition-all duration-300"
          href="https://wa.me/573148629805"
          target="_blank"
        >
          Comienza ya{" "}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.75 1C11.75 0.585787 11.4142 0.250001 11 0.250001L4.25 0.250001C3.83579 0.250001 3.5 0.585787 3.5 1C3.5 1.41421 3.83579 1.75 4.25 1.75H10.25V7.75C10.25 8.16421 10.5858 8.5 11 8.5C11.4142 8.5 11.75 8.16421 11.75 7.75L11.75 1ZM2.03033 11.0303L11.5303 1.53033L10.4697 0.469671L0.96967 9.96967L2.03033 11.0303Z"
              fill="#FFF8EA"
            />
            <path d="M1 1L11 1L11 11" stroke="#FFF8EA" strokeWidth="1.5" />
          </svg>
        </a>
      </div>
    </div>
  );
}
