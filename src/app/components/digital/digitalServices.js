import Image from "next/image";

import logoGoogle from "/public/digital/logo-google.png";
import logoMeta from "/public/digital/logo-meta.png";
import logoTiktok from "/public/digital/logo-tiktok.png";
import logoLinkedin from "/public/digital/logo-linkedin.png";

export default function DigitalServices({ children }) {
  const stepsServices = [
    {
      step: "01",
      title: "Pauta digital en Meta Ads",
      description:
        "Aumenta tu visibilidad y multiplica tus ventas con campañas optimizadas para la generación de resultados.",
    },
    {
      step: "02",
      title: "Optimización y escalamiento de campañas",
      description:
        "No basta con lanzar anuncios, hay que hacerlos rentables. Analizamos y optimizamos cada campaña en Meta y Google Ads para reducir costos y aumentar conversiones.",
    },
    {
      step: "03",
      title: "Anuncios Creativos",
      description:
        "Disenamos y optimizamos anuncios creativos para aumentar la visibilidad de tu marca y aumentar tus ventas.",
    },
  ];

  const platformsServices = [
    {
      logo: logoGoogle,
      title: "Google Ads",
      description:
        "Lleva tu negocio a la audiencia correcta y maximiza tu ROI con campañas efectivas en Google Ads.",
    },
    {
      logo: logoMeta,
      title: "Meta Ads",
      description:
        "Aprovecha el poder de Meta Ads para conectar, convertir y fidelizar a tu audiencia en redes sociales.",
    },
    {
      logo: logoLinkedin,
      title: "Linkedin Ads",
      description:
        "Llega a los tomadores de decisión con campañas estratégicas en LinkedIn Ads que generan conexiones y oportunidades de negocio.",
    },
    {
      logo: logoTiktok,
      title: "Tiktok Ads",
      description:
        "Llega a los tomadores de decisión con campañas estratégicas en LinkedIn Ads que generan conexiones y oportunidades de negocio.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-14 xl:mt-40 w-full lg:px-32 mx-[-10] lg:mx-[-20] w-screen">
      <div>
        {stepsServices.map((service, index) => (
          <div
            key={index}
            className={`${
              index === 1
                ? "bg-gradient-to-r from-[rgba(43,255,195,0.2)] to-[rgba(43,255,195,0.0)]"
                : ""
            } py-3 px-6`}
          >
            <p
              className={`${
                index === 1 ? "text-[#FFF8EA]" : "text-[#5d5d5e]"
              } font-thin font-montserrat text-[17px] leading-[30px]`}
            >
              {service.step}
            </p>
            <h4 className="font-regular text-[20px] mb-2">{service.title}</h4>
            <p className="font-light font-montserrat text-[14px] text-[#FFF8EA] leading-[20px] tracking-large">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-10">
        {platformsServices.map((service, index) => (
          <div className="bg-[rgba(43,255,195,0.02)]">
            <h3 className="font-montserrat text-[18px]">
              <Image src={service.logo} alt="iconDigital1" />
              {service.title}
            </h3>
            <p>{service.description}</p>
          </div>
        ))}
        <h3>Especialistas en pauta digital</h3>
        <p>
          Tenemos mas de 10 años de experiencia generando campañas de pauta paga
          rentables.
        </p>
        <button>
          Explora nuestros servicios{" "}
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
  );
}
