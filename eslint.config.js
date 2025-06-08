// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@typescript-eslint/array-type": "off",
      "@angular-eslint/prefer-inject": "off",
    },
  },
  {
    files: ["**/*.html"],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  },
);

// // eslint.config.js
// ("use strict");

// const tsParser = require("@typescript-eslint/parser");
// const globals = require("globals");
// const js = require("@eslint/js");
// const ts = require("@typescript-eslint/eslint-plugin");
// const ng = require("@angular-eslint/eslint-plugin");

// /** @type {import('eslint').Linter.Config[]} */
// module.exports = [
//   {
//     files: ["src/app/**/*.ts"],
//     ignores: ["**/*.spec.ts"],
//     plugins: {
//       "@typescript-eslint": ts,
//       "@angular-eslint": ng,
//     },
//     languageOptions: {
//       parser: tsParser,
//       globals: {
//         ...globals.browser,
//       },
//       parserOptions: {
//         project: ["tsconfig.app.json", "tsconfig.spec.json"],
//       },
//     },
//     rules: {
//       ...js.configs.recommended.rules,
//       ...ts.configs["recommended-requiring-type-checking"].rules,
//       ...ts.configs["stylistic-type-checked"].rules,
//       ...ng.configs.recommended.rules,
//       "@typescript-eslint/explicit-member-accessibility": [
//         "error",
//         {
//           accessibility: "explicit",
//           overrides: {
//             constructors: "no-public",
//             accessors: "no-public",
//           },
//         },
//       ],
//       "@typescript-eslint/no-unused-vars": "warn",
//       "@typescript-eslint/no-explicit-any": "error",
//       "@angular-eslint/directive-selector": [
//         "error",
//         {
//           type: "attribute",
//           prefix: "app",
//           style: "camelCase",
//         },
//       ],
//       "@angular-eslint/component-selector": [
//         "error",
//         {
//           type: "element",
//           prefix: "app|questionnaire",
//           style: "kebab-case",
//         },
//       ],
//       "@typescript-eslint/dot-notation": "warn",
//       "@typescript-eslint/no-floating-promises": "off",
//       "@typescript-eslint/no-unsafe-argument": "off",
//       "@typescript-eslint/no-unsafe-call": "off",
//       "@typescript-eslint/no-unsafe-member-access": "off",
//       "@typescript-eslint/no-unsafe-assignment": "off",
//       "@typescript-eslint/no-unsafe-return": "off",
//       "@typescript-eslint/no-base-to-string": "off",
//       "@typescript-eslint/no-empty-function": "off",
//       "@typescript-eslint/no-inferrable-types": "off",
//       "@typescript-eslint/restrict-template-expressions": "off",
//       "@typescript-eslint/unbound-method": "off",
//       "@typescript-eslint/class-literal-property-style": "off",
//       "@typescript-eslint/array-type": "off",
//       "@typescript-eslint/prefer-readonly": "off",
//     },
//   },
// ];
