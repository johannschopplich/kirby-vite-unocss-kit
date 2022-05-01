import { defineConfig } from "unocss";
import { preset as presetIcons } from "@unocss/preset-icons";
import { presetWind } from "@unocss/preset-wind";
import { presetTypography } from "@unocss/preset-typography";

export default defineConfig({
  shortcuts: [
    { box: "max-w-7xl mx-auto bg-gray-100 rounded-md shadow-sm p-4" },
  ],
  presets: [presetWind(), presetIcons(), presetTypography()],
});
