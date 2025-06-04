import React from "react";

export default function Section({ children, className = "" }) {
  return (
    <section
      className={`pb-16 lg:pb-32 flex flex-col max-w-[1670px] md:mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
