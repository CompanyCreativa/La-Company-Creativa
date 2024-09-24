import React from "react";

export default function TitleSection({ children }) {
  return (
    <div className="lg:px-[2%] mt-8 lg:mt-16 flex flex-col gap-3 max-w-[1380px] mx-auto">
      {children}
    </div>
  );
}
