import React from "react";

export default function Section({ children, className = "" }) {
  return (
    <section
      className={`${className} px-3 lg:px-0 pb-16 lg:pb-32 flex flex-col w-[91.5%] max-w-[1760px] mx-auto`}
    >
      {children}
    </section>
  );
}
