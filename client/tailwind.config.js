import flowbitePlugin from "flowbite-react/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.flowbite-react/class-list.json" // note: forward slashes for cross-platform
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};
