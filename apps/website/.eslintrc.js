/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@green-emr/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
