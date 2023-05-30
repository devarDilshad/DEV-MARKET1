/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#FFFAFB",
        primary: "#ff2625",
        secondary: "#010103",
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', "sans-serif"],
        poppins: ["Poppins" , "sans-serif"],
      },
    },
    screens: {
      ss: "480px",
      sm: "620px",
      mm: "700px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1560px"
    },
  },
  plugins: [],
}

