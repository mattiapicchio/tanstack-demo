import js from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint
  .config(
    { ignores: ["dist"] },
    {
      extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
        ...pluginQuery.configs["flat/recommended"],
      ],
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
        "@tanstack/query": pluginQuery,
        "react-compiler": reactCompiler,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        "react-compiler/react-compiler": "error",
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "id-length": [2, { min: 2, properties: "never" }],
        "no-unused-vars": "error",
        "no-console": "warn",
      },
    },
  )
  .concat(eslintPluginPrettier);
