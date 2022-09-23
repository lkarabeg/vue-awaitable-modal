// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import dtsPlugin from "vite-plugin-dts";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
var __vite_injected_original_dirname = "C:\\Users\\leok\\Source\\vue-awaitable-modal";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/main.ts"),
      name: "vue-awaitable-modal",
      fileName: (format) => `vue-awaitable-modal.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      },
      plugins: [
        rollupNodePolyFill()
      ]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      events: "rollup-plugin-node-polyfills/polyfills/events"
    }
  },
  plugins: [
    vue(),
    dtsPlugin({
      outputDir: ["dist_types"],
      skipDiagnostics: false,
      logDiagnostics: true
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsZW9rXFxcXFNvdXJjZVxcXFx2dWUtYXdhaXRhYmxlLW1vZGFsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsZW9rXFxcXFNvdXJjZVxcXFx2dWUtYXdhaXRhYmxlLW1vZGFsXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9sZW9rL1NvdXJjZS92dWUtYXdhaXRhYmxlLW1vZGFsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiXG5pbXBvcnQgZHRzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIlxuaW1wb3J0IHJvbGx1cE5vZGVQb2x5RmlsbCBmcm9tICdyb2xsdXAtcGx1Z2luLW5vZGUtcG9seWZpbGxzJ1xuaW1wb3J0IHsgTm9kZU1vZHVsZXNQb2x5ZmlsbFBsdWdpbiB9IGZyb20gJ0Blc2J1aWxkLXBsdWdpbnMvbm9kZS1tb2R1bGVzLXBvbHlmaWxsJ1xuXG4vLyBTZWUgaHR0cHM6Ly9tZWRpdW0uY29tL0BmdGFpb2xpL3VzaW5nLW5vZGUtanMtYnVpbHRpbi1tb2R1bGVzLXdpdGgtdml0ZS02MTk0NzM3YzJjZDJcbi8vIGFib3V0IGhvdyBJIHBvbHlmaWxsZWQgTm9kZS5qcyBFdmVudHNcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbGlicmFyeS50c1wiKSxcbiAgICAgIG5hbWU6IFwidnVlLWF3YWl0YWJsZS1tb2RhbFwiLFxuICAgICAgLy8gZm9ybWF0czogWydlcyddLFxuICAgICAgLy8gZmlsZU5hbWU6IGBsaWItdGVzdGBcbiAgICAgIGZpbGVOYW1lOiBmb3JtYXQgPT4gYHZ1ZS1hd2FpdGFibGUtbW9kYWwuJHtmb3JtYXR9LmpzYFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICAvLyBFbmFibGUgcm9sbHVwIHBvbHlmaWxscyBwbHVnaW5cbiAgICAgICAgLy8gdXNlZCBkdXJpbmcgcHJvZHVjdGlvbiBidW5kbGluZ1xuICAgICAgICByb2xsdXBOb2RlUG9seUZpbGwoKVxuICAgICAgXVxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6e1xuICAgIGFsaWFzOntcbiAgICAgICdAJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgZXZlbnRzOiAncm9sbHVwLXBsdWdpbi1ub2RlLXBvbHlmaWxscy9wb2x5ZmlsbHMvZXZlbnRzJyxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZHRzUGx1Z2luKHtcbiAgICAgIG91dHB1dERpcjogWydkaXN0X3R5cGVzJ10sXG4gICAgICAvLyAvLyBpbmNsdWRlOiBbJ3NyYy9pbmRleC50cyddLFxuICAgICAgLy8gLy8gZXhjbHVkZTogWydzcmMvaWdub3JlJ10sXG4gICAgICAvLyAvLyBhbGlhc2VzRXhjbHVkZTogWy9eQHZ1ZS1hd2FpdGFibGUtbW9kYWwvXSxcbiAgICAgIC8vIHN0YXRpY0ltcG9ydDogdHJ1ZSxcbiAgICAgIHNraXBEaWFnbm9zdGljczogZmFsc2UsXG4gICAgICBsb2dEaWFnbm9zdGljczogdHJ1ZSxcbiAgICAgIC8vIHJvbGx1cFR5cGVzOiB0cnVlLFxuICAgICAgLy8gaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZVxuICAgIH0pLFxuICAgIC8vIE5vZGVNb2R1bGVzUG9seWZpbGxQbHVnaW4oKVxuICBdXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFTLG9CQUFvQjtBQUNqVixPQUFPLFNBQVM7QUFDaEIsWUFBWSxVQUFVO0FBQ3RCLE9BQU8sZUFBZTtBQUN0QixPQUFPLHdCQUF3QjtBQUovQixJQUFNLG1DQUFtQztBQVd6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFZLGFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDL0MsTUFBTTtBQUFBLE1BR04sVUFBVSxZQUFVLHVCQUF1QjtBQUFBLElBQzdDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBR1AsbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUTtBQUFBLElBQ04sT0FBTTtBQUFBLE1BQ0osS0FBVyxhQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNyQyxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxNQUNSLFdBQVcsQ0FBQyxZQUFZO0FBQUEsTUFLeEIsaUJBQWlCO0FBQUEsTUFDakIsZ0JBQWdCO0FBQUEsSUFHbEIsQ0FBQztBQUFBLEVBRUg7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
