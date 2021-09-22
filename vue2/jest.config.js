// const esModules = ["lodash-es"].join("|");

/**
 * @type {import('@jest/types').Config.InitialOptions }
 */
const config = {
  preset: "../jest.config.js",

  // include parent src folder in test file lookup
  roots: ["<rootDir>/../src"],

  moduleNameMapper: {
    // use local Vue2
    "^vue$": "<rootDir>/node_modules/vue",
    // use local Vue2-compatible Test-Utils
    "@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils",
    // use local vue-demi version
    "vue-demi": "<rootDir>/node_modules/vue-demi",
  },
  transform: {
    // use local Vue2-compatible version of vue-jest
    "^.+\\.vue$": "<rootDir>/node_modules/vue-jest",
  },
};

module.exports = config;
