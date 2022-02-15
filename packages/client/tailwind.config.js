module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        "p-purple": "rgb(59, 39, 120)",
        "p-green": "rgb(50, 220, 169)",
        "p-pink": "rgb(245, 176, 218)",
        "material-icons": "rgb(255,255,255)",
      },
      fontSize: {
        base: ["1rem", "1.15"],
      },
    },
  },
  plugins: [require("daisyui")],
  corePlugins: { preflight: false },
};
