import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import remarkCollapse from 'remark-collapse'
import remarkToc from 'remark-toc'

export default defineConfig({
  site: 'https://zacharytamas.com',
  integrations: [tailwind(), react(), sitemap()],

  markdown: {
    remarkPlugins: [
      [remarkToc, { tight: true, parents: ['root', 'listItem'] }],
      [remarkCollapse, { test: 'Table of contents' }],
    ],
  },
})
