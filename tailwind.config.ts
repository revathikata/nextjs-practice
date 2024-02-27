import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        nav: "blue",
        page:"#67788k",
        card:"#47566a",
        "card-Hover": "#45679q",
        "default-text":"#67788k",
        'blue-accent':"#76788k",
        "blue-accent-hover":" #009fff"
      }
    },
  },
  plugins: [],
};
export default config;
