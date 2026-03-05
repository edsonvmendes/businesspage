import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07131f",
        sky: "#8be9fd",
        mint: "#57f287",
        amber: "#ffcb6b",
      },
      boxShadow: {
        glow: "0 0 60px rgba(139, 233, 253, 0.22)",
      },
      backgroundImage: {
        "mesh-data":
          "radial-gradient(circle at 20% 20%, rgba(139,233,253,.24), transparent 34%), radial-gradient(circle at 70% 15%, rgba(87,242,135,.20), transparent 28%), radial-gradient(circle at 80% 78%, rgba(255,203,107,.22), transparent 35%), linear-gradient(135deg, #07131f 10%, #0a1d2f 40%, #102d40 100%)",
      },
      fontFamily: {
        display: ["Poppins", "Manrope", "ui-sans-serif", "system-ui"],
        body: ["Manrope", "Segoe UI", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
