module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-strongly-recommended",
    "@vue-bridge/eslint-config",
  ],
  overrides: [
    {
      files: ["*.js"],
      env: {
        node: true,
      },
    },
    {
      files: ["**/*.spec.js"],
      env: {
        node: true,
        jest: true,
      },
    },
  ],
};
