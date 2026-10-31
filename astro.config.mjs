import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { groups } from './src/data/cards.ts';

const linkedPages = groups
  .flatMap((group) => group.cards)
  .filter((card) => !card.internal)
  .map((card) => card.href);

export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
  build: { format: 'directory' },
  integrations: [sitemap({ customPages: linkedPages })],
  vite: { plugins: [tailwindcss()] },
});
