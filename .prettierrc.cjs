module.exports = {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-css-order",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
