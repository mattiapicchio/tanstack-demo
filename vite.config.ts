import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const root = path.resolve(__dirname, "./src");

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": root,
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
