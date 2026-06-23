/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["ClashDisplay"],
        geist: ["Geist"],
        mono: ["GeistMono"],
      },
      colors: {
        orchid: "#FF6B00",
        "orchid-100": "#E65F00",
        primary: "#9C95AC",
        grey: "#30303A",
        "grey-100": "#373743",
        dark: "#16151C",
      },
    },
  },
  plugins: [],
};
