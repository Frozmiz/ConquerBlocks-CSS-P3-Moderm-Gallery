import { defineConfig } from "vite";

export default defineConfig({
  base: "/ConquerBlocks-CSS-P3-Moderm-Gallery/",
  build: {
    rollupOptions: {
      input: [
        "index.html",
        "location.html",
      ],
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
