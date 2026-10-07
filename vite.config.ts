import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
  vite: {
    server: {
      proxy: {
        "/api": {
          target: process.env.VITE_API_BASE_URL ?? "https://vigia-vhyg.onrender.com",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  },
});
