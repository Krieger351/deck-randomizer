import { defineConfig } from "vite";
import { minifyHtml } from "vite-plugin-html";

export default defineConfig({
  base: "deck-randomizer",
  build: {
    outDir: "docs",
  },
  plugins: [minifyHtml()],
  server: {
    open: true,
  },
});
