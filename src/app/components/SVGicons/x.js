import React from "react";

const X = ({ className, color = "#0C0C0C" }) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.787031"
        y1="1.09188"
        x2="14.0081"
        y2="14.313"
        stroke={color}
        stroke-width="0.734506"
      />
      <line
        x1="14.0077"
        y1="0.876875"
        x2="0.786617"
        y2="14.098"
        stroke={color}
        stroke-width="0.734506"
      />
    </svg>
  );
};

export default X;
