/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xxl: "1400px",
    },
    colors: {
      accent: "#FF8300",
      body: "#e5e5e5",
      white: "#fff",
      black: {
        DEFAULT: "#0d0c0b",
        heavy: "#000000",
      },
      grey: {
        DEFAULT: "#232323",
        light: "#2A3439",
      },
      orange: {
        DEFAULT: "#e68530",
        hover: "#da863c",
      },
    },
    extend: { 
      boxShadow: {
        primary: "40px 4px 40px 0px rgba(68, 68, 68, 0.25)",
      },
      backgroundImage: {
        site: "url('/1.webp')",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
