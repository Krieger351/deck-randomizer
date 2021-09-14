module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:github/recommended", "plugin:github/typescript", "plugin:github/browser"],
  overrides: [
    {
      files: ["*.[tj]s"],
      rules: {
        "filenames/match-regex": ["error", "^[a-z0-9-.]+(.d)?$"],
        "import/no-commonjs": "off",
        "import/no-default-export": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["github", "@typescript-eslint"],
  root: true,
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "i18n-text/no-en": "off",
    "import/no-default-export": "error",
    "sort-imports": "off",
    "sort-keys": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
