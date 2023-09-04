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
    },
    screens: {
      betterhover: { raw: "(hover:hover)" },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#fafafa",

          accent: "#e11d48",

          secondary: "#11bbff",

          neutral: "#374151",
          "base-100": "#f3f4f6",

          info: "#4dc8ea",

          success: "#74e2c1",

          warning: "#f0c560",

          error: "#f81b1f",
        },
      },
      "light",
    ],
  },
};
export default config;
