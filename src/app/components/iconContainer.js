import React from "react";

export default function IconContainer({ children }) {
  return (
    <div className="border border-black h-7 w-7 flex justify-center items-center rounded-md">
      {children}
    </div>
  );
}
