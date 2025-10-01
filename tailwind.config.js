/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fff8ea",
        companyGreen: "#CBF119",
        companySalmon: "#F55548",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        abel: ["var(--font-abel)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        header:
          "linear-gradient(180deg, rgba(25,27,28,1) 0%, rgba(0,212,255,0) 100%)",
        blogCard:
          " linear-gradient(180deg, rgba(25,27,28,0) 36%, rgba(8,8,8,0.6222864145658263) 79%)",
        zigzagBg: "url('/zig-zag/grid-bg.png')",
        booblist: "url('/booblist/Rectangle.png')",
        pattern: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='none' stroke='%23ccc' stroke-width='.2'/%3E%3C/svg%3E")`,
        digitalSection: `url('/digital/backgroundSectionDigital.png')`,
      },
      screens: {
        "3xl": "1740px",
      },
    },
  },
  plugins: [],
};
