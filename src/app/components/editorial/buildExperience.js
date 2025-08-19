import React from "react";
import Book from "../SVGicons/book";
import Brain from "../SVGicons/brain";
import Eye from "../SVGicons/eye";
import Label from "../SVGicons/label";

export default function BuildExperience() {
  const points = [
    {
      img: Eye,
      text: (
        <>
          Claridad <span className="font-medium">visual</span>
        </>
      ),
    },
    {
      img: Label,
      text: (
        <>
          Estética <span className="font-medium">alineada</span> a tu marca
        </>
      ),
    },
    {
      img: Brain,
      text: (
        <>
          Mayor <span className="font-medium">retención</span> de la información
        </>
      ),
    },
    {
      img: Book,
      text: (
        <>
          Mejor experiencia de <span className="font-medium">lectura</span>
        </>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl SpaceGrotesk font-light uppercase text-[#F7F7F7] text-start md:text-center mb-4 md:mb-8">
        Construimos experencias{" "}
        <span className="font-medium SpaceGrotesk text-companySalmon">
          de lectura
        </span>
      </h2>
      <div className="bg-[#252525] rounded-2xl flex flex-col lg:flex-row p-10 md:py-4 justify-around gap-4">
        {points.map((point, index) => (
          <>
            <div key={index} className="flex gap-2 items-center ">
              <point.img className="text-companySalmon w-7 h-7 xl:w-auto xl:h-auto" />
              <p className="text-[#F7F7F7] text-base sm:text-sm md:text-base 2xl:text-lg font-light tracking-wide">
                {point.text}
              </p>
            </div>

            <div
              className={`w-[1px] bg-[#F7F7F7] ${
                index === points.length - 1 ? "hidden" : "hidden md:block"
              }`}
            ></div>
          </>
        ))}
      </div>
    </div>
  );
}
