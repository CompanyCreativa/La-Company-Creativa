import React from "react";

const Megaphone = ({ className }) => {
  return (
    <svg
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M46.9565 37.5652L37.5652 46.9565H18.7826V41.59L42.8478 14.0869H46.9565V25.826V37.5652Z"
        fill="currentColor"
      />
      <path
        d="M14.0869 23.4782V14.0869H23.4782"
        stroke="currentColor"
        stroke-width="4.69565"
      />
      <path
        d="M2.34778 23.4781V2.34766H23.4782"
        stroke="currentColor"
        stroke-width="4.69565"
      />
      <path
        d="M42.2609 51.652L51.6522 42.2607H56.3478V56.3477H42.2609V51.652Z"
        fill="currentColor"
      />
      <path
        d="M25.826 23.4775H37.5652V35.2167H25.826V23.4775Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Megaphone;
