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
      name: "shell",
      remotes: {
        scamChecker: {
          type: "module",
          name: "scamChecker",
          entry: "http://localhost:3001/remoteEntry.js",
        },
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
      // Resolve @/* aliases inside @repo/ui package
      // "@": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
  server: {
    port: 3000,
  },
});
