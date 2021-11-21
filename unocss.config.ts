import { defineConfig, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";
import { presetTypography } from "unocss-preset-typography";

export default defineConfig({
  shortcuts: [
    { box: "max-w-7xl mx-auto bg-gray-100 rounded-md shadow-sm p-4" },
  ],
  presets: [presetUno(), presetIcons(), presetTypography()],
});
