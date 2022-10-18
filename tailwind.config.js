module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      spacing: {

      },
    },
  },
  variants: {
    extend: {

    }
  },
  plugins: [require("@tailwindcss/forms")],
};
