import Image from "next/image";

import realStateMainBanner from "/public/realstate/realstate-main-banner.png";
import Link from "next/link";
import ButtonEditorial from "./buttonEditorial";
import CircularCarousel from "./CircularCarousel";

export default function MainSection({ city }) {
  return (
    <div className="relative mt-20 bg-[#262626] flex flex-col items-center overflow-hidden">
      <h1>
        El <span>diseño editorial</span> hace <br />
        que tu público sí quiera leer.
      </h1>
      <h2>
        Porque una buena publicación no solo se ve bonita: informa emociona y
        funciona.
      </h2>
      <h3>
        En La Company creamos piezas editoriales que comunican con claridad y
        carácter.
      </h3>
      <div className="inline-flex flex-col md:flex-row gap-4 justify-center w-full max-w-[700px] ">
        <div className="w-full">
          <ButtonEditorial className="w-full" text="Nuestro trabajo" />
        </div>
        <div className="w-full">
          <ButtonEditorial
            className="w-full"
            text="Solicita una propuesta editorial"
          />
        </div>
      </div>
      <CircularCarousel />
      <div className="bottom-0 w-full absolute h-[200px] bg-gradient-to-t from-[#262626] to-[rgba(0,0,0,0)] pointer-events-none"></div>
    </div>
  );
}
