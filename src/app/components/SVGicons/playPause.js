const PlayPause = ({ className }) => {
  return (
    <svg
      width="33"
      height="34"
      viewBox="0 0 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 27.3999V6.59985L14.7 16.9999L3 27.3999Z"
        fill="currentColor"
      />
      <path
        d="M3.86328 5.62817L15.5635 16.0286L16.6572 17.0002L15.5635 17.9719L3.86328 28.3713L1.7002 30.2952V3.70532L3.86328 5.62817Z"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <rect
        x="23.8001"
        y="2.7"
        width="7.8"
        height="28.6"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2.6"
      />
    </svg>
  );
};

export default PlayPause;
