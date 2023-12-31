/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        l:'900px',
        xxxl:'2250px'
      },
      colors:{
        "cblue":"#222057",
        "corange":"#F8991D",
        "cdark":"#232323",
        "cgray":"#323232",
        "cpurple":"#352057"
      },
    },
  },
  plugins: [],
}

