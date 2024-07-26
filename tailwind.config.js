/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "300px", max: "500px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("daisyui")],
};

