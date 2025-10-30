// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // site: "https://bookofsatoshi.com",
  site: "https://www.bookofsatoshi.com",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
