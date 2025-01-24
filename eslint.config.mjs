// @ts-check
import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: false,
  unocss: true,
  ignores: ["**/site/plugins/*/index.js", "**/vendor/**"],
});
