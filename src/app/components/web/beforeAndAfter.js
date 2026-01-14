import BeforeAfterSlider from "../brandingTwo/BeforeAfterSlider";
import VerifiedIcon from "./svgComponents/verifiedIcon";

import AfterPPC from "/public/web/afterPPC.webp";
import BeforePPC from "/public/web/beforePPC.webp";
import AfterPPCMobile from "/public/web/afterPPCMobile.webp";
import BeforePPCMobile from "/public/web/BeforePPCMobile.webp";
import ButtonWeb from "./buttonWeb";

export default function BeforeAndAfter({ children }) {
  const diferences = [
    <>
      <span className="SpaceGrotesk font-semibold text-[#F55548]">
        Desarrollo 100% a medida:{" "}
      </span>{" "}
      sin plantillas genéricas, todo construido según tu marca y objetivos.
    </>,
    <>
      <span className="SpaceGrotesk font-semibold text-[#F55548]">
        Tiempos de entrega garantizados:{" "}
      </span>{" "}
      procesos claros y entregas en 3–6 semanas.
    </>,
    <>
      <span className="SpaceGrotesk font-semibold text-[#F55548]">
        UI/UX profesional incluido:{" "}
      </span>{" "}
      experiencia centrada en el usuario para aumentar interacción y conversión.
    </>,
    <>
      <span className="SpaceGrotesk font-semibold text-[#F55548]">
        Optimización desde el día 1:{" "}
      </span>{" "}
      velocidad, SEO técnico y buenas prácticas implementadas desde el inicio.
    </>,
  ];

  return (
    <>
      <div className="w-full flex flex-col max-w-[1366px] 2xl:max-w-[1500px] mx-auto py-10 xl:py-20 px-5">
        <div className="flex items-center gap-2">
          <p className="font-poppins text-[#E5E7EB] mb-2">
            Tu web puede pasar de ser un problema… a convertirse en tu mejor
            vendedor.
          </p>
          <div className="h-[1px] w-[50px] bg-[#E5E7EB] mb-2 hidden xl:block"></div>
          <div className="w-[10px] h-[10px] bg-[#F55548] rounded-full mb-2 hidden xl:block"></div>
          <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full mb-2 hidden xl:block"></div>
          <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full mb-2 hidden xl:block"></div>
        </div>
        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[#F55548] font-bold font-poppins">
          Así cambiamos la historia
          <br />{" "}
          <span className="font-poppins text-[#FF8F87]">de cada proyecto</span>
        </h2>
        <p className="SpaceGrotesk text-[#E5E7EB] mb-10">
          Cuando una web se ve desordenada, lenta o anticuada,{" "}
          <b className="font-semibold">
            tus clientes perciben lo mismo de tu marca.
          </b>{" "}
          Con nuestro proceso de rediseño,
          <br /> transformamos páginas comunes en experiencias digitales que
          generan confianza, comunican mejor y convierten mucho más.
          <br />{" "}
          <b className="font-semibold">
            Este es el antes y después de una web bien hecha.
          </b>
        </p>
        <BeforeAfterSlider
          after={AfterPPC}
          before={BeforePPC}
          afterMobile={AfterPPCMobile}
          beforeMobile={BeforePPCMobile}
          aspect="16 / 9"
        />
      </div>
      <div className="w-full flex max-w-[1366px] 2xl:max-w-[1500px] mx-auto py-10 xl:py-20 px-5 gap-10">
        <div className="border border-[#343232] rounded-xl p-5 xl:p-8 2xl:p-10 w-[55%] flex flex-col gap-5">
          <h3 className="font-poppins text-2xl text-[#F55548] font-semibold">
            ¿Qué nos diferencia?
          </h3>
          {diferences.map((difference, index) => (
            <div className="flex items-start gap-2" key={index}>
              <VerifiedIcon className="text-[#F55548]" />
              <p className="SpaceGrotesk text-[#A7A7A7]">{difference}</p>
            </div>
          ))}
        </div>
        <div className="w-[45%] flex flex-col">
          <div className="flex items-center gap-2">
            <p className="font-poppins text-[#E5E7EB] mb-2">
              Identifica lo que está frenando tu presencia digital.
            </p>
            <div className="h-[1px] w-[50px] bg-[#E5E7EB] mb-2 hidden xl:block"></div>
            <div className="w-[10px] h-[10px] bg-[#F55548] rounded-full mb-2 hidden xl:block"></div>
            <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full mb-2 hidden xl:block"></div>
            <div className="w-[10px] h-[10px] bg-[#E5E7EB] rounded-full mb-2 hidden xl:block"></div>
          </div>
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-[#F55548] font-bold font-poppins">
            Evaluación gratuita
            <br />{" "}
            <span className="font-poppins text-[#FF8F87]">de tu sitio web</span>
          </h2>
          <p className="SpaceGrotesk text-[#E5E7EB] mb-10 tracking-widest text-justify">
            Revisamos el rendimiento, la experiencia de usuario y la claridad de
            tu contenido para detectar oportunidades reales de mejora. Con este
            diagnóstico gratuito tendrás una visión clara de qué funciona, qué
            no y qué ajustes podrían ayudarte a aumentar tus conversiones y
            resultados.
          </p>
          <div className="w-full flex justify-end">
            <ButtonWeb
              text="Solicitar evaluación gratuita"
              className="w-auto"
              action={"https://wa.link/103gx5"}
              newTab
            />
          </div>
        </div>
      </div>
    </>
  );
}
