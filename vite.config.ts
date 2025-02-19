import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
        about: "/about.html",
        pricing: "/pricing.html",
      },
    },
  },
});
