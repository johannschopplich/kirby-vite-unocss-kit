import antfu from "@antfu/eslint-config";

export default await antfu(
  {
    stylistic: false,
    yaml: false,
    ignores: ["tsconfig.json", "**/vendor/**"],
  },
  {
    rules: {
      "no-console": "off",
    },
  },
);
