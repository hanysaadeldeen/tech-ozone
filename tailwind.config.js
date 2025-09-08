/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#ED2024",
        PrimaryD: "#B01B1E",
        PrimaryM: "#F26767",
        Secondary: "#092892",
        SecondaryM: "#5A72C0",
        SecondaryMD: "#2F4BA3",
        BG: "#F5F7FA",
        BG2: "#E9EDF2",
        BG3: "#AFC1C5",
        TextD: "#1A1F2B",
        TextM: "#6B7688",
        TextMD: "#4A5568",
        TextL: "#C3CAD3",
        TextLM: "#A3ADBA",
      },
    },
  },
  plugins: [],
};
