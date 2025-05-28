"use client";
import Image from "next/image";

import DigitalHeader from "../components/digital/header";
import MainDigitalSection from "../components/digital/mainDigitalSection";

import WhyChooseUs from "../components/digital/whyChooseUs";
import DigitalServices from "../components/digital/digitalServices";
import HowWeWork from "../components/digital/howWeWork";
import Results from "../components/digital/Results";
import FormDigital from "../components/digital/formDigital";
import FrequentQuestions from "../components/digital/frequentQuestions";
import Reviews from "../components/digital/reviews";
import FooterDigital from "../components/digital/footerDigital";
import WppLogo from "/public/digital/wppLogo.webp";

import pencilIcon from "/public/digital/paintpencil.png";
import cameraIcon from "/public/digital/camera.png";
import cellphoneIcon from "/public/digital/phone.png";
import adobeLogo from "/public/digital/adobe.png";
import figmaLogo from "/public/digital/figma.png";
import metricoolLogo from "/public/digital/metricool.png";
import makeLogo from "/public/digital/make.png";

import hearthDigital from "/public/digital/hearthDigital.png";

export default function page() {
  const stepsServices = [
    {
      step: "01",
      title: "Estrategia & concepto creativo",
      description:
        "Desarrollamos el pensamiento detrás de cada marca: su tono, su promesa y su narrativa.",
    },
    {
      step: "02",
      title: "Pauta & medios digitales",
      description:
        "Maximizamos la visibilidad con segmentación, performance y resultados claros.",
    },
    {
      step: "03",
      title: "Activaciones & experiencias",
      description:
        "Creamos momentos que acercan a las marcas con su comunidad de forma real y memorable.",
    },
  ];

  const platformsServices = [
    {
      logo: pencilIcon,
      title: "Diseño & contenido",
      description:
        "Creamos piezas que conectan: desde lo visual hasta lo que se dice y cómo se dice.",
    },
    {
      logo: cameraIcon,
      title: "Producción audiovisual",
      description:
        "Videos, animaciones, campañas gráficas o reels: el contenido se ve, se oye y se vive.",
    },
    {
      logo: cellphoneIcon,
      title: "Social Media & contenido digital",
      description:
        "Diseñamos estrategias para redes que hablan el idioma de la audiencia, sin perder la esencia de la marca.",
    },
  ];

  const weWorkPoints = [
    "Auditoría y análisis real de tu marca",
    "Estrategia creativa y personalizada",
    "Implementación conectada entre canales",
    "Optimización continua con foco en impacto",
    "Reportes que se entienden y planes que mejoran en serio",
  ];

  const forYouPoints = [
    "Acompañamiento experto en cada paso.",
    "Creatividad con propósito.",
    "Resultados medibles y accionables.",
    "Pasión por tu marca como si fuera nuestra.",
  ];

  const contentAccordion1 = [
    {
      title: (
        <p>
          ¿Por qué elegir a LaCompany Creativa? como tu{" "}
          <strong>agencia de publicidad?</strong>
        </p>
      ),
      description: (
        <p>
          Porque no hacemos lo mismo de siempre. Creamos estrategias con
          sentido, creatividad y resultados reales. Te acompañamos con visión,
          ejecución y corazón.
        </p>
      ),
    },
    {
      title: (
        <p>
          ¿Qué hace una <strong>agencia de publicidad</strong> hoy?
        </p>
      ),
      description: (
        <p>
          Más que campañas. Una <strong>agencia de publicidad</strong> moderna
          piensa la marca desde su esencia y la lleva a conectar con su
          audiencia desde todos los frentes: digital, físico, estratégico y
          emocional.
        </p>
      ),
    },
    {
      title: (
        <p>
          ¿Qué servicios ofrece una <strong>agencia de publicidad?</strong>
        </p>
      ),
      description: (
        <p>
          Desde estrategia creativa, branding, diseño, contenido y social media,
          hasta producción audiovisual, pauta digital y experiencias de marca.
          Todo en un mismo equipo.
        </p>
      ),
    },
  ];

  const contentAccordion2 = [
    {
      title: (
        <p>
          ¿Qué diferencia a una <strong>agencia de publicidad</strong> como La
          Company de otras agencias?
        </p>
      ),
      description: (
        <p>
          La mirada integral. No nos enfocamos solo en piezas o canales, sino en
          construir una estrategia que conecte todo: marca, mensaje, audiencia y
          resultados. Pensamos en grande, pero bajamos todo a tierra con
          estructura, creatividad y propósito.
        </p>
      ),
    },
    {
      title: (
        <p>
          ¿Cómo sé si necesito una <strong>agencia de publicidad?</strong>
        </p>
      ),
      description: (
        <p>
          Si sientes que tu marca está haciendo mucho, pero conectando poco, o
          si no tienes claridad sobre cómo se ve tu comunicación desde afuera…
          este es el momento.
        </p>
      ),
    },
    {
      title: (
        <p>
          ¿Cuánto cuesta trabajar con una{" "}
          <strong>agencia de publicidad?</strong>
        </p>
      ),
      description: (
        <p>
          Depende de tu necesidad y tu alcance. Pero lo que sí te prometemos:
          cada peso invertido tiene una estrategia detrás y un propósito claro.
        </p>
      ),
    },
  ];

  const icons = [
    {
      logo: adobeLogo,
      title: "Suite de Adobe",
      description: "(Diseño)",
    },
    {
      logo: figmaLogo,
      title: "Figma",
      description: "(Diseño Web)",
    },
    {
      logo: metricoolLogo,
      title: "Metricool",
      description: "(Redes Sociales)",
    },
    {
      logo: makeLogo,
      title: "Make",
      description: "(Automatización de procesos)",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-noise-new mt-[-55px]">
      {/* Contenido */}
      <div className="flex flex-col justify-center items-center relative z-10 text-white px-6 md:px-10 xl:px-20 2xl:px-44">
        <DigitalHeader />
        <MainDigitalSection
          imageMain={hearthDigital}
          title={
            <>
              <span>
                Somos la{" "}
                <span className="font-semibold">
                  agencia <br className="hidden md:block" /> de publicidad en
                  Medellín
                </span>
                <br className="hidden md:block" /> que convierte
              </span>
              <span className="font-semibold text-companySalmon \">
                {" "}
                ideas en impacto
              </span>
            </>
          }
          subtitle={
            <>
              <span className="font-[500]">
                Agencia en Medellín dónde diseñamos
              </span>{" "}
              estrategias completas con coraje y corazón.
              <br /> Desde la idea creativa hasta la pauta...{" "}
              <span className="font-[500]">y mucho más.</span>
            </>
          }
          text={
            <>
              Somos una agencia de{" "}
              <span className="font-[500]">publicidad</span> que entiende que
              una buena idea solo funciona cuando tiene propósito, estrategia y
              alma.
            </>
          }
        />
        <WhyChooseUs />
        <DigitalServices
          city={"Medellín"}
          stepsServices={stepsServices}
          platformsServices={platformsServices}
          title="Servicios destacados"
        />
        <HowWeWork
          weWorkPoints={weWorkPoints}
          forYouPoints={forYouPoints}
          ctaPpal="Hablemos de cómo llevar tu marca a otro nivel"
          ctaSec="Solicita tu diagnóstico gratuito"
          title="No desperdicies más presupuesto"
          quota="“Hacemos que las ideas conecten con las personas y que cada peso invertido se traduzca en valor real.”"
        />
        <Results />
        <FormDigital city={"Medellín"} title="publicidad" icons={icons} />
        <FrequentQuestions
          contentAccordion1={contentAccordion1}
          contentAccordion2={contentAccordion2}
        />
        <Reviews city={"Medellín"}/>
        <FooterDigital />
        <a href="https://wa.me/573148629805" target="_blank">
          <Image
            src={WppLogo}
            alt="WppLogo"
            className="fixed bottom-4 right-4 w-14 h-14 2xl:w-20 2xl:h-20 hover:scale-110 transition-transform duration-300"
            priority={true}
          />
        </a>
      </div>
    </div>
  );
}
