import { defineConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  build: {
    outDir: "build",
  },
  resolve: {
    dedupe: ["vite-tsconfig-paths"],
  },
  server: {
    host: true,
    open: true,
    port: 3000,
    strictPort: true,
  },
});
