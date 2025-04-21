import iconDigital5 from "/public/digital/icon-digital5.png";
import Image from "next/image";

export default function HowWeWork({ children }) {
  const weWorkPoints = [
    "Análisis inicial y auditoría de tu marca",
    "Creación de una estrategia personalizada",
    "Lanzamiento y optimización continua",
    "Informe de resultados y plan de mejoras mes a mes",
  ];

  const forYouPoints = [
    "Acompañamiento experto en cada paso.",
    "Estrategias probadas.",
    "Impacto real en tus resultados.",
    "Optimización constante para mejorar tu inversión.",
  ];

  return (
    <div className="mt-14 w-full">
      <h3 className="text-[#FFF8EA] text-[32px] mb-5">
        Como <span className="font-semibold">trabajamos:</span>
      </h3>
      <div className="flex flex-col lg:flex-row gap-4 lg:justify-between">
        <div className="flex flex-col lg:w-[50%] items-start gap-4  p-4 xl:p-6 2xl:p-8 rounded-[11px] bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] ">
          <ul className="flex flex-col w-full gap-4 2xl:gap-7 bg-[#2BFFC3] bg-opacity-[0.02] rounded-[7px] border border-[#2BFFC3] border-opacity-[0.1] p-4 2xl:py-6 2xl:px-20">
            {weWorkPoints.map((point, index) => (
              <li key={index} className="relative pl-4 2xl:pl-10">
                <div className="absolute -left-[4px] top-[35%] w-3 h-3 2xl:w-4 2xl:h-4 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.7)]"></div>
                <p className="inline-flex px-3 md:px-4 xl:px-5  2xl:px-7 py-2 2xl:py-3 border border-[#2BFFC3] border-opacity-[0.1] bg-[#2BFFC3] bg-opacity-[0.02] rounded-full text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px]">
                  {point}
                </p>
              </li>
            ))}
          </ul>
          <button className="inline-flex max-w-max items-center mt-2 gap-2 text-[12px] uppercase tracking-[3px] bg-companySalmon py-4 px-7 font-thin hover:bg-[#B92A1D] transition-all duration-300 ">
            Máximiza tus resultados{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.75 1C11.75 0.585787 11.4142 0.250001 11 0.250001L4.25 0.250001C3.83579 0.250001 3.5 0.585787 3.5 1C3.5 1.41421 3.83579 1.75 4.25 1.75H10.25V7.75C10.25 8.16421 10.5858 8.5 11 8.5C11.4142 8.5 11.75 8.16421 11.75 7.75L11.75 1ZM2.03033 11.0303L11.5303 1.53033L10.4697 0.469671L0.96967 9.96967L2.03033 11.0303Z"
                fill="#FFF8EA"
              />
              <path d="M1 1L11 1L11 11" stroke="#FFF8EA" stroke-width="1.5" />
            </svg>
          </button>
        </div>
        <div className="mt-14 lg:mt-0 p-4 xl:p-6 2xl:p-8 lg:w-[40%] rounded-[11px] bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)]  flex flex-col gap-4 ">
          <div className="flex">
            <Image
              src={iconDigital5}
              alt="iconDigital1"
              className="w-7 h-7 2xl:w-10 2xl:h-10"
            />
            <h3 className="text-[#FFF8EA] text-[20px] 2xl:text-[32px] font-bold  ml-2 ">
              No desperdicies más presupuesto
              <br />
              <span className="font-regular text-[16px] font-thin  italic opacity-50">
                “Deja que los números hablen. Nosotros hacemos que crezcan.”
              </span>
            </h3>
          </div>
          <div className="w-full h-[0.6px] bg-[#FFF8EA]"></div>
          <h4 className="text-[#666AAC] text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold leading-[30px] font-thin">
            Tenemos <span className="font-bold">para ti:</span>
          </h4>
          <ul>
            {forYouPoints.map((point, index) => (
              <li key={index} className="relative pl-6 2xl:pl-7 pb-6">
                {" "}
                {/* Ajusta el padding-left según el tamaño del círculo */}
                {/* Círculo con check */}
                <div
                  className="
                absolute left-0 top-[3%] 
                w-4 h-4  rounded-full 
                border-[1px] border-white /* Borde del círculo */
                flex items-center justify-center /* Centra el check */
              "
                >
                  {/* Check (✓) */}
                  <span className="text-white text-[10px] ">✓</span>
                </div>
                {/* Contenido */}
                <p className="text-[16px] 2xl:text-[18px] font-thin">{point}</p>
              </li>
            ))}
          </ul>
          <button className="inline-flex mr-auto flex justify-center gap-2 text-[12px] uppercase tracking-[3px] bg-[#666AAC] py-4 px-7 font-thin hover:bg-[#4E5295] transition-all duration-300 py-4 px-5 font-thin ">
            Diagnóstico gratuito{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.75 1C11.75 0.585787 11.4142 0.250001 11 0.250001L4.25 0.250001C3.83579 0.250001 3.5 0.585787 3.5 1C3.5 1.41421 3.83579 1.75 4.25 1.75H10.25V7.75C10.25 8.16421 10.5858 8.5 11 8.5C11.4142 8.5 11.75 8.16421 11.75 7.75L11.75 1ZM2.03033 11.0303L11.5303 1.53033L10.4697 0.469671L0.96967 9.96967L2.03033 11.0303Z"
                fill="#FFF8EA"
              />
              <path d="M1 1L11 1L11 11" stroke="#FFF8EA" stroke-width="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
