import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import unocss from "unocss/vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  plugins: [solidPlugin(), unocss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
