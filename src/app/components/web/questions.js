import AccordionWeb from "./accordionWeb";

export default function Questions({ children }) {
  const questions = [
    {
      question: "¿Qué tipos de páginas web diseñan?",
      answer:
        "Desde landing pages hasta sitios corporativos y ecommerce completos. Todo depende de lo que tu negocio necesite.",
    },
    {
      question: "¿Qué pasa con el SEO?",
      answer:
        "No solo diseñamos bonito: optimizamos tu página para buscadores, cuidando velocidad, estructura y contenido para que tengas visibilidad real.",
    },
    {
      question: "¿En cuánto tiempo entregan una página web?",
      answer:
        "Según la complejidad: una landing page puede estar lista en semanas, mientras que un ecommerce robusto toma más tiempo. Siempre trabajamos con cronogramas claros.",
    },
    {
      question: "¿Trabajan solo en Medellín?",
      answer:
        "No. Creamos páginas web para marcas en Medellín, Bogotá y cualquier lugar de Colombia (y más allá).",
    },
    {
      question: "¿Las páginas web son administrables?",
      answer:
        "Sí. Diseñamos sitios autogestionables para que tú mismo puedas actualizar textos, imágenes o productos fácilmente.",
    },
    {
      question: "¿Qué necesito para empezar mi página web?",
      answer:
        "Solo tu idea, logo, fotos y la información principal de tu negocio. Si no tienes todo, te ayudamos a estructurarlo.",
    },
  ];
  return (
    <div className="flex flex-col w-full max-w-[1300px] 2xl:max-w-[1500px] mx-auto items-center px-5 py-20 gap-5">
      <h2 className="text-3xl xl:text-4xl 2xl:text-6xl text-[#E5E7EB] font-bold font-poppins text-[#F55548] leading-2">
        ¿Tienes dudas?
      </h2>
      <p className="SpaceGrotesk md:text-lg font-light  z-10 text-[#E5E7EB] ">
        Aquí respondemos lo más común para que tomes la mejor decisión
      </p>
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
  );
}
