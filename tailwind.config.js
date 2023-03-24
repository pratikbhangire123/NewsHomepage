/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Primary
        softorange: "hsl(35, 77%, 62%)",
        softred: "hsl(5, 85%, 63%)",

        //Neutral
        offwhite: "hsl(36, 100%, 99%)",
        grayishblue: "hsl(233, 8%, 79%)",
        darkgrayishblue: "hsl(236, 13%, 42%)",
        verydarkblue: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
