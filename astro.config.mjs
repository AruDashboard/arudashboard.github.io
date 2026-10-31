import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
  build: { format: 'directory' },
  // sitemap 需要 site 才会生成；发布时工作流会注入 SITE_URL。
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
