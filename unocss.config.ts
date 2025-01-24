import type { Theme } from "@unocss/preset-wind";
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind,
} from "unocss";

export default defineConfig<Theme>({
  cli: {
    entry: {
      patterns: ["site/{snippets,templates}/**/*"],
      outFile: "src/styles/uno.css",
    },
  },
  shortcuts: [
    { box: "max-w-7xl mx-auto bg-gray-100 rounded-md shadow-sm p-4" },
  ],
  presets: [presetWind(), presetIcons(), presetTypography()],
});
