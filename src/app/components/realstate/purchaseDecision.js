import Image from "next/image";

import Settings from "../SVGicons/settings";
import Ranking from "../SVGicons/ranking";

import decoration3 from "/public/realstate/decoration3.png";
import MapPointRotate from "../SVGicons/MapPointRotate";
import StarFallMinimalistic from "../SVGicons/StarFallMinimalistic";
import EyeScan from "../SVGicons/EyeScan";
import Global from "../SVGicons/Global";
import SmartHome from "../SVGicons/SmartHome";
import Link from "next/link";

export default function PurchaseDecision() {
  const points = [
    {
      icon: (
        <Settings className="text-companySalmon w-8 h-8 2xl:w-auto 2xl:h-auto" />
      ),
      text: "Diagnóstico real del proyecto",
      subtext: "(Marca y mercado)",
    },
    {
      icon: (
        <Ranking className="text-companySalmon w-8 h-8 2xl:w-auto 2xl:h-auto" />
      ),
      text: "Campañas de captación",
      subtext: "(Medibles, probadas, optimizadas)",
    },
    {
      icon: (
        <MapPointRotate className="text-companySalmon w-8 h-8 2xl:w-auto 2xl:h-auto" />
      ),
      text: "Posicionamiento y narrativa",
      subtext: "(Que diga lo que de verdad enamora)",
    },
    {
      icon: (
        <StarFallMinimalistic className="text-companySalmon w-8 h-8 2xl:w-auto 2xl:h-auto" />
      ),
      text: "Contenido y piezas que emocionan",
      subtext: "(Nada genérico)",
    },
    {
      icon: (
        <EyeScan className="text-companySalmon w-8 h-8 2xl:w-auto 2xl:h-auto" />
      ),
      text: "Propuesta de publicidad exterior",
      subtext: "(Hacemos visible tu proyecto)",
    },
    {
      icon: (
        <Global className="text-companySalmon w-8 h-8 2xl:w-auto 2xl:h-auto" />
      ),
      text: "Seguimiento y mejora continua",
      subtext: "(Esto no se deja en automático)",
    },
    {
      icon: (
        <SmartHome className="text-companySalmon w-8 h-8 2xl:w-auto 2xl:h-auto" />
      ),
      text: (
        <>
          Intervención en sala de ventas
          <br /> y zona de influencia
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full gap-12 2xl:gap-16 xl:bg-[#F7F7F7] xl:p-12 2xl:p-16">
      <div className="lg:w-2/3 relative bg-[#F7F7F7] xl:bg-transparent rounded-2xl px-6 py-8 xl:p-0">
        <h3 className="SpaceGrotesk text-4xl 2xl:text-5xl uppercase text-companySalmon font-light">
          Así llevamos
          <span className="SpaceGrotesk font-semibold"> tu proyecto </span>
          del plano...
        </h3>
        <h2 className="SpaceGrotesk text-[#23194F] text-2xl xl:text-6xl 2xl:text-7xl uppercase">
          A la decisión
          <span className="SpaceGrotesk font-semibold"> De compra.</span>
        </h2>
        <div className="w-full h-[1px] bg-[#B2B2B2] mt-4 mb-10"></div>
        <Image
          src={decoration3}
          alt="decoration"
          className="w-full lg:hidden"
        />
        <div className="flex items-center justify-center gap-4 mt-6 lg:mt-0 lg:mb-8">
          <div className="h-px w-10 bg-[#B2B2B2] 2xl:w-20" />
          <h4 className="text-[#23194F] text-[16px] xl:text-xl 2xl:text-2xl text-center whitespace-nowrap SpaceGrotesk">
            Pasos claros
          </h4>
          <div className="h-px w-10 bg-[#B2B2B2] 2xl:w-20" />
        </div>
        <div className="flex flex-col lg:grid grid-cols-2 grid-rows-4 gap-6 xl:gap-4 2xl:gap-12">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-4">
              {point.icon}
              <div>
                <h4 className="text-[#23194F] text-lg xl:text-xl 2xl:text-2xl font-semibold">
                  {point.text}
                </h4>
                <p className="text-companySalmon text-md xl:text-md 2xl:text-lg">
                  {point.subtext}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-center lg:justify-start ">
            <Link
              className="inline-block robout  px-6 py-3 mt-auto text-sm 2xl:text-lg bg-companySalmon hover:bg-[#23194F] text-[#FFF8EA] transition duration-300 ease-in-out"
              href="https://wa.link/pemtg8"
              target="_blank"
            >
              Solicita diagnóstico gratuito
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 rounded-2xl px-6 py-8 xl:p-0 hidden lg:block">
        <Image src={decoration3} alt="decoration" className="w-full" />
      </div>
    </div>
  );
}
