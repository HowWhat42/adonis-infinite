import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import prettier from "eslint-plugin-prettier";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/tsconfig.json",
      "node_modules/*",
      "dist/*",
      "coverage/*",
      "**/generated/",
      "**/*/public/*",
      "zod/*",
      "**/*.js",
      "**/*.jsx",
      "**/pnpm-lock.yaml",
      "eslint.config.mjs",
      "**/.adonisjs/*",
    ],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:tailwindcss/recommended",
    "plugin:storybook/recommended",
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      import: fixupPluginRules(_import),
      "unused-imports": unusedImports,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "commonjs",
    },

    rules: {
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "no-async-promise-executor": "off",
      "import/no-unresolved": "off",
      "no-return-await": "off",
      "react/require-default-props": "off",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "unused-imports/no-unused-imports": "error",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/enforces-negative-arbitrary-values": "off",

      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-function": "off",

      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
];
