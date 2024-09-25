import React from "react";

export default function ColorContainer({ bgColor, textColor, children }) {
  return (
    <div
      className={`w-full h-[150px] lg:h-[600px] ${bgColor} ${textColor} p-3 lg:p-10 flex flex-col gap-3 justify-end tracking-wide`}
    >
      {children}
    </div>
  );
}
