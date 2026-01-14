import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "scamChecker",
      filename: "remoteEntry.js",
      library: {
        type: "module",
      },
      exposes: {
        "./App": "./src/App.tsx",
        "./RemoteWidget": "./src/RemoteWidget.tsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.2.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.2.0",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@repo/contracts": path.resolve(
        __dirname,
        "../../packages/contracts/src"
      ),
      // Resolve @/* aliases inside @repo/ui package
      // "@": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
  server: {
    port: 3001,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
