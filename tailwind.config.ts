import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        suiGeneris: ['Sui Generis', 'sans-serif'], // Add your custom font
        montserrat: ['Montserrat', 'sans-serif'], // Add your custom font
      },
    },
  },
  plugins: [
    
  ],
} satisfies Config;
