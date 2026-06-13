import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050505",
          secondary: "#0A0A0C",
        },
        text: {
          primary: "rgba(255,255,255,0.9)",
          secondary: "rgba(255,255,255,0.6)",
        },
        gold: "#E6B800",
        ember: "#FF8A00",
      },
      fontFamily: {
        display: ["SF Pro Display", "Inter", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
