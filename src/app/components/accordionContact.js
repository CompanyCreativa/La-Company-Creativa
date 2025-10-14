import { useState } from "react";
import Arrow from "./SVGicons/arrow";

export default function AccordionContact({ answer, title, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {" "}
      <div className={`bg-[#2A2626] px-5 py-1 `}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center py-2 text-left "
        >
          <span
            className={`font-bold text-[#E5E7EB] font-poppins transition duration-300 ${
              isOpen ? "text-[#F55548]" : ""
            }`}
          >
            {title}
          </span>
          <span
            className={`transform transition-transform duration-300 bg-[#525252] px-[9px] py-[10px] rounded-full ${
              isOpen ? "rotate-45" : "-rotate-45"
            }`}
          >
            <Arrow className="text-[#E5E7EB]" />
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 SpaceGrotesk ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 text-[#E5E7EB]/60 SpaceGrotesk">{answer}</div>
        </div>
      </div>
    </div>
  );
}
