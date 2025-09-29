import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // 👈 important for GitHub Pages
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
