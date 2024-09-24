import React from "react";

export default function CounterText({ number, description }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[25px] lg:text-[70px] 2xl:text-[100px] text-white font-montserrat font-bold">
        {number}
      </h2>
      <span className="text-white font-semibold text-xs lg:text-2xl 2xl:text-[34px] text-center tracking-wider">
        {description}
      </span>
    </div>
  );
}
