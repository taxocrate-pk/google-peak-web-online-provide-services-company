/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c96d",
          dark: "#a8872e",
        },
        charcoal: {
          DEFAULT: "#1a1a1a",
          light: "#2c2c2c",
        },
        cream: {
          DEFAULT: "#f2ede5",
          light: "#f9f8f6",
        },
        mid: "#6b6b6b",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        float: "float 3s ease-in-out infinite",
        "grow-bar": "growBar 1.5s ease forwards",
        "slide-in": "slideIn 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        growBar: {
          from: { width: "0%" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        gold: "0 8px 30px rgba(201,168,76,0.4)",
        card: "0 32px 80px rgba(0,0,0,0.10)",
        "card-hover": "0 40px 80px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};
