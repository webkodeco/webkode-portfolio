import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server", 
  adapter: cloudflare({
    // Opcional: funciones de Workers
    // assets: './dist',  // si quieres servir assets estáticos
  }),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
