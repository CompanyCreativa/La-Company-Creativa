import React from "react";

const Label = ({ className }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.51138 14.2959C2.34565 15.5979 2.32057 17.5621 3.39045 18.9439C5.51351 21.686 7.83723 24.0097 10.5793 26.1327C11.9611 27.2026 13.9253 27.1775 15.2273 26.0118C18.7621 22.8468 21.9993 19.5391 25.1234 15.9042C25.4322 15.5449 25.6254 15.1044 25.6688 14.6326C25.8605 12.5459 26.2544 6.53407 24.6218 4.90143C22.9891 3.26878 16.9773 3.66268 14.8906 3.85442C14.4188 3.89778 13.9783 4.09098 13.6189 4.39984C9.98405 7.52391 6.6764 10.7611 3.51138 14.2959Z"
        stroke="currentColor"
        strokeWidth="1.83486"
      />
      <path
        d="M9.33953 17.7372L11.786 20.1837"
        stroke="currentColor"
        strokeWidth="1.83486"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1836 7.33962L27.0765 2.44666"
        stroke="currentColor"
        strokeWidth="1.83486"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Label;
