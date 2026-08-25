import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default [
  {
    ignores: [".astro/", "dist/", "node_modules/"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...astro.configs["flat/recommended"],
];
