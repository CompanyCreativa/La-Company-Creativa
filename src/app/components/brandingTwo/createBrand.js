"use client";
import Arrow from "../SVGicons/arrow";

export default function CreateBrand() {
  const handleClick = () => {
    window.open("https://wa.link/103gx5", "_blank"); // 👉 abre en otra pestaña
  };

  const className = "";
  return (
    <div className="w-full xl:max-w-[1300px] 2xl:max-w-[1500px] flex flex-col justify-center items-start relative bg-[#F2F1ED]">
      <h3 className="w-1/3 flex justify-between">
        <span className="SpaceGrotesk font-bold text-[#1D1D1D]">
          ¿Por qué elegirnos?
        </span>
        <span className="SpaceGrotesk font-bold text-[#1D1D1D]"> (05)</span>
      </h3>
      <div className="w-1/3 h-[1px]  mt-1 mb-5 bg-[#1D1D1D]"></div>
      <h4 className="font-montserrat text-2xl font-bold uppercase text-companySalmon">
        No solo diseñamos marca
      </h4>
      <h2 className="font-montserrat text-7xl font-bold tracking-wide uppercase text-[#1D1D1D]">
        creamos marca <br />
        con alma
      </h2>
      <div className="w-full grid grid-cols-4 grid-rows-1 justify-center items-center gap-10 xl:gap-10 mt-16 mx-[8px]">
        <p className="font-montserrat text-[22px] xl:text-xl text-[#fff] bg-[#1D1D1D] py-6 px-3 text-center w-full lg:max-w-[500px] leading-[45px] border border-[#F2F1ED] border-[1px] outline outline-[#1D1D1D] outline-[8px] rounded-md">
          <span className="font-bold font-montserrat">Creatividad </span>
          con estrategia <br /> nunca solo{" "}
          <span className="text-[16px] xl:text-[18px] 2xl:text-lg text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px] SpaceGrotesk">
            bonito
          </span>
        </p>
        <p className="font-montserrat text-[22px] xl:text-xl text-[#fff] bg-[#1D1D1D] py-6 px-3 text-center w-full lg:max-w-[500px] leading-[45px] border border-[#F2F1ED] border-[1px] outline outline-[#1D1D1D] outline-[8px] rounded-md">
          <span className="font-bold font-montserrat">Branding realista, </span>
          aplicable <br /> y pensado para{" "}
          <span className="text-[16px] xl:text-[18px] 2xl:text-lg text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px] SpaceGrotesk">
            crecer
          </span>
        </p>
        <p className="font-montserrat text-[22px] xl:text-xl text-[#fff] bg-[#1D1D1D] py-6 px-3 text-center w-full lg:max-w-[500px] leading-[45px] border border-[#F2F1ED] border-[1px] outline outline-[#1D1D1D] outline-[8px] rounded-md">
          Procesos claros, <br />
          <span className="font-bold font-montserrat">acompañamiento </span>
          <span className="text-[16px] xl:text-[18px] 2xl:text-lg text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px] SpaceGrotesk">
            constante
          </span>
        </p>

        <p className="font-montserrat text-[22px] xl:text-xl text-[#fff] bg-[#1D1D1D] py-6 px-3 text-center w-full lg:max-w-[500px] leading-[45px] border border-[#F2F1ED] border-[1px] outline outline-[#1D1D1D] outline-[8px] rounded-md">
          <span className="font-bold font-montserrat">Coraje </span>
          para proponer <br />{" "}
          <span className="text-[16px] xl:text-[18px] 2xl:text-lg text-companySalmon rounded-full border border-companySalmon border-[1px] uppercase py-[3px] px-[8px] SpaceGrotesk">
            bonito
          </span>{" "}
          para conectar
        </p>
      </div>
      <div className="w-full items-center flex justify-center mt-20">
        <button
          className={`flex text-sm md:text-base 2xl:text-lg font-light items-center gap-5 robout text-[#FFFFFF] bg-[#1D1D1D] px-4 py-2 rounded-full group ${className} overflow-hidden border border-white/10  shadow-[0_12px_40px_rgba(8,15,30,0.55)] relative `}
          onClick={handleClick}
        >
          <p className="flex-1 ml-5 text-center font-[400]">
            Solicita diagnóstico gratuito
          </p>
          <div className="relative bg-[#FFFFFF] w-8 h-8 flex items-center justify-center rounded-full ">
            <Arrow className="text-[#353535] z-10" />
            <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in-out group-hover:h-full rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
