const CurvedRoad = ({ className }) => {
  return (
    <svg
      width="30"
      height="34"
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.6 3.90015H20.2C23.0719 3.90015 25.4 6.22827 25.4 9.10015V9.10015C25.4 11.972 23.0719 14.3001 20.2 14.3001H7.19999C4.32811 14.3001 2 16.6283 2 19.5001V19.5001C2 22.372 4.32812 24.7001 7.2 24.7001H22.8C25.6719 24.7001 28 27.0283 28 29.9001V33.8001"
        stroke="currentColor"
        stroke-width="3.9"
      />
      <path d="M7.2 0L2 3.9L7.2 7.8V0Z" fill="currentColor" />
      <path
        d="M15 3.90015H11.1H7.19995"
        stroke="currentColor"
        stroke-width="3.9"
      />
    </svg>
  );
};

export default CurvedRoad;
