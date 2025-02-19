"use client";
import { motion } from "motion/react";
import { useState } from "react";

import MainContainer from "../components/mainContainer";
import Header from "../components/header";
import { questions } from "./info";
import { StepForm } from "../components/stepForm";
import { ExampleBrief } from "../components/exampleBrief";
import Loader from "../components/loader";
//import { generateAndSendBrief } from "../components/GenerateAndSendBrief"; // Asegúrate de importar la función

const page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(questions);
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleNext = async () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleChange = (id, newLetter) => {
    setAnswers((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, answer: newLetter } : q))
    );
  };

  const handlePOST = async () => {
    setLoading(true);
    try {
      // Llamar directamente a la función
      // const result = await generateAndSendBrief(
      //   answers, // Pasar las respuestas
      //   process.env.NEXT_PUBLIC_EMAIL_USER_FEDE // Pasar el correo del destinatario
      // );

      console.log(result); // Ver el resultado de la función
      setLoading(false);
      setSubmit(true);

      setTimeout(() => {
        setSubmit(false);
        window.location.href = "/";
      }, 5000);
    } catch (error) {
      console.error("Error al enviar el brief:", error);
      setLoading(false);
    }
  };
  return (<></>
    // <MainContainer>
    //   <Header page="brief_naming" />
    //   <div className="flex flex-col justify-center items-center pb-10">
    //     <div className=" flex flex-col bg-companySalmon w-full max-w-[1200px] items-center justify-center gap-3 p-5 md:bg-transparent md:p-0 md:gap-0">
    //       <h1 className="text-[32px] md:text-[42px] lg:text-[82px] text-white md:text-[#11190c] font-regular SpaceGrotesk">
    //         Desarrollo de<strong className="font-semibold"> Naming</strong>
    //       </h1>
    //       <h2 className="text-[14px] md:text-[20px] lg:text-[42px] text-background md:text-companySalmon font-regular SpaceGrotesk">
    //         [BRIEF]
    //       </h2>
    //     </div>

    //     <div
    //       className="bg-background border w-full max-w-[1200px] md:p-10 p-5 mt-0 md:mt-10
    //     "
    //     >
    //       {loading || submit ? (
    //         <>
    //           {submit ? (
    //             <h1 className="text-[32px] md:text-[42px] lg:text-[82px] text-white md:text-[#11190c] font-regular SpaceGrotesk">
    //               Muchas gracias por enviarnos el formulario
    //             </h1>
    //           ) : (
    //             <div className="flex justify-center items-center w-full">
    //               <Loader />
    //             </div>
    //           )}
    //         </>
    //       ) : (
    //         <>
    //           <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 text-[32px] font-light mb-0 md:mb-5">
    //             <span
    //               className={`${
    //                 currentQuestion <= 9
    //                   ? "text-companySalmon "
    //                   : "hidden md:block md:text-[#C9C9C9]"
    //               }`}
    //             >
    //               Información general
    //             </span>
    //             <span className="md:hidden text-[#C9C9C9] text-[20px]">
    //               {currentQuestion + 1}/{questions.length}
    //             </span>
    //             <span className="text-companySalmon hidden md:block">-</span>
    //             <span
    //               className={`${
    //                 currentQuestion > 9
    //                   ? "text-companySalmon"
    //                   : "hidden md:block md:text-[#C9C9C9]"
    //               }`}
    //             >
    //               Insumo creativo
    //             </span>
    //           </div>
    //           <div className="flex justify-center items-center">
    //             {questions
    //               .slice(
    //                 Math.floor(currentQuestion / 8) * 8,
    //                 Math.floor(currentQuestion / 8) * 8 + 8
    //               )
    //               .map((question, index) => (
    //                 <StepForm
    //                   question={question}
    //                   index={index + Math.floor(currentQuestion / 8) * 8}
    //                   currentQuestion={currentQuestion}
    //                   key={question.id}
    //                 />
    //               ))}
    //           </div>
    //           <div className="w-full flex justify-center items-center mt-5 gap-2">
    //             <p className="text-center px-5 py-3 font-light text-[18px] md:text-[32px] border border-black SpaceGrotesk inline-block">
    //               {questions[currentQuestion].question}
    //             </p>
    //             {currentQuestion === 11 && <ExampleBrief />}
    //           </div>
    //           <textarea
    //             name={`question${questions[currentQuestion].id}`}
    //             className="w-full h-[300px] mt-5 bg-transparent border shadow-md px-5 py-5 text-black placeholder-black text-[16px] resize-none placeholder-gray-500 md:text-[18px]"
    //             placeholder="Ingresa respuesta aquí..."
    //             value={answers[currentQuestion].answer}
    //             onChange={(e) =>
    //               handleChange(questions[currentQuestion].id, e.target.value)
    //             }
    //           ></textarea>
    //           <div className="flex flex-col md:flex-row mt-5 justify-between items-end md:items-center gap-5 md:gap-0">
    //             <div className="flex flex-col max-w-[600px] w-full gap-2">
    //               <div className="flex flex-row justify-between">
    //                 <span>
    //                   {Math.round(((currentQuestion + 1) * 100) / 13)}%
    //                 </span>
    //                 <span className="hidden md:block">
    //                   {currentQuestion + 1}/{questions.length}
    //                 </span>
    //               </div>
    //               <div className="w-full h-[7px] bg-[#C9C9C9] flex">
    //                 <motion.div
    //                   className="h-full bg-companySalmon"
    //                   initial={{ width: "0%" }}
    //                   animate={{
    //                     width: `${Math.round(
    //                       ((currentQuestion + 1) * 100) / 13
    //                     )}%`,
    //                   }}
    //                   transition={{ duration: 0.5, ease: "easeInOut" }}
    //                 ></motion.div>
    //               </div>
    //             </div>
    //             <div className="flex flex-row  justify-end">
    //               <button
    //                 onClick={handlePrev}
    //                 className={`bg-black text-background p-3 mr-5 ${
    //                   currentQuestion === 0 && "opacity-50 cursor-not-allowed"
    //                 }`}
    //               >
    //                 Anterior
    //               </button>
    //               <button
    //                 onClick={
    //                   currentQuestion === questions.length - 1
    //                     ? handlePOST
    //                     : handleNext
    //                 }
    //                 className="bg-black text-background p-3"
    //               >
    //                 {currentQuestion === questions.length - 1
    //                   ? "Finalizar"
    //                   : "Siguiente"}
    //               </button>
    //             </div>
    //           </div>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </MainContainer>
  );
};

export default page;
