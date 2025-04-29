/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        indie: ['"Indie Flower"', "cursive"],
        singleDay: ["Single Day", "cursive"],
        mq: ["Mystery Quest", "system-ui"],
      },
    },
  },
  plugins: [],
};
