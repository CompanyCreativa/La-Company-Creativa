import { useState } from "react";
import Arrow from "../SVGicons/arrow";

export default function AccordionWeb({ answer, title, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {" "}
      <div
        className={`bg-[#2A2626] px-5 py-1 rounded-3xl max-w-[700px] ${className}`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center py-4 text-left "
        >
          <span className="font-medium text-[#E5E7EB] font-poppins text-xl 2xl:text-2xl">
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
          className={`overflow-hidden transition-all duration-300 max-w-[700px] ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 text-[#E5E7EB]/60 2xl:text-lg">{answer}</div>
        </div>
      </div>
    </div>
  );
}
