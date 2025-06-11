import Image from "next/image";
import brandingMainImage from "/public/branding/branding_main_image.png";

export default function MainSection() {
  return (
    <div className="flex justify-between pt-[80px]">
      <div className="pb-24">
        <h1 className="mt-14 text-[24px] md:text-[40px] xl:text-[95px] 2xl:text-[110px] xl:leading-[125px] 2xl:leading-[140px] text-[#23194F] font-semibold text-end z-10">
          AGENCIA DE <br />
          <span className="xl:mr-[-70px] 2xl:mr-[-115px] text-outline border-[#23194F] border-[2px] rounded-full px-10">
            BRANDING
          </span>
          <br />
          EN MEDELLÍN
        </h1>
        <h2 className="text-[32px] text-[#F55548] mt-[-14px]">
          <span className="font-semibold">¿Tu marca</span> se ve, pero no se
          siente?
        </h2>
        <h2 className="text-[32px] text-[#23194F] mt-[16px]">
          <span className="font-semibold">Creamos marcas</span> que no solo se
          ven bien:
        </h2>
        <h3 className="inline-block w-auto text-[24px] text-companySalmon text-center border border-companySalmon border-[1px] py-1 px-4 mx-auto rounded-full mt-[14px]">
          Se entienden, se recuerdan,{" "}
          <span className="font-semibold">se eligen</span>
        </h3>
      </div>
      <div className="relative w-1/2 rounded-2xl overflow-hidden">
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
          <button className="p-[20px] text-[13px] bg-[#FFF8EA] text-[#23194F] border border-x-[12px] border-y-[8px] border-companySalmon robout uppercase hover:bg-companySalmon hover:text-[#FFF8EA] transition-all duration-300">
            Solicita diagnóstico gratuito
          </button>
          <button className="p-[20px] text-[13px] bg-[#FFF8EA] text-[#23194F] border border-x-[12px] border-y-[8px] border-companySalmon robout uppercase hover:bg-companySalmon hover:text-[#FFF8EA] transition-all duration-300">
            Ver proyectos de branding
          </button>
        </div>
      </div>
    </div>
  );
}
