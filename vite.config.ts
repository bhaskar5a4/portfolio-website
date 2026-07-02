import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Standard Vite React SPA build (static output in dist/) — deploys on Vercel, Netlify, etc.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
