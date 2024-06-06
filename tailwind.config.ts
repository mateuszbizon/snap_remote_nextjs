import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-1": "hsl(0, 0%, 98%)",
        "gray-1": "hsl(0, 0%, 41%)",
        "dark-1": "hsl(0, 0%, 8%)",
      }
    },
  },
  plugins: [],
};
export default config;
