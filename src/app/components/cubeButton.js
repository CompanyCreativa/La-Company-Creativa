import React from "react";
import X from "./SVGicons/x";

export default function CubeButton({ onClick, content }) {
  return (
    <button href="#" className="button" onClick={onClick}>
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
