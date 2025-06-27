import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        //build 시에 모든 console.log를 제거
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@layouts", replacement: "/src/layouts" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@pages", replacement: "/src/pages" },
    ],
  },
});
