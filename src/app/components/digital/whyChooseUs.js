import Image from "next/image";

import iconDigital1 from "/public/digital/icon-digital1.png";
import iconDigital2 from "/public/digital/icon-digital2.png";
import iconDigital3 from "/public/digital/icon-digital3.png";
import iconDigital4 from "/public/digital/icon-digital4.png";

export default function WhyChooseUs({ children }) {
  const cards = [
    {
      title: (
        <>
          <span className="font-semibold">Resultados</span> comprobados
        </>
      ),
      description: "Estrategias a la medida",
      image: iconDigital1,
      imageAlt: "iconDigital1",
    },
    {
      title: (
        <>
          Estrategias <br />a la <span className="font-semibold">medida</span>
        </>
      ),
      description: "Estrategias a la medida",
      image: iconDigital2,
      imageAlt: "iconDigital2",
    },
    {
      title: (
        <>
          Equipo{" "}
          <span className="font-semibold">
            <br />
            Especialista
          </span>
        </>
      ),
      description: "Estrategias a la medida",
      image: iconDigital3,
      imageAlt: "iconDigital3",
    },
    {
      title: (
        <>
          Experiencia en más de <span className="font-semibold">1000</span>{" "}
          campañas
        </>
      ),
      description: "Estrategias a la medida",
      image: iconDigital4,
      imageAlt: "iconDigital4",
    },
  ];

  return (
    <section className="mt-14 xl:mt-40 w-full flex flex-col lg:items-start lg:lg:pl-10">
      <div className="flex flex-col lg:flex-row gap-5 ">
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-3xl lg:text-4xl 2xl:text-5xl">
            ¿Por qué <span className="font-semibold">elegirnos?</span>
          </h3>
          <button className="w-[85%] lg:w-[80%] flex items-center justify-center mt-7 mb-10 gap-2 text-[12px] uppercase tracking-[3px] bg-[#666AAC] py-4 px-7 font-thin hover:bg-[#4E5295] transition-all duration-300 hidden lg:flex">
            Habla con un experto ahora{" "}
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
        <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:flex lg:w-2/3 lg:justify-center lg:gap-5 2xl:gap-10 2xl:ml-">
          {cards.map((card, index) => (
            <div class="relative p-3 py-6 rounded-xl bg-white/10 backdrop-blur-md text-white overflow-hidden shadow-lg shadow-black/30 border border-white/10 text-center flex flex-col items-center justify-center gap-2 lg:w-[228px]">
              <Image src={card.image} alt={card.imageAlt} />
              <p className="text-[14px] lg:text-[16px] tracking-wide">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button className="w-[85%] mx-auto flex items-center justify-center mt-7 mb-10 gap-2 text-[12px] uppercase tracking-[3px] bg-[#666AAC] py-4 px-5 font-thin  lg:hidden">
        Habla con un experto ahora{" "}
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
    </section>
  );
}
