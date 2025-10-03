"use client";
import Arrow from "../SVGicons/arrow";

export default function ButtonEditorial({ text, action, className, newTab }) {
  return (
    <>
      {typeof action === "string" ? (
        <a
          className={`flex text-sm md:text-base 2xl:text-lg font-light  items-center gap-5 robout text-[#302F32] bg-white px-4 py-2 rounded-full group ${className}`}
          href={action}
          target={newTab ? "_blank" : "_self"}
        >
          <p className="flex-1 ml-5 text-center">{text}</p>
          <div className="relative bg-[#302F32] w-8 h-8 flex items-center justify-center rounded-full ">
            <Arrow className="text-white z-10" />
            <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in-out group-hover:h-full rounded-full"></div>
          </div>
        </a>
      ) : (
        <button
          className={`flex text-sm md:text-base 2xl:text-lg font-light  items-center gap-5 robout text-[#302F32] bg-white px-4 py-2 rounded-full group ${className}`}
          onClick={action}
        >
          <p className="flex-1 ml-5 text-center">{text}</p>
          <div className="relative bg-[#302F32] w-8 h-8 flex items-center justify-center rounded-full ">
            <Arrow className="text-white z-10" />
            <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in-out group-hover:h-full rounded-full"></div>
          </div>
        </button>
      )}
    </>
  );
}
