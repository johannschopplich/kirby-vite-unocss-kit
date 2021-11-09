import { defineConfig, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";

export const cliConfig = {
  outDir: "src/styles",
  watchPaths: ["site/snippets/**/*", "site/templates/**/*"],
};

export default defineConfig({
  shortcuts: [
    { box: "max-w-7xl mx-auto bg-gray-100 rounded-md shadow-sm p-4" },
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
  ],
});
