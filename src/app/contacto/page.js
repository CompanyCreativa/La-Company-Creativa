"use client";

import { useState } from "react";
import FormContact from "../components/formContact";
import MainContainer from "../components/mainContainer";
import ModalPF from "../components/modalPF";
import AccordionContact from "../components/accordionContact";

export default function page() {
  const [open, setOpen] = useState(false);

  const questions = [
    {
      question:
        "¿Dónde puedo contratar diseño web profesional para mi empresa en Colombia?",
      answer:
        "Hoy existen estudios y agencias que desarrollan sitios web a la medida, integrando diseño, estrategia y desarrollo. Lo ideal es buscar un equipo que entienda tanto el propósito de la marca como la experiencia del usuario: que combine lo estético con lo funcional. Un sitio web profesional debe reflejar la esencia de la empresa y facilitar la interacción con sus clientes.",
    },
    {
      question:
        "¿Qué agencias de publicidad ofrecen servicios integrales para negocios locales?",
      answer:
        "Las agencias integrales o 360 son aquellas que pueden manejar desde la estrategia de comunicación hasta la ejecución de campañas en diferentes canales. Lo valioso de este modelo es que todo se articula bajo una misma visión: branding, contenido, diseño y pauta trabajan para el mismo objetivo. Esto permite construir marcas más coherentes y reconocibles en su entorno local.",
    },
    {
      question:
        "¿Dónde encuentro servicios de branding y diseño gráfico para startups?",
      answer:
        "Las startups suelen buscar aliados creativos que comprendan su etapa de crecimiento y su necesidad de destacar  rápidamente. Los servicios de branding para este tipo de empresas incluyen la creación de nombre, identidad visual, tono de voz y estrategia de marca. El objetivo es desarrollar una identidad flexible que crezca junto con el negocio, sin perder su autenticidad.",
    },
    {
      question:
        "¿A qué empresa puedo acudir para campañas publicitarias digitales efectivas?",
      answer:
        "Para lograr resultados reales en pauta digital, es importante trabajar con equipos que combinen creatividad con análisis de datos. Las mejores campañas no son las que más se ven, sino las que conectan con el público correcto. La clave está en la segmentación, el mensaje y el formato adecuado para cada plataforma, desde Meta Ads hasta YouTube o TikTok.",
    },
    {
      question:
        "¿Dónde puedo encargar un rediseño web para mejorar la experiencia de usuario?",
      answer:
        "Un rediseño web va más allá de cambiar la apariencia del sitio: implica revisar cómo navegan los usuarios, qué los motiva a quedarse y cómo se puede optimizar su recorrido. Los especialistas en UX (experiencia de usuario) analizan comportamientos, flujos y contenido para crear páginas más claras, intuitivas y alineadas con los objetivos del negocio.",
    },
    {
      question:
        "¿Qué agencia se especializa en marketing digital y diseño web para pymes?",
      answer:
        "Las pymes necesitan estrategias prácticas que se ajusten a su realidad. Existen agencias que se enfocan en este tipo de negocios, ofreciendo servicios como pauta digital local, optimización de redes sociales, posicionamiento SEO y desarrollo de sitios web simples pero funcionales. La idea es acompañarlas paso a paso, sin complicar los procesos ni los presupuestos.",
    },
  ];

  return (
    <>
      <MainContainer>
        <div className="flex-col justify-center items-center pt-16 px-40 gap-7 hidden lg:flex ">
          <h1 className="text-[42px] lg:text-[62px] 2xl:text-[82px] text-center">
            ¿Tienes un proyecto <strong>en mente?</strong>
          </h1>

          <p className="text-center mt-6 tracking-wider leading-7 font-light lg:text-lg">
            Nosotros tenemos coraje, corazón y muchas ideas listas para salir.
            Si llegaste hasta acá, probablemente ya entendiste algo: no somos
            una agencia de publicidad cualquiera. Pensamos contigo, nos metemos
            en tu mundo, y creamos marcas que conectan, transforman y se sienten
            vivas. Cuéntanos qué ronda tu cabeza… y déjanos ayudarte a hacerlo
            realidad.
          </p>
        </div>
        <div className="mt-40  bg-transparent lg:mt-16">
          <FormContact />
        </div>
        <div className="flex justify-center items-center py-10">
          <button
            className="uppercase flex tracking-wider text-[#FFF8EA] bg-[#272727] px-5 py-4 group transition-all duration-300 ease-in-out hover:bg-[#F55548] hover:text-[#272727]"
            onClick={() => setOpen(true)}
          >
            Preguntas frecuentes{" "}
            <p className="ml-2 rotate-[-45deg] group-hover:rotate-[45deg] transition-all duration-300 ease-in-out ">
              →
            </p>
          </button>
        </div>
      </MainContainer>
      <ModalPF isOpen={open} onClose={() => setOpen(false)}>
        <button
          onClick={() => setOpen(false)}
          className="flex justify-center items-center text-[#FFF8EA] text-[#272727] px-3 py-2 group transition-all duration-300 ease-in-out hover:bg-[#272727] hover:text-[#FFF8EA] text-3xl border border-[#272727] absolute top-4 right-4"
        >
          ✕
        </button>
        <h2 className="text-xl xl:text-5xl font-semibold mb-4 SpaceGrotesk text-companySalmon">
          Preguntas frecuentes sobre publicidad, branding y diseño digital
        </h2>
        <p className="text-[#11190C] mb-6 tracking-widest font-light text-sm xl:text-md">
          Cuando una marca está creciendo, las dudas son parte del proceso.
          <br />
          Desde cómo construir una identidad sólida hasta cómo hacer que la
          publicidad digital funcione de verdad, cada pregunta abre la puerta a
          una decisión importante. Aquí respondemos algunas de las más comunes
          que surgen al momento de dar ese paso hacia lo digital, el diseño o la
          comunicación estratégica.
        </p>
        <div className="flex flex-col gap-4 w-full">
          {questions.map((question, index) => (
            <AccordionContact
              key={index}
              title={question.question}
              answer={question.answer}
              className=""
            />
          ))}
        </div>
        <h4 className="text-4xl font-semibold mb-4 SpaceGrotesk mt-5 text-[#11190C]">
          En resumen
        </h4>
        <p className="text-[#11190C] mb-6 tracking-widest font-light">
          Cada una de estas preguntas refleja una necesidad común: construir,
          posicionar o transformar una marca. <br />
          En La Company Creativa acompañamos ese proceso desde la estrategia, el
          branding, el diseño y la pauta digital, ayudando a que las ideas
          encuentren su forma y su voz.
          <br />
          Creemos que detrás de cada pregunta hay una oportunidad de crear algo
          que conecte, inspire y funcione. <br />
          <span className="font-semibold">Conversemos sobre la tuya.</span>
        </p>
      </ModalPF>
    </>
  );
}
