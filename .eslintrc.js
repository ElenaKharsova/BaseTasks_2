module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
    "import/prefer-default-export": "off",
    "no-console": "off",
    "consistent-return": "off",
    "no-undef": "off",
    "no-alert": "off",
  },
};
