import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server', // Optional, but useful for dynamic SSR
  adapter: netlify(),
  integrations: [tailwind()],
});

