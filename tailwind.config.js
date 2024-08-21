/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
