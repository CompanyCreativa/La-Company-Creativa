import React from "react";
import X from "./SVGicons/x";

export default function CubeButton({ onClick, content, className }) {
  return (
    <button href="#" className={`button ${className}`} onClick={onClick}>
      <div className="qube">
        <div className="front">
          <X />
        </div>
        <div className="back">
          <X />
        </div>
      </div>
    </button>
  );
}
