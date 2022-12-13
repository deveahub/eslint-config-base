module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "airbnb-typescript",
    "airbnb",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    'import/no-unresolved': ['error', {
      ignore: ['@\/']
    }],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": "error",
    "arrow-body-style": ["error", "as-needed"],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.tsx", "**/*.test.ts"] },
    ],
    'react/jsx-props-no-spreading': 'off',
    "sort-keys": ["error", "asc"],
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-restricted-exports": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "prettier/prettier": ["error", { singleQuote: true }],
    "@typescript-eslint/comma-dangle": "error",
    "@typescript-eslint/comma-dangle": "off",
    "comma-dangle": "off",
    "sort-keys": "off",
    "no-confusing-arrow": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
    quotes: [2, "single", { avoidEscape: true }],
  },
};
