import type { Plugin as PostCSSPlugin } from "postcss";
import * as fs from "node:fs";
import * as path from "node:path";
import * as url from "node:url";
import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";

const currentDir = url.fileURLToPath(new URL(".", import.meta.url));

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    root: "src",
    base: isProd ? "/dist/" : "/",

    build: {
      outDir: path.resolve(currentDir, "public/dist"),
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: path.resolve(currentDir, "src/main.ts"),
      },
    },

    css: {
      postcss: {
        ...(!isProd && { plugins: [exportDevStyles()] }),
      },
    },

    plugins: [FullReload("site/{snippets,templates}/**/*")],

    server: {
      cors: true,
    },
  };
});

/**
 * Prevent FOUC in development mode before Vite
 * injects the CSS into the page
 */
function exportDevStyles(): PostCSSPlugin {
  return {
    postcssPlugin: "postcss-vite-dev-css",
    OnceExit(root) {
      const outDir = path.resolve(currentDir, "public/assets/dev");
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.resolve(outDir, "index.css"), root.toResult().css);
    },
  };
}
