import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "server",
  site: "https://webkode.co/",
  adapter: cloudflare({}),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
});
