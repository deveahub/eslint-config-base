const base = require("./base");
const eslintMerge = require("./utils/eslintMerge");

module.exports = eslintMerge(base, {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["plugin:react/recommended"],
  plugins: ["react"],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off'
  }
});
