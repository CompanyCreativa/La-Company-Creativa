import React from "react";

export default function MainContainer({ children }) {
  return (
    <div className="mt-[100px] px-4 md:px-5 xl:px-10 bg-pattern bg-repeat">
      {children}
    </div>
  );
}
