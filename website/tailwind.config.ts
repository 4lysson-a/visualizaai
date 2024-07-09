import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        menu_bg: "var(--menu-bg)",
        insta_primary: "var(--insta-primary)",
        insta_bg_gradient: "var(--insta-bg-gradient)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
