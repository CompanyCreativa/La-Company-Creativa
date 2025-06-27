import React from "react";

const PersonHeart = ({ className }) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="15.8333" cy="9.49996" r="6.33333" fill="#F55548" />
      <ellipse
        cx="15.8333"
        cy="26.9167"
        rx="11.0833"
        ry="6.33333"
        fill="currentColor"
      />
      <path
        d="M25.3335 15.3531C25.3335 16.9118 27.1778 18.5588 28.568 19.5788C29.2326 20.0664 29.5649 20.3103 30.0835 20.3103C30.6021 20.3103 30.9344 20.0664 31.599 19.5788C32.9892 18.5588 34.8335 16.9118 34.8335 15.3531C34.8335 12.7038 32.2209 11.7147 30.0835 13.7613C27.9461 11.7147 25.3335 12.7038 25.3335 15.3531Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PersonHeart;
