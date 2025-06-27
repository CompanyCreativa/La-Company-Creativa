import Image from "next/image";
import brandingMainImage from "/public/branding/branding_main_image.png";
import realStateMainBanner from "/public/realstate/realstate-main-banner.png";

export default function MainSection({ city }) {
  return (
    <div className="-mt-[88.64px] md:mt-[40px] -mx-8 lg:mx-0 flex justify-between w-full">
      <div className="w-3/5 2xl:pb-24 flex flex-col justify-center lg:justify-center">
        <div className="relative w-full  z-0">
          <Image
            src={brandingMainImage}
            alt="branding image"
            className="lg:hidden w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>
        <h2 className="lg:hidden z-10 relative text-[21px] -mt-[40px] text-center text-[#F2F1ED]">
          <span className="font-semibold">¿Tu marca se ve,</span> pero no se s
        </h2>
        <h1 className="relative mt-[24px] md:mt-[0px] text-[58px] md:text-[65px] xl:text-[85px] 2xl:text-8xl text-companySalmon font-semibold 2xl:text-start z-10 SpaceGrotesk uppercase">
          Conectamos <br />
          <span className="SpaceGrotesk text-start 2xl:text-7xl text-[#23194F] font-light">
            proyectos&nbsp;inmobiliarios
            <br />
            con{" "}
            <span className="2xl:text-7xl SpaceGrotesk font-semibold">
              compradores reales
            </span>
          </span>
        </h1>
        <h2 className="hidden lg:block text-xl text-[#23194F]">
          Somos especialistas en{" "}
          <span className="font-semibold"> publicidad y mercadeo </span>
          para inmobiliarias.
        </h2>
        <h2 className="mt-[16px] text-[20px] 2xl:text-[32px] text-[#23194F] text-center lg:text-left">
          <span className="font-semibold">Creamos marcas</span> que no solo se
          ven bien:
        </h2>
        <h3 className="SpaceGrotesk mt-[14px] text-[20px] inline-block w-auto text-companySalmon border border-companySalmon border-[1px] py-1 px-4 mx-auto lg:mr-auto lg:mx-0 rounded-full font-regular">
          Se entienden, se recuerdan,{" "}
          <span className="font-semibold">se eligen</span>
        </h3>
        <button className="SpaceGrotesk lg:hidden p-[20px] mt-[24px] mx-6 text-[18px] bg-companySalmon text-[#F2F1ED] robout uppercase font-semibold">
          Solicita diagnóstico gratuito
        </button>
        <button className="SpaceGrotesk lg:hidden p-[20px] mt-[24px] mx-6 text-[18px] bg-[#F2F1ED] border border-companySalmon border-[1px] text-companySalmon robout uppercase font-semibold">
          Ver proyectos de branding
        </button>
      </div>
      <div className="w-2/5 flex justify-end">
        <Image
          src={realStateMainBanner}
          alt="realstate image"
          className="w-full"
          priority={true}
        />
      </div>
    </div>
  );
}
