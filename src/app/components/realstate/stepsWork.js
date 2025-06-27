import Image from "next/image";

import naming from "/public/branding/naming.png";
import concepto from "/public/branding/concepto.png";
import identidad from "/public/branding/identidad.png";
import sistema from "/public/branding/sistema.png";
import brandbook from "/public/branding/brandbook.png";
import voz from "/public/branding/voz.png";
import aplicaciones from "/public/branding/aplicaciones.png";

export default function StepsWork({ city }) {
  const services = [
    {
      image: naming,
      title: (
        <>
          Naming
          <br />
          creativo
        </>
      ),
      description: "Creamos nombres que resuenan Tu marca, inolvidable.",
    },
    {
      image: concepto,
      title: (
        <>
          Concepto
          <br />
          estratégico
        </>
      ),
      description: "La idea maestra de tu marca. Impactante y memorable.",
    },
    {
      image: identidad,
      title: (
        <>
          Identidad
          <br />
          visual
        </>
      ),
      description:
        "Tu esencia convertida en diseño que cautiva. Creamos la cara de tu marca para que brille.",
    },
    {
      image: sistema,
      title: (
        <>
          Sistema
          <br />
          gráfico
        </>
      ),
      description:
        "Reglas claras, impacto visual impecable. Tu marca, siempre profesional y reconocible.",
    },
    {
      image: brandbook,
      title: (
        <>
          Brandbook
          <br />
          completo
        </>
      ),
      description:
        "La guía maestra de tu marca. Aseguramos la coherencia y el impacto en cada aplicación.",
    },
    {
      image: voz,
      title: (
        <>
          Voz y tono
          <br />
          de marca
        </>
      ),
      description:
        "Definimos cómo suena tu marca. Una voz única que conecta y resuena con tu audiencia.",
    },
    {
      image: aplicaciones,
      title: (
        <>
          Aplicaciones
          <br />
          de marca
        </>
      ),
      description: "papelería, redes, empaques, espacios",
    },
  ];

  return (
    <section className="flex flex-col justify-center gap-4">
      <h4 className="inline-block w-auto text-[24px] xl:text-[20px] 2xl:text-[24px] font-medium text-companySalmon uppercase text-center border border-companySalmon border-[1px] px-2 py-1 xl:py-2 xl:px-4 mx-auto rounded-full SpaceGrotesk">
        agencia de Branding en {city}
      </h4>
      <h3 className="text-[28px] xl:text-[29px] 2xl:text-[33px] SpaceGrotesk font-bold text-[#23194F] uppercase text-center">
        que construye marca, <br className="lg:hidden" />
        <span className="font-light">no solo apariencia.</span>
      </h3>
      <div className="flex flex-col lg:grid grid-cols-4 justify-between w-full bg-[#23194F] p-[42px] xl:p-[50px] 2xl:p-[105px] gap-10 2xl:gap-20">
        {services.map((service) => (
          <div
            className="flex flex-col gap-1 xl:gap-2 2xl:gap-3"
            key={service.description}
          >
            <Image
              src={service.image}
              alt={service.description}
              className="w-[35px] xl:w-[40px] 2xl:w-[50px]"
            />
            <h3 className="text-[28px] xl:text-[29px] 2xl:text-[33px] font-semibold text-[#fff8ea] text-left mt-3 SpaceGrotesk ">
              {service.title}
              <span className="text-companySalmon font-bold">.</span>
            </h3>
            <div className="w-full h-[1px] bg-[#fff8ea] mt-2"></div>
            <p className="text-[16px] font-light text-[#fff8ea] text-left mt-2">
              {service.description}
            </p>
          </div>
        ))}
        <div className="flex flex-col gap-3 justify-center">
          <button className="px-[13px] py-[20px] text-[14px] xl:text-[13px] bg-companySalmon xl:bg-[#FFF8EA] text-[#FFF8EA] xl:text-[#23194F] xl:border xl:border-x-[12px] xl:border-y-[8px] border-companySalmon robout uppercase hover:bg-companySalmon hover:text-[#FFF8EA] transition-all duration-300  lg:robout">
            Solicita diagnóstico gratuito
          </button>
        </div>
      </div>
    </section>
  );
}
