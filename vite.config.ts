import { resolve } from "path";
import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";

export default defineConfig(({ mode }) => ({
  root: "src",
  base: mode === "development" ? "/" : "/dist/",

  build: {
    outDir: resolve(__dirname, "public/dist"),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: [resolve(__dirname, "src/main.ts")],
    },
  },

  plugins: [
    FullReload(["site/{snippets,templates}/**/*"], { root: __dirname }),
  ],

  server: {
    cors: true,
    port: 3000,
    strictPort: true,
  },
}));
