import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FrequentQuestions() {
  const questions = [
    {
      question: "¿Que incluye un proceso de branding completo?",
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
    <div className="flex flex-col items-center">
      <h2 className="text-3xl xl:text-4xl 2xl:text-5xl SpaceGrotesk font-bold text-[#23194F] uppercase text-center mb-12">
        Preguntas frecuentes
      </h2>
      <div className="xl:max-w-[1000px] 2xl:max-w-[1200px] w-full flex flex-col gap-8">
        {questions.map((question, index) => (
          <Accordion className="bg-[#fff] shadow-[0px_0px_16px_rgba(0,0,0,0.25)]">
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className="text-[30px] md:text-[40px] xl:text-[50px] text-companySalmon" />
              }
              className="SpaceGrotesk font-medium text-companySalmon transition-colors duration-300 ease-in-out [&.Mui-expanded]:text-red-500 tracking-wider text-[16px] xl:text-2xl 2xl:text-3xl px-3 xl:py-4 xl:px-8 2xl:py-5 2xl:px-10"
            >
              {question.question}
            </AccordionSummary>
            <AccordionDetails className="text-[#23194F] text-md xl:text-lg 2xl:text-2xl xl:-mt-[30px] px-[30px]">
              {question.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
