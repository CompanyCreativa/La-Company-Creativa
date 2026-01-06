import Image from "next/image";
import decorationEight from "/public/web/decorationEight.webp";
import SquareDotSVG from "./svgComponents/squareDotSVG";
import SwiperTestimonials from "./swiperTestimonials";

export default function VideoWeb({ children }) {
  return (
    <div className="relative w-full">
      <div className="flex flex-col md:flex-row w-full max-w-[1300px] 2xl:max-w-[1500px] mx-auto items-start px-5 py-10 xl:py-20 gap-10">
        <div className="flex flex-col">
          <div className="flex">
            <h2 className="text-3xl xl:text-4xl 2xl:text-6xl text-[#E5E7EB] font-bold font-poppins mb-10 text-[#F55548] xl:text-[#FF8F87] leading-2">
              Mira
              <div
                alt="decoration"
                className="bg-[url('/web/decorationNine.webp')] bg-cover bg-center h-12 rounded-full w-40 inline-block grayscale text-[16px] relative top-2 ml-2 group hover:bg-blend-darken transition-all duration-300 ease-in-out hover:bg-black/50 bg-black/0 hidden md:inline-block"
              >
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 font-poppins text-[#E5E7EB] font-light group-hover:opacity-100 transition duration-300 ease-in-out select-none ">
                  Escríbenos
                </p>
              </div>{" "}
              <span className="font-poppins text-[#F55548] leading-tight">
                cómo hacemos
                <br /> que las páginas web cobren vida.
              </span>
            </h2>
            <div className="flex items-start ml-3 mt-10 gap-2">
              <div className="h-[1px] w-[50px] bg-[#E5E7EB] mb-2 hidden xl:block"></div>
              <div className="w-[10px] h-[10px] bg-[#F55548] rounded-full -mt-1 hidden xl:block"></div>
              <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full -mt-1 hidden xl:block"></div>
              <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full -mt-1 hidden xl:block"></div>
            </div>
          </div>
          <p className="SpaceGrotesk md:text-lg font-light  z-10 text-[#E5E7EB] ">
            No hay nada como ver las ideas en acción. Aquí te mostramos algunos
            de los proyectos digitales que hemos diseñado y desarrollado, donde
            la creatividad se mezcla con la estrategia para lograr páginas web
            que inspiran y funcionan.
          </p>
        </div>
      </div>
    </div>
  );
}
