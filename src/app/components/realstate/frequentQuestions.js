import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FrequentQuestions() {
  const questions = [
    {
      question: "¿Qué tipo de proyectos inmobiliarios manejan?",
      answer:
        "Desde VIS hasta premium, pasando por fraccionados, lotes o proyectos en pausa. (Comercio, oficinas y vivienda)",
    },
    {
      question: "¿Cómo generan los leads?",
      answer:
        "Con estrategia digital, contenido útil, pautas digitales inteligentes y mensajes bien dirigidos.",
    },
    {
      question: "¿En cuánto tiempo veo resultados?",
      answer:
        "Depende del punto de partida, pero desde el primer mes tendrás datos, análisis y ajustes.",
    },
    {
      question: "¿Qué tipo de contratación manejan?",
      answer:
        "Nos encantan los retos. Podemos trabajar por fee mensual o por servicios en específico.",
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
