import Image from "next/image";
import brandingMainImage from "/public/branding/branding_main_image.png";

export default function MainSection() {
  return (
    <div className="flex justify-between ">
      <div className="pb-24">
        <h1 className="text-[24px] text-[#23194F] md:text-[40px] 2xl:text-[110px] font-semibold  text-end z-10 leading-[120px] mt-14 leading-[140px]">
          AGENCIA DE <br />
          <span className="mr-[-115px] text-outline border-[#23194F] border-[2px] rounded-full px-10">
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
      <div
        className="w-1/2 rounded-2xl "
        style={{
          backgroundImage: `url("/branding/branding_main_image.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button>Hola</button>
        <button>Hola</button>
      </div>
    </div>
  );
}
