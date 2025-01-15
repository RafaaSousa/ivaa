/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        background: "#AD001D", //Vermelho forte
        primary: "#FAE9C3", //Bege
        primaryRed: "#fe2c2a",
        secondary: "#fe2c2a", //Vermelho claro
        accent: {
          DEFAULT: "#094358", //Azul escuro
          hover: "#0C80AA", //Azul claro
        },
      },
      fontFamily: {
        brandon: ["var(--font-brandon)"],
        adventures: ["var(--adventures-font)"],
      },
      borderRadius: {
        large: "4rem",
      },
    },
  },
  plugins: [],
}
