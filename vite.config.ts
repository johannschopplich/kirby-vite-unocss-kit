import { resolve } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import type { Plugin as PostCssPlugin } from "postcss";

/**
 * Prevent FOUC in development mode before Vite
 * injects the CSS into the page
 */
const postCssWriteFile = (): PostCssPlugin => ({
  postcssPlugin: "postcss-write-file",

  Root(root, postcss) {
    // @ts-expect-error: property unknown
    if (postcss.result.opts.env === "production") return;

    const distDir = resolve(__dirname, "public/assets/dev");
    if (!existsSync(distDir)) mkdirSync(distDir);
    writeFileSync(`${distDir}/index.css`, root.source?.input.css ?? "");
  },
});

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
      plugins: [postCssWriteFile()],
    },
  },

  plugins: [FullReload(["site/snippets/**/*", "site/templates/**/*"])],

  server: {
    cors: true,
    port: 3000,
    strictPort: true,
  },
}));
