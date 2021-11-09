// @ts-check
const path = require("path");
const fs = require("fs");

/**
 * Prevent FOUC in development mode before Vite
 * injects the CSS into the page
 *
 * @returns {import('postcss').Plugin}
 */
const postCssWriteFile = () => ({
  postcssPlugin: "postcss-write-file",

  Root(root, postcss) {
    // @ts-expect-error: options available
    if (postcss.result.opts.env === "production") return;

    const distDir = path.resolve(__dirname, "public/assets/dev");
    if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
    fs.writeFileSync(`${distDir}/index.css`, root.source.input.css);
  },
});

module.exports = {
  plugins: [postCssWriteFile()],
};
