import React from "react";

export default function MainContainer({ children }) {
  return (
    <div className="mt-[100px] px-8 md:px-10 xl:px-20 2xl:px-28 bg-pattern bg-repeat">
      {children}
    </div>
  );
}
