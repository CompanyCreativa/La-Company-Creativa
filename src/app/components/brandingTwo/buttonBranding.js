"use client";

import { useRouter } from "next/navigation";

import Arrow from "../SVGicons/arrow";

export default function ButtonBranding({
  text,
  action,
  className,
  newTab,
  id,
}) {
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
      id={id}
      className={`flex text-sm md:text-base 2xl:text-lg font-light  items-center gap-5 robout text-[#302F32] bg-[#fff]/10 px-4 py-2 rounded-full group ${className} overflow-hidden border border-white/10 backdrop-blur-md bg-white/5 shadow-[0_12px_40px_rgba(8,15,30,0.55)] relative `}
      onClick={handleClick}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-8 -left-16 w-64 h-32 transform rotate-[25deg] opacity-30 blur-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.28), rgba(255,255,255,0))",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/6 via-white/3 to-transparent mix-blend-screen"></div>
      </div>

      <p className="flex-1 ml-5 text-center font-[400] text-[#fff]/80">
        {text}
      </p>
      <div className="relative bg-[#302F32] w-8 h-8 flex items-center justify-center rounded-full ">
        <Arrow className="text-white z-10" />
        <div className="absolute w-0 h-0 group-hover:w-full bg-companySalmon transition-all duration-300 ease-in-out group-hover:h-full rounded-full"></div>
      </div>
    </button>
  );
}
