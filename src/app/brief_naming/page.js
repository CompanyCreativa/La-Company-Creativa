"use client";
import { useState } from "react";

import MainContainer from "../components/mainContainer";
import Header from "../components/header";
import { CheckIcon } from "../components/SVGicons/checkIcon";

const questions = [
  {
    id: 1,
    question: "¿A qué se dedicará esta nueva marca?",
    answer: "",
  },
  {
    id: 2,
    question: "¿Qué productos o servicios se ofrecen?",
    answer: "",
  },
  {
    id: 3,
    question: "¿Cual es el objetivo principal de la marca?",
    answer: "",
  },
  {
    id: 4,
    question: "¿Cuales son las principales características de la marca?",
    answer: "",
  },
  {
    id: 5,
    question: "¿Cuales son las principales caracteristicas de la marca?",
    answer: "",
  },
  {
    id: 6,
    question: "¿Cuales son las principales caracteristicas de la marca?",
    answer: "",
  },
  {
    id: 7,
    question: "¿Cuales son las principales caracteristicas de la marca?",
    answer: "",
  },
  {
    id: 8,
    question: "¿Cuales son las principales caracteristicas de la marca?",
    answer: "",
  },
  {
    id: 9,
    question: "¿Cuales son las principales caracteristicas de la marca?",
    answer: "",
  },
];

const page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  console.log("soy el current", currentQuestion);
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    console.log(answers);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  return (
    <MainContainer>
      <Header page="brief_naming" />
      <div className="flex flex-col justify-center items-center pb-10">
        <h1 className="text-[32px] md:text-[42px] lg:text-[82px] font-regular SpaceGrotesk">
          Desarrollo de<strong className="font-semibold"> Naming</strong>
        </h1>
        <h2 className="text-[24px] md:text-[20px] lg:text-[42px] font-regular SpaceGrotesk text-companySalmon">
          [BRIEF]
        </h2>
        <div className="bg-background border  p-10 mt-10">
          <div className="flex justify-center items-center gap-5 text-[32px] font-light">
            <span className="text-companySalmon">Información general </span>
            <span className="text-companySalmon">-</span>
            <span className="text-[#C9C9C9]">Insumo creativo</span>
          </div>
          <div className="flex justify-center items-center">
            {questions.map((question, index) => (
              <div key={index} className="flex justify-center items-center">
                {question.id > 1 && (
                  <div
                    className={`w-[60px] h-[3px]  ${
                      index <= currentQuestion
                        ? "bg-companySalmon"
                        : "bg-[#C9C9C9]"
                    }`}
                  ></div>
                )}
                <p
                  className={`text-[20px] SpaceGrotesk text-background rounded-full w-[30px] h-[30px] flex justify-center items-center ${
                    index === currentQuestion
                      ? "bg-companySalmon border-2 border-companySalmon"
                      : ""
                  }  ${
                    index < currentQuestion + 1
                      ? "bg-background border-2 border-companySalmon "
                      : "bg-[#C9C9C9]"
                  } `}
                >
                  {currentQuestion >= index + 1 ? <CheckIcon /> : index + 1}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-5 px-5 py-3 font-light text-[32px] border border-black SpaceGrotesk">
            {questions[currentQuestion].question}
          </p>
          <textarea
            name={`question${questions[currentQuestion].id}`}
            className="w-full h-[300px] mt-5 bg-transparent border shadow-md px-5 py-5 text-black placeholder-black text-[18px] resize-none placeholder-gray-500"
            placeholder="Ingresa respuesta aquí..."
            value={answers[`question${questions[currentQuestion].id}`] || ""}
            onChange={handleChange}
          ></textarea>
          <button
            onClick={handlePrev}
            className="bg-black text-background p-3 mr-5"
          >
            Anterior
          </button>
          <button onClick={handleNext} className="bg-black text-background p-3">
            Siguiente
          </button>
        </div>
      </div>
    </MainContainer>
  );
};

export default page;
