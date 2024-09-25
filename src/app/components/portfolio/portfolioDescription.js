import React from "react";

export default function PortfolioDescription({ children }) {
  return (
    <span className="text-base tracking-widest leading-8 lg:text-[16px] lg:leading-10 2xl:text-[18px]">
      {children}
    </span>
  );
}
