import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
const root = path.resolve(__dirname, "./src");
const ReactCompilerConfig = { target: "19" };
export default defineConfig({
    resolve: {
        alias: {
            "@": root,
        },
    },
    plugins: [
        TanStackRouterVite({ autoCodeSplitting: true }),
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
            },
        }),
        // React(),
        // ...,
    ],
    server: {
        port: 3000,
    },
});
