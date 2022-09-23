import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path"
import dtsPlugin from "vite-plugin-dts"
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

// See https://medium.com/@ftaioli/using-node-js-builtin-modules-with-vite-6194737c2cd2
// about how I polyfilled Node.js Events

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "vue-awaitable-modal",
      fileName: format => `vue-awaitable-modal.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        }
      },
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill()
      ]
    },
  },
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      events: 'rollup-plugin-node-polyfills/polyfills/events',
    },
  },
  plugins: [
    vue(),
    dtsPlugin({
      outputDir: ['dist/types'],
      skipDiagnostics: false,
      logDiagnostics: true,
    }),
  ]
})
