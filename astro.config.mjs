import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://webkode.co",
  output: "static",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});