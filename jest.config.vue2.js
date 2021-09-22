// const esModules = ["lodash-es"].join("|");

/**
 * @type {import('@jest/types').Config.InitialOptions }
 */
const config = {
  preset: "./jest.config.js",

  moduleNameMapper: {
    // use local Vue2
    "^vue$": "<rootDir>/node_modules/vue",
    // use local Vue2-compatible Test-Utils
    "@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils2",
  },
  transform: {
    // use local Vue2-compatible version of vue-jest
    "^.+\\.vue$": "<rootDir>/node_modules/vue-jest2",
  },
};

module.exports = config;
