import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // '@vue-bridge/runtime': '@vue-bridge/runtime/vue3',
    },
  },
  build: {
    lib: {
      entry: "src/main.js",
      name: "Vue3ExampleLib",
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
