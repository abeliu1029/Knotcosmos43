// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://abeliu1029.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex], 
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  devToolbar: { enabled: false }
});