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
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        abel: ["var(--font-abel)"],
      },
      backgroundImage: {
        header:
          "linear-gradient(180deg, rgba(25,27,28,1) 0%, rgba(0,212,255,0) 100%)",
        blogCard:
          " linear-gradient(180deg, rgba(25,27,28,0) 36%, rgba(8,8,8,0.6222864145658263) 79%)",
        zigzagBg: "url('/zig-zag/grid-bg.png')",
        booblist: "url('/booblist/Rectangle.png')",
      },
      screens: {
        "3xl": "1740px",
      },
    },
  },
  plugins: [],
};
