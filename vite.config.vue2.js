import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@vue-bridge/runtime": "@vue-bridge/runtime/vue2",
    },
  },
  build: {
    // uncomment this line to bundle into the vue3 package's dist folder
    outDir: "./dist/vue2",
    lib: {
      entry: "./src/main.js",
      name: "Vue2ExampleLib",
      formats: ["es", "cjs"],
    },
    minify: false,
    rollupOptions: {
      external: [
        "vue",
        "vue-demi",
        "@vue/composition-api",
        "@vue-bridge/runtime",
      ],
    },
  },
});
