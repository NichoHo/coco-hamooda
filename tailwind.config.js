/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E90FF", // Tropical Blue — trust, freshness
        },
        secondary: {
          DEFAULT: "#2E2E2E", // Charcoal Gray — contrast & solidity
          sand: "#F4D29A",    // Warm Sand — natural & balancing
        },
        accent: {
          lime: "#9FD356",    // Lime Green — sustainability & growth
          amber: "#FFB347",   // Amber Glow — energy & CTA
        },
        neutral: {
          light: "#F9FAFB",
          dark: "#0E1113",
          surface: "#FFFFFF",
          "surface-dark": "#181A1B",
          border: "#E5E7EB",
          "border-dark": "#2C2C2C",
          text: "#111827",
          "text-dark": "#F3F4F6",
          subtext: "#6B7280",
          "subtext-dark": "#9CA3AF",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};
