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
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      accent: "#FF8300",
      body: "#e5e5e5",
      white: "#fff",
      green: {
        DEFAULT: "#539592",
        hover: "#40807d",
      },
      black: {
        DEFAULT: "#0d0c0b",
        heavy: "#000000",
      },
      grey: {
        DEFAULT: "#232323",
        light: "#2A3439",
      },
      blue: {
        heavy: "#1f3348",
        hover: "#5a788f",
        DEFAULT: "#355679"
      },
      orange: {
        DEFAULT: "#e68530",
        hover: "#da863c",
      },
      pink: "#ffa5a5",
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
  },
  plugins: [require("tailwindcss-animate")],
};
