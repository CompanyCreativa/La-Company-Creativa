import React from "react";

export default function Section({ children, className = "" }) {
  return (
    <section
      className={`${className} md:px-3 lg:px-0 pb-16 lg:pb-32 flex flex-col max-w-[1670px] md:mx-auto`}
    >
      {children}
    </section>
  );
}
