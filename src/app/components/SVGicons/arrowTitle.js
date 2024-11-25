import React from "react";

const ArrowTitle = ({ className }) => {
  return (
    <svg
      width="83"
      height="18"
      viewBox="0 0 83 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_1856_1318)">
        <path
          d="M55.4844 9L7.48437 9"
          stroke="#363A3D"
          stroke-width="1.98033"
          stroke-miterlimit="10"
        />
        <path
          d="M7.84592 9C9.91625 11.0703 10.8987 15.1582 10.9844 18C8.14921 14.189 4.4569 10.8659 -0.000239205 9C4.4635 7.21319 7.98437 3.69231 10.9844 0C10.7404 3.03956 9.99537 6.73187 7.84592 9Z"
          fill="#363A3D"
        />
      </g>
      <defs>
        <clipPath id="clip0_1856_1318">
          <rect
            width="82.4835"
            height="18"
            fill="white"
            transform="translate(82.4844 18) rotate(180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowTitle;
