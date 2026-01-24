// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/hints',
    '@nuxt/image',
    '@pinia/nuxt',
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    customCollections: [{
      prefix: 'my',
      dir: './app/assets/icon'
    }]
  },

  content: {
    build: {
      markdown: {
        remarkPlugins: {
          'remark-math': {
            src: 'remark-math',
            options: {
              singleDollarTextMath: true,
            },
          },
        },
        rehypePlugins: {
          'rehype-katex': {
            src: 'rehype-katex',
            options: {
              tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']],
              },
            },
          },
        },

        highlight: {
          theme: {
            default: "one-light",
            dark: "one-dark-pro",
            sepia: "monokai",
          },
          langs: [
            "json",
            "js",
            "ts",
            "html",
            "css",
            "vue",
            "shell",
            "mdc",
            "md",
            "yaml",
            "c",
            "cpp",
            "java",
            "kotlin",
            "cmake",
            "go",
            "lua",
            "python",
            "bash",
          ],
        },
      },
    },
  },
})