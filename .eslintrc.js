module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  overides: [
    {
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  rules: {
    "dot-notation": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-brace-presence": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-wrap-multilines": "off",

    // Cannot use `Component.displayName` pattern on class components in TS.
    "react/static-property-placement": "off",

    // Require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          exceptions: ["-", "+"],
          markers: ["=", "!", "#region", "#endregion", "/"], // space here to support sprockets directives and typescript reference comments
        },
        block: {
          exceptions: ["-", "+"],
          markers: ["=", "!", "#region", "#endregion", ":", "::"], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],
  },
};
