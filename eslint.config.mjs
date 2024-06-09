import globals from "globals";
import jsdoc from "eslint-plugin-jsdoc";
import js from "@eslint/js";

export default [
  {
    files: ["**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    plugins: {
      jsdoc,
    },
    rules: {
      "jsdoc/require-description": "error",
    },
  },
  js.configs.recommended,
];
