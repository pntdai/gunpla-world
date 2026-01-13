import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
