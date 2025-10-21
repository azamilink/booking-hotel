import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6", // biru Tailwind
          dark: "#1e40af",
          light: "#93c5fd",
        },
        secondary: {
          DEFAULT: "#6366f1",
          dark: "#3730a3",
          light: "#c7d2fe",
        },
        accent: "#f59e0b", // kuning keemasan
        background: "#f9fafb",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
});
