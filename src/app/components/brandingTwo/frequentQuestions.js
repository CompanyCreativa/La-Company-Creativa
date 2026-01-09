"use client";
import AccordionWeb from "../web/accordionWeb";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Paco from "/public/branding/paco.png";
import Moss from "/public/branding/moss.png";
import DF from "/public/branding/df.png";
import IA from "/public/branding/ia.png";
import Zigzag from "/public/branding/zigzag.png";
import Minipet2 from "/public/branding/minipet2.png";

export default function FrequentQuestions() {
  const logos = [Paco, Moss, DF, IA, Zigzag, Minipet2];

  const questions = [
    {
      question: "¿Qué incluye un proceso de branding completo?",
      answer:
        "Todo lo necesario para que tu marca hable claro y con estilo: nombre (si lo necesitas), concepto estratégico, identidad visual, sistema gráfico, brandbook y aplicaciones clave.",
    },
    {
      question: "¿Cuánto tiempo toma crear una marca desde cero?",
      answer:
        "Entre 4 a 6 semanas. Depende del alcance, pero aquí no corremos por correr. Lo hacemos bien, contigo a bordo.",
    },
    {
      question: "¿Qué pasa si ya tengo un logo pero quiero mejorar?",
      answer:
        "Lo revisamos con lupa. Si hay algo que vale la pena conservar, lo rescatamos. Si no, lo rediseñamos con todo el amor (y sentido) del mundo.",
    },
    {
      question: "¿Puedo contratar solo el brandbook?",
      answer:
        "Claro, pero solo si ya tienes una identidad sólida. Si no, lo mejor es construir todo el sistema desde la base. Así hablamos el mismo idioma visual desde el inicio.",
    },
    {
      question: "¿Me entregan todos los archivos listos para usar?",
      answer:
        "Sí, todos los archivos finales, organizados y listos para que puedas aplicar tu marca sin drama (y sin tener que pedir favores al diseñador cada semana).",
    },
  ];
  return (
    <div className="bg-[#1D1D1D] w-full px-4">
      <div className="flex flex-col w-full max-w-[1300px] 2xl:max-w-[1500px] mx-auto items-center py-32 gap-5 bg-[#1D1D1D] rounded-lg">
        <h2 className="text-3xl xl:text-4xl 2xl:text-6xl font-bold uppercase font-montserrat text-[#F2F1ED] leading-2 text-center xl:text-start">
          preguntas frecuentes
        </h2>
        <div className="flex flex-col md:grid grid-cols-2 gap-5">
          {questions.map((question, index) => (
            <AccordionWeb
              key={index}
              title={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center max-w-[1300px] 2xl:max-w-[1500px] mx-auto">
        <h4 className="SpaceGrotesk font-bold text-[#F2F1ED] text-center">
          Empresas y proyectos que han confiado en nuestro trabajo.
        </h4>
        <h3 className="robout font-bold text-center text-companySalmon text-[28px] mt-2">
          Marcas que han sido parte de nuestro camino
        </h3>
        {/* DESKTOP: layout normal */}
        <div className="hidden md:flex w-full flex-row items-center gap-4 2xl:gap-8 justify-center py-20">
          {logos.map((logo, i) => (
            <Image key={i} src={logo} alt={`Logo ${i}`} />
          ))}
        </div>

        {/* MOBILE: carousel */}
        <div className="block md:hidden py-20 w-full">
          <Swiper spaceBetween={0} slidesPerView={2.5} loop={true}>
            {logos.map((logo, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <div className="w-[140px] h-[120px] relative">
                  <Image
                    src={logo}
                    alt={`Logo ${i}`}
                    fill
                    className="object-contain rounded-lg"
                    sizes="200px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
