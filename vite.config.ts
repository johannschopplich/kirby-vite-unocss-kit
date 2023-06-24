import { resolve } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";
import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import type { Plugin as PostCssPlugin } from "postcss";

const currentDir = new URL(".", import.meta.url).pathname;

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    root: "src",
    base: isDev ? "/" : "/dist/",

    build: {
      outDir: resolve(currentDir, "public/dist"),
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: resolve(currentDir, "src/main.ts"),
      },
    },

    css: {
      postcss: {
        ...(isDev && { plugins: [postCssDevStyles()] }),
      },
    },

    plugins: [FullReload("site/{snippets,templates}/**/*")],
  };
});

/**
 * Prevent FOUC in development mode before Vite
 * injects the CSS into the page
 */
function postCssDevStyles(): PostCssPlugin {
  return {
    postcssPlugin: "postcss-vite-dev-css",
    OnceExit(root) {
      const outDir = resolve(currentDir, "public/assets/dev");
      mkdirSync(outDir, { recursive: true });
      writeFileSync(resolve(outDir, "index.css"), root.toResult().css);
    },
  };
}
