import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
// Custom sitemap.xml.ts + sitemap-index.xml.ts are used instead of @astrojs/sitemap
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://learnenglish.life',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});
