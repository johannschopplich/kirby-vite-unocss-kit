import { resolve } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";
import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import type { Plugin as PostCssPlugin } from "postcss";

export default defineConfig(({ mode }) => ({
  root: "src",
  base: mode === "development" ? "/" : "/dist/",

  build: {
    outDir: resolve(__dirname, "public/dist"),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: resolve(__dirname, "src/main.ts"),
    },
  },

  css: {
    postcss: {
      plugins: [postCssDevStyles()],
    },
  },

  plugins: [FullReload("site/{layouts,snippets,templates}/**/*")],
}));

/**
 * Prevent FOUC in development mode before Vite
 * injects the CSS into the page
 */
function postCssDevStyles(): PostCssPlugin {
  return {
    postcssPlugin: "postcss-vite-dev-css",

    OnceExit(root, { result }) {
      // @ts-expect-error: property unknown
      if (result.opts.env !== "production") {
        const outDir = resolve(__dirname, "public/assets/dev");
        mkdirSync(outDir, { recursive: true });
        writeFileSync(resolve(outDir, "index.css"), root.toResult().css);
      }
    },
  };
}
