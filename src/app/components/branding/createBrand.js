import Image from "next/image";

import zigzagBanner from "/public/zigzag.gif";
import zigzagBannerMobile from "/public/zigzagMobile.gif";
import Link from "next/link";

export default function CreateBrand() {
  return (
    <div className="xl:px-[42px] pt-[42px] pb-[42px] xl:bg-[#fff] xl:shadow-[0px_0px_16px_rgba(0,0,0,0.25)] flex flex-col justify-center">
      <h3 className="text-[28px] xl:text-[29px] 2xl:text-[33px] SpaceGrotesk font-bold text-companySalmon uppercase text-center">
        No solo diseñamos
        <br className="xl:hidden" /> marcas.
      </h3>
      <h4 className="inline-block w-auto text-[20px] xl:text-[20px] 2xl:text-[24px] font-medium text-[#23194F] uppercase text-center border border-[#23194F] border-[1px] px-2 py-1 xl:py-2 xl:px-4 mx-auto rounded-full mb-[42px] SpaceGrotesk">
        las creamos con alma
      </h4>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-16 mb-[72px]">
        <p className="SpaceGrotesk text-[22px] xl:text-[24px] 2xl:text-[28px] text-[#fff] bg-[#23194F] p-4 text-center w-full lg:max-w-[500px] leading-[45px]">
          <span className="font-medium">Creatividad</span> con estrategia
          <br />
          nunca es solo{" "}
          <span className="text-[16px] xl:text-[18px] 2xl:text-[21px] text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px] SpaceGrotesk">
            “bonito”
          </span>
        </p>
        <p className="SpaceGrotesk text-[22px] xl:text-[24px] 2xl:text-[28px] text-[#fff] bg-[#23194F] p-4 text-center w-full lg:max-w-[500px] leading-[45px]">
          <span className="font-medium">Branding realista,</span> aplicable
          <br />y pensado para{" "}
          <span className="text-[16px] xl:text-[18px] 2xl:text-[21px] text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px] SpaceGrotesk">
            crecer
          </span>
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-16 mb-[103px]">
        <p className="SpaceGrotesk text-[22px] xl:text-[24px] 2xl:text-[28px] text-[#fff] bg-[#23194F] p-4 text-center w-full lg:max-w-[500px] leading-[45px]">
          Procesos claros, <br />
          <span className="font-medium">acompañamiento </span>
          <span className="text-[16px] xl:text-[18px] 2xl:text-[21px] text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px] SpaceGrotesk">
            constante
          </span>
        </p>
        <p className="SpaceGrotesk text-[22px] xl:text-[24px] 2xl:text-[28px] text-[#fff] bg-[#23194F] p-4 text-center w-full lg:max-w-[500px] leading-[45px]">
          <span className="font-medium">Coraje</span> para proponer.
          <br />
          corazón para{" "}
          <span className="text-[16px] xl:text-[18px] 2xl:text-[21px] text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px] SpaceGrotesk">
            conectar
          </span>
        </p>
      </div>
      <div className="relative lg:block mt-[-42px] xl:mt-0">
        <Image
          src={zigzagBanner}
          alt="Banner Desktop"
          className="w-full hidden lg:block lg:max-h-[410px] xl:max-h-[500px] 2xl:max-h-[717px] object-cover"
        />
        <Image
          src={zigzagBannerMobile}
          alt="Banner Paco"
          className="block lg:hidden h-[290px] object-cover"
        />
        <Link
          className="absolute w-5/6 lg:w-auto bottom-3 xl:bottom-1 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 p-[13px] lg:p-[20px]  text-[14px] xl:text-[13px] bg-companySalmon xl:bg-[#FFF8EA] text-[#FFF8EA] lg:text-[#23194F] xl:border xl:border-x-[12px] xl:border-y-[8px] xl:border-companySalmon robout uppercase xl:hover:bg-companySalmon xl:hover:text-[#FFF8EA] transition-all duration-300"
          href="https://wa.link/pemtg8"
          target="_blank"
          id="botonwp-branding"
        >
          Agenda una llamada con el equipo
        </Link>
      </div>
    </div>
  );
}
