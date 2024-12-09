import React from "react";
import X from "./SVGicons/x";

export default function CubeButton({ onClick, content }) {
  return (
    <button href="#" class="button" onClick={onClick}>
      <div class="qube">
        <div class="front">
          <X />
        </div>
        <div class="back">
          <X />
        </div>
      </div>
    </button>
  );
}
