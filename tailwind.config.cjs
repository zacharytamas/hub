/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Space Grotesk', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          main: 'rgb(var(--color-primary-main) / <alpha-value>)',
        },
        text: {
          body: 'rgb(var(--color-text-body) / <alpha-value>)',
          bold: 'rgb(var(--color-text-bold) / <alpha-value>)',
          heading: 'rgb(var(--color-text-heading) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
          selection: 'rgb(var(--color-text-selection) / <alpha-value>)',
        },

        bg: {
          body: 'rgb(var(--color-bg-body) / <alpha-value>)',
          code: 'rgb(var(--color-bg-code) / <alpha-value>)',
          selection: 'rgb(var(--color-bg-selection) / <alpha-value>)',
        },

        border: {
          code: 'rgb(var(--color-border-code) / <alpha-value>)',
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5': {
              color: 'rgb(var(--color-text-heading))',
            },

            '--tw-prose-body': 'rgb(var(--color-text-body))',
            '--tw-prose-headings': 'rgb(var(--color-text-heading))',
            '--tw-prose-lead': 'rgb(var(--color-text-body))',
            '--tw-prose-links': 'rgb(var(--color-text-body))',
            '--tw-prose-bold': 'rgb(var(--color-text-bold))',
            '--tw-prose-counters': 'rgb(var(--color-text-body))',
            '--tw-prose-bullets': 'rgb(var(--color-text-body))',
            '--tw-prose-hr': 'rgb(var(--color-text-muted))',
            '--tw-prose-quotes': 'rgb(var(--color-text-body))',
            '--tw-prose-quote-borders': 'rgb(var(--color-primary-main))',
            '--tw-prose-captions': 'rgb(var(--color-primary-heading))',
            '--tw-prose-quote-captions': 'rgb(var(--color-primary-heading))',
            '--tw-prose-code': 'rgb(var(--color-text-code))',
            '--tw-prose-pre-code': 'rgb(var(--color-text-code))',
            '--tw-prose-pre-bg': 'rgb(var(--color-bg-code))',
            '--tw-prose-th-borders': 'rgb(var(--color-text-muted))',
            '--tw-prose-td-borders': 'rgb(var(--color-text-muted))',
          },
        },
      }),
    },
  },

  plugins: [require('@tailwindcss/typography')],
}
