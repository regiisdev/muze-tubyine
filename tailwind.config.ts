
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f26d5b",
        secondary: "#64748b",
        tertiary: "#FFF6EC"
      },
      screens: {
        "msm": "0px"
      },
      fontFamily: {
        'brand': ['system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
};
export default config;
