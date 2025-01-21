import { motion } from "motion/react";
import { CheckIcon } from "./SVGicons/checkIcon";

export const StepForm = ({ question, index, currentQuestion }) => {
  console.log(question.id);

  return (
    <div key={index} className="flex justify-center items-center">
      {(index !== 0 && index !== 9) && (
        <>
          <motion.div
            className={`w-[60px] h-[3px] bg-companySalmon`}
            initial={{ width: "0px" }}
            animate={{
              width: index <= currentQuestion ? "60px" : "0px",
            }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="w-[60px] h-[3px] bg-[#C9C9C9]"
            initial={{ width: "60px" }}
            animate={{
              width: index <= currentQuestion ? "0px" : "60px",
            }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </>
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
        {currentQuestion + 1 <= question.id ? index + 1 : <CheckIcon />}
      </p>
    </div>
  );
};
