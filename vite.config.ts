import { defineConfig } from "vite";
import { minifyHtml } from "vite-plugin-html";

export default defineConfig({
  build: {
    outDir: "docs",
  },
  plugins: [minifyHtml()],
  server: {
    open: true,
  },
});
