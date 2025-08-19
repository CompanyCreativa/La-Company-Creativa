"use client";
import Image from "next/image";

import DigitalHeader from "../components/digital/header";
import MainDigitalSection from "../components/digital/mainDigitalSection";

import WhyChooseUs from "../components/digital/whyChooseUs";
import DigitalServices from "../components/digital/digitalServices";
import HowWeWork from "../components/digital/howWeWork";
import Results from "../components/digital/Results";
import FormPublicidad from "../components/publicidad/formPublicidad";
import FrequentQuestions from "../components/digital/frequentQuestions";
import Reviews from "../components/digital/reviews";
import FooterDigital from "../components/digital/footerDigital";
import WppLogo from "/public/digital/wppLogo.webp";

import logoGoogle from "/public/digital/logo-google.png";
import logoMeta from "/public/digital/logo-meta.png";
import logoTiktok from "/public/digital/logo-tiktok.png";
import logoLinkedin from "/public/digital/logo-linkedin.png";

import renderPc from "/public/digital/render-pc.png";

export default function page() {
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
      title: "Anuncios creativos",
      description:
        "Diseñamos y optimizamos anuncios creativos para aumentar la visibilidad de tu marca y aumentar tus ventas.",
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
      title: "LinkedIn Ads",
      description:
        "Llega a los tomadores de decisión con campañas estratégicas en LinkedIn Ads que generan conexiones y oportunidades de negocio.",
    },
    {
      logo: logoTiktok,
      title: "TikTok Ads",
      description:
        "Llega a los tomadores de decisión con campañas estratégicas en LinkedIn Ads que generan conexiones y oportunidades de negocio.",
    },
  ];

  const weWorkPoints = [
    "Análisis inicial y auditoría de tu marca",
    "Creación de una estrategia personalizada",
    "Lanzamiento y optimización continua",
    "Informe de resultados y plan de mejoras mes a mes",
  ];

  const especialists = (
    <>
      <h3 className="text-companySalmon font-regular text-[24px] mt-2">
        Especialistas en pauta digital
      </h3>
      <p className="font-light font-montserrat text-[16px] text-[#FFF8EA] leading-[20px] tracking-large">
        Tenemos mas de 10 años de experiencia generando campañas de pauta paga
        rentables.
      </p>
    </>
  );

  const forYouPoints = [
    "Acompañamiento experto en cada paso.",
    "Estrategias probadas.",
    "Impacto real en tus resultados.",
    "Optimización constante para mejorar tu inversión.",
  ];

  const contentAccordion1 = [
    {
      title: (
        <p>
          ¿Por qué elegir a <strong>La Company Creativa?</strong>
        </p>
      ),
      description: (
        <p>
          No vendemos humo, entregamos resultados. Diseñamos estrategias
          efectivas, optimizamos cada peso de tu inversión y te mostramos
          métricas claras y medibles. Somos expertos con más de 36 años de
          experiencia y más de 1.000 campañas exitosas en sectores como
          ecommerce, salud, propiedad, raíz, educación y más.
        </p>
      ),
    },
    {
      title: <p>¿Qué es pauta digital?</p>,
      description: (
        <p>
          La publicidad pagada que se realiza en plataformas como Google Ads,
          Meta Ads (Facebook e Instagram Ads), TikTok Ads y LinkedIn Ads se
          conoce como pauta digital. Esta publicidad permite optimizar los
          anuncios para llegar a audiencias específicas y generar tráfico,
          clientes potenciales y conversiones.
        </p>
      ),
    },
    {
      title: <p>¿Cuál es la mejor plataforma para anunciar mi negocio?</p>,
      description: (
        <>
          <p>La mejor plataforma depende de tu objetivo:</p>
          <ul>
            <li>
              <strong>Google Ads:</strong> Ideal para captar clientes que buscan
              activamente tus productos o servicios.
            </li>
            <li>
              <strong>Meta Ads:</strong> Perfecto para segmentación detallada y
              remarketing.
            </li>
            <li>
              <strong>TikTok Ads:</strong>
              Recomendado para marcas con contenido visual atractivo y
              audiencias jóvenes.
            </li>
            <li>
              <strong>LinkedIn Ads:</strong> La mejor opción para publicidad B2B
              y generación de leads profesionales.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const contentAccordion2 = [
    {
      title: <p className="text">¿Cuál es la diferencia entre SEM y SEO?</p>,
      description: (
        <ul>
          <li>
            <strong>SEM (Marketing en Motores de Búsqueda):</strong> Publicidad
            pagada en buscadores, como Google Ads, para aparecer en los primeros
            resultados.
          </li>
          <li>
            <strong>SEO (Optimización en Motores de Búsqueda):</strong>
            Optimización orgánica de sitios web para mejorar su posicionamiento
            en Google sin pagar anuncios.
          </li>
        </ul>
      ),
    },
    {
      title: <p>¿Qué tipos de pauta existen?</p>,
      description: (
        <ul>
          <li>
            <strong>Anuncios de Búsqueda (Google Ads SEM):</strong> anuncios
            basados en palabras clave que aparecen en los resultados de los
            motores de búsqueda.
          </li>
          <li>
            <strong>Anuncios de Display:</strong> banners publicitarios que se
            muestran en sitios web y aplicaciones.
          </li>
          <li>
            <strong>
              Anuncios en Redes Sociales (Meta Ads, TikTok Ads, LinkedIn Ads):
            </strong>
            publicidad que se difunde a través de plataformas sociales.
          </li>
          <li>
            <strong>
              Anuncios de Video (YouTube, TikTok, Facebook e Instagram Reels):
            </strong>
            anuncios en formato de video en diversas plataformas.
          </li>
          <li>
            <strong>Remarketing:</strong> anuncios dirigidos a usuarios que
            previamente han interactuado con tu marca.
          </li>
        </ul>
      ),
    },
    {
      title: <p>¿Qué hace una agencia de pauta digital?</p>,
      description: (
        <p>
          Una agencia de pauta digital crea, optimiza y gestiona campañas en
          Google Ads, Meta Ads, TikTok Ads y LinkedIn Ads para aumentar la
          visibilidad, atraer leads y mejorar las conversiones. Utiliza
          segmentación avanzada, análisis de datos y optimización continua para
          maximizar el ROAS (Retorno de la inversión publicitaria). 🚀
        </p>
      ),
    },
  ];

  const icons = [
    {
      logo: logoGoogle,
      title: "Google Ads",
    },
    {
      logo: logoMeta,
      title: "Meta Ads",
    },
    {
      logo: logoLinkedin,
      title: "LinkedIn Ads",
    },
    {
      logo: logoTiktok,
      title: "TikTok Ads",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-noise-new mt-[-55px]">
      {/* Contenido */}
      <div className="flex flex-col justify-center items-center relative z-10 text-white px-6 md:px-10 xl:px-20 2xl:px-44">
        <DigitalHeader />
        <MainDigitalSection
          imageMain={renderPc}
          title={
            <>
              <span>
                Más clientes,
                <br className="hidden md:block" />
              </span>{" "}
              <span>
                más ventas y una{" "}
                <span className="font-semibold">
                  agencia <br className="hidden md:block" /> de pauta digital en
                  Medellín
                </span>
                <br className="hidden md:block" /> que
              </span>
              <span className="font-semibold text-companySalmon \">
                {" "}
                optimiza tu inversión
              </span>
            </>
          }
          subtitle={
            <>
              <span className="font-[500]">Agencia en Medellín experta</span> en
              estrategias de pauta digital. Menos desperdicio,{" "}
              <span className="font-[500]">más resultados.</span>
            </>
          }
          text={
            <>
              <span className="font-[500]">Potenciamos</span> tu negocio con
              campañas pagas en{" "}
              <span className="font-[500]">
                motores de búsqueda y redes sociales
              </span>{" "}
              diseñadas para vender.
            </>
          }
        />
        <WhyChooseUs />
        <DigitalServices
          city={"Medellín"}
          stepsServices={stepsServices}
          platformsServices={platformsServices}
          title="Servicios de pauta digital"
          especialists={especialists}
        />
        <HowWeWork
          weWorkPoints={weWorkPoints}
          forYouPoints={forYouPoints}
          ctaPpal="Máximiza tus resultados"
          ctaSec="Diagnóstico gratuito"
          title="No desperdicies más presupuesto"
        />
        <Results />
        <FormPublicidad city={"Medellín"} title="pauta digital" icons={icons} />
        <FrequentQuestions
          contentAccordion1={contentAccordion1}
          contentAccordion2={contentAccordion2}
        />
        <Reviews city={"Medellín"} />
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
