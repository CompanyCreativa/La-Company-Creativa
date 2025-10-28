"use client";
import AccordionWeb from "../web/accordionWeb";

export default function FrequentQuestions() {
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
    <div className="bg-[#1D1D1D] w-full">
      <div className="flex flex-col w-full max-w-[1300px] 2xl:max-w-[1500px] mx-auto items-center py-32 gap-5 bg-[#1D1D1D] rounded-lg">
        <h2 className="text-3xl xl:text-4xl 2xl:text-6xl font-bold uppercase font-montserrat text-[#F2F1ED] leading-2">
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
    </div>
  );
}
