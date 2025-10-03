import Image from "next/image";

import realStateMainBanner from "/public/realstate/realstate-main-banner.png";
import Link from "next/link";
import ButtonEditorial from "./buttonEditorial";
import CircularCarousel from "./CircularCarousel";

export default function MainSection({ city }) {

  

  return (
    <div className="relative mt-10 bg-[#262626] flex flex-col items-start md:items-center overflow-hidden rounded-2xl p-8 md:p-16 pb-0">
      <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-[#fff] font-semibold SpaceGrotesk uppercase  md:text-center">
        El{" "}
        <span className="text-companySalmon font-semibold SpaceGrotesk">
          diseño editorial
        </span>{" "}
        hace <br className="hidden md:block" />
        que tu público
        <br className="md:hidden" /> sí quiera leer.
      </h1>
      <h2 className="text-xl md:text-lg xl:text-xl 2xl:text-2xl text-companySalmon font-medium md:text-center tracking-wide mt-4">
        Porque una buena publicación no solo se ve bonita: informa emociona y
        funciona.
      </h2>
      <h3 className="text-base 2xl:text-lg font-light text-[#fff] md:text-center mt-3">
        En La Company creamos piezas editoriales que comunican con claridad y
        carácter.
      </h3>
      <div className="inline-flex flex-col md:flex-row gap-4 justify-center md:w-full md:max-w-[730px] mt-10">
        <div className="w-full">
          <ButtonEditorial
            className="w-full"
            text="Ver ejemplos de nuestro trabajo"
            action="#projects"
          />
        </div>
        <div className="w-full">
          <ButtonEditorial
            className="w-full"
            text="Solicita una propuesta editorial"
            action={"https://wa.link/103gx5"}
            newTab
          />
        </div>
      </div>
      <CircularCarousel />
      <div className="bottom-0 left-0 w-full absolute h-[200px] bg-gradient-to-t from-[#262626] to-[rgba(0,0,0,0)] pointer-events-none"></div>
    </div>
  );
}
