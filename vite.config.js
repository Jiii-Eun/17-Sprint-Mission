import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr 옵션 : https://react-svgr.com/docs/options/
      //svg import할때 ?react 접미사 생략가능
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  esbuild: {
    //build에 console, debugger 제거
    drop: ["debugger", "console"],
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
