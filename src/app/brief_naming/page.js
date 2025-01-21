"use client";
import { motion } from "motion/react";
import { useState } from "react";

import MainContainer from "../components/mainContainer";
import Header from "../components/header";
import { questions } from "./info";
import { StepForm } from "../components/stepForm";
import { ExampleBrief } from "../components/exampleBrief";

const page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
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
        <div className="bg-background border w-full max-w-[1200px] p-10 mt-10">
          <div className="flex justify-center items-center gap-5 text-[32px] font-light">
            <span
              className={`${
                currentQuestion <= 8 ? "text-companySalmon" : "text-[#C9C9C9]"
              }`}
            >
              Información general
            </span>
            <span className="text-companySalmon">-</span>
            <span
              className={`${
                currentQuestion > 8 ? "text-companySalmon" : "text-[#C9C9C9]"
              }`}
            >
              Insumo creativo
            </span>
          </div>
          <div className="flex justify-center items-center">
            {questions
              .slice(
                Math.floor(currentQuestion / 9) * 9,
                Math.floor(currentQuestion / 9) * 9 + 9
              )
              .map((question, index) => (
                <StepForm
                  question={question}
                  index={index + Math.floor(currentQuestion / 9) * 9}
                  currentQuestion={currentQuestion}
                  key={question.id}
                />
              ))}
          </div>
          <div className="w-full flex justify-center items-center mt-5 gap-2">
            <p className="text-center px-5 py-3 font-light text-[32px] border border-black SpaceGrotesk inline-block">
              {questions[currentQuestion].question}
            </p>
            {currentQuestion === 11 && <ExampleBrief />}
          </div>
          <textarea
            name={`question${questions[currentQuestion].id}`}
            className="w-full h-[300px] mt-5 bg-transparent border shadow-md px-5 py-5 text-black placeholder-black text-[18px] resize-none placeholder-gray-500"
            placeholder="Ingresa respuesta aquí..."
            value={answers[`question${questions[currentQuestion].id}`] || ""}
            onChange={handleChange}
          ></textarea>
          <div className="flex flex-row mt-5 justify-between items-center ">
            <div className="flex flex-col max-w-[600px] w-full gap-2">
              <div className="flex flex-row justify-between">
                <span>{Math.round(((currentQuestion + 1) * 100) / 13)}%</span>
                <span>
                  {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <div className="w-full h-[7px] bg-[#C9C9C9] flex">
                <motion.div
                  className="h-full bg-companySalmon"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${Math.round(((currentQuestion + 1) * 100) / 13)}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                ></motion.div>
              </div>
            </div>
            <div className="flex flex-row  justify-end">
              <button
                onClick={handlePrev}
                className={`bg-black text-background p-3 mr-5 ${
                  currentQuestion === 0 && "opacity-50 cursor-not-allowed"
                }`}
              >
                Anterior
              </button>
              <button
                onClick={handleNext}
                className="bg-black text-background p-3"
              >
                {currentQuestion === questions.length - 1
                  ? "Finalizar"
                  : "Siguiente"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default page;
