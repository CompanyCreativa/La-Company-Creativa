export default function BtlIcon({ color = "#FFFf" }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="42"
        height="52"
        viewBox="0 0 42 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[32px] lg:w-auto"
      >
        <path
          opacity="0.1"
          d="M20.1705 0.355469L11.6595 51.2963H0.27832V0.355469H20.1705Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0.353741C0 0.158375 0.158375 0 0.353741 0H31.4773C31.6727 0 31.8311 0.158375 31.8311 0.353741V51.2946C31.8311 51.49 31.6727 51.6484 31.4773 51.6484H0.353741C0.158375 51.6484 0 51.49 0 51.2946V0.353741ZM0.707482 0.707482V50.9409H31.1236V0.707482H0.707482Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.48535 10.2619C8.48535 10.0666 8.64373 9.9082 8.83909 9.9082H41.3853C41.5807 9.9082 41.7391 10.0666 41.7391 10.2619V51.2942C41.7391 51.4896 41.5807 51.6479 41.3853 51.6479H8.83909C8.64373 51.6479 8.48535 51.4896 8.48535 51.2942V10.2619ZM9.19283 10.6157V50.9404H41.0316V10.6157H9.19283Z"
          fill={color}
        />
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.2337 21.9398H13.082V18.4023H27.2337V21.9398Z"
          fill={color}
        />
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.2337 31.848H13.082V28.3105H27.2337V31.848Z"
          fill={color}
        />
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.2337 41.7562H13.082V38.2188H27.2337V41.7562Z"
          fill={color}
        />
      </svg>

      <h3 className="text-lg lg:text-[20px]">Activación BTL</h3>
    </div>
  );
}
