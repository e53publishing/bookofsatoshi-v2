// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // site: "https://bookofsatoshi.com",
  site: "https://e53publishing.github.io",
  base: "/bookofsatoshi-v2",
  vite: {
    plugins: [tailwindcss()],
  },
});
