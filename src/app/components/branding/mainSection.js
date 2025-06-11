import Image from "next/image";
import brandingMainImage from "/public/branding/branding_main_image.png";

export default function MainSection() {
  return (
    <div className="-mt-[88.64px] md:mt-[80px] -mx-8 flex justify-between">
      <div className="2xl:pb-24 flex flex-col justify-center lg:justify-start">
        <div className="relative w-full z-0">
          <Image
            src={brandingMainImage}
            alt="branding image"
            className="lg:hidden w-full object-cover "
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>
        <h2 className="lg:hidden z-10 relative text-[21px] -mt-[40px] text-center text-[#F2F1ED]">
          <span className="font-semibold">¿Tu marca se ve,</span> pero no se
          siente?
        </h2>
        <h1 className="relative mt-[24px] md:mt-[0px] text-[58px] md:text-[65px] xl:text-[85px] 2xl:text-[110px] xl:leading-[125px] 2xl:leading-[140px] text-[#23194F] font-semibold text-center 2xl:text-end z-10">
          AGENCIA DE <br />
          <span className="xl:mr-[-115px] px-10 border-[2px] text-outline border-[#23194F] rounded-full pt-3">
            BRANDING
          </span>
          <br />
          EN MEDELLÍN
        </h1>
        <h2 className="hidden lg:block 2xl:mt-[-14px] text-[24px] 2xl:text-[32px] text-companySalmon">
          <span className="font-semibold">¿Tu marca</span> se ve, pero no se
          siente?
        </h2>
        <h2 className="mt-[16px] text-[20px] 2xl:text-[32px] text-[#23194F] text-center lg:text-left">
          <span className="font-semibold">Creamos marcas</span> que no solo se
          ven bien:
        </h2>
        <h3 className="mt-[14px] text-[20px] inline-block w-auto text-companySalmon border border-companySalmon border-[1px] py-1 px-4 mx-auto lg:mr-auto lg:mx-0 rounded-full">
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
      <div className="hidden lg:block relative w-1/2 rounded-2xl overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/branding/branding_main_image.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Sombra interior de abajo hacia arriba */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Contenido (botones) */}
        <div className="w-full flex justify-around absolute z-10 px-4 py-10 text-white bottom-0">
          <button className="p-[20px] text-[12px] 2xl:text-[13px] bg-[#FFF8EA] text-[#23194F] border border-x-[12px] border-y-[8px] border-companySalmon robout uppercase hover:bg-companySalmon hover:text-[#FFF8EA] transition-all duration-300">
            Solicita diagnóstico gratuito
          </button>
          <button className="xl:p-[19px] 2xl:p-[20px] text-[12px] 2xl:text-[13px] bg-[#FFF8EA] text-[#23194F] border border-x-[12px] border-y-[8px] border-companySalmon robout uppercase hover:bg-companySalmon hover:text-[#FFF8EA] transition-all duration-300">
            Ver proyectos de branding
          </button>
        </div>
      </div>
    </div>
  );
}
