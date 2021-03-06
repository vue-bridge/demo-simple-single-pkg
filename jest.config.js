const esModules = ['lodash-es'].join('|')
/**
 * @type {import('@jest/types').Config.InitialOptions }
 */
const config = {
  rootDir: process.cwd(),
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.spec.[jt]s?(x)"],
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
  },
  moduleNameMapper: {
    // use local Vue2
    "^vue$": "<rootDir>/node_modules/vue3",
  },
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})`,
    "\\.pnp\\.[^\\/]+$",
  ],
};

module.exports = config
