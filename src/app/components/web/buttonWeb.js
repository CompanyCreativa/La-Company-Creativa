"use client";

import { useRouter } from "next/navigation";

import Arrow from "../SVGicons/arrow";

export default function ButtonWeb({ text, action, className, newTab }) {
  const router = useRouter();

  const handleClick = () => {
    if (typeof action === "string") {
      if (newTab) {
        window.open(action, "_blank"); // 👉 abre en otra pestaña
      } else {
        router.push(action);
      }
    } else if (typeof action === "function") {
      action();
    }
  };

  return (
    <button
      className={`flex text-sm md:text-base 2xl:text-lg font-light  items-center gap-5 robout text-[#302F32] bg-white px-4 py-2 rounded-full group ${className}`}
      onClick={handleClick}
    >
      <p className="flex-1 ml-5 text-center font-medium">{text}</p>
      <div className="relative bg-[#302F32] w-8 h-8 flex items-center justify-center rounded-full ">
        <Arrow className="text-white z-10" />
        <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in-out group-hover:h-full rounded-full"></div>
      </div>
    </button>
  );
}
