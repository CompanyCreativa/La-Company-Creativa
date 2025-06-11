import Image from "next/image";
import zigzagBanner from "/public/zigzag.gif";

export default function CreateBrand() {
  return (
    <div className="px-[42px] pt-[42px] pb-[42px] bg-[#fff] shadow-[0px_0px_16px_rgba(0,0,0,0.25)] flex flex-col justify-center">
      <h3 className="text-[33px] SpaceGrotesk font-bold text-companySalmon uppercase text-center">
        No solo diseñamos marcas.
      </h3>
      <h4 className="inline-block w-auto text-[24px] font-medium text-[#23194F] uppercase text-center border border-[#23194F] border-[1px] py-2 px-4 mx-auto rounded-full mb-[103px]">
        creamos marcas con alma
      </h4>
      <div className="w-full flex justify-center items-center gap-16 mb-[72px]">
        <p className="SpaceGrotesk text-[28px] text-[#fff] bg-[#23194F] p-4 text-center min-w-[500px] leading-[45px]">
          <span className="font-medium">Creatividad</span> con estrategia
          <br />
          nunca solo{" "}
          <span className="text-[21px] text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px]">
            “bonito”
          </span>
        </p>
        <p className="SpaceGrotesk text-[28px] text-[#fff] bg-[#23194F] p-4 text-center min-w-[500px] leading-[45px]">
          <span className="font-medium">Branding realista,</span> aplicable
          <br />y pensado para{" "}
          <span className="text-[21px] text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px]">
            crecer
          </span>
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-16 mb-[103px]">
        <p className="SpaceGrotesk text-[28px] text-[#fff] bg-[#23194F] p-4 text-center min-w-[500px] leading-[45px]">
          Procesos claros, <br />
          <span className="font-medium">acompañamiento </span>
          <span className="text-[21px] text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px]">
            constante
          </span>
        </p>
        <p className="SpaceGrotesk text-[28px] text-[#fff] bg-[#23194F] p-4 text-center min-w-[500px] leading-[45px]">
          <span className="font-medium">Coraje</span> para proponer.
          <br />
          <span className="text-[21px] text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px]">
            crecer
          </span>{" "}
          para conectar
        </p>
      </div>
      <div className="relative w-full hidden lg:block">
        <Image
          src={zigzagBanner}
          alt="Banner Desktop"
          className="w-full lg:max-h-[410px] xl:max-h-[500px] 2xl:max-h-[717px] object-cover"
        />
        <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[20px] text-[13px] bg-[#FFF8EA] text-[#23194F] border border-x-[12px] border-y-[8px] border-companySalmon robout uppercase hover:bg-companySalmon hover:text-[#FFF8EA] transition-all duration-300">
          Agenda una llamada con el equipo
        </button>
      </div>
    </div>
  );
}
