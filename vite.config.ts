import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const root = path.resolve(__dirname, "./src");

export default defineConfig({
  resolve: {
    alias: {
      "@": root,
    },
  },
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    // ...,
  ],
  server: {
    port: 3000,
  },
});
