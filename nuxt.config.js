import _content from '@nuxt/content'

export default {
  target: 'static',

  head: {
    title: 'fedyya LUNARIS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'fedyya Lunaris では「あかれぎ」の紡いだヒュムノスの詩を収録しています。' },
      { hid: 'author', name: 'author', content: 'AKANE AKAGI (akaregi)' },
      { hid: 'theme-color', name: 'theme-color', content: '#02020e' },

      // OGP
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'fedyya LUNARIS' },

      // Twitter OGP
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@akgmoegi' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@akgmoegi' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['~/assets/tailwind.css'],

  components: true,

  modules: ['@nuxt/content', '@nuxtjs/sitemap'],

  generate: {
    fallback: true,
  },

  content: {
    markdown: {
      remarkPlugins: ['remark-breaks']
    }
  },

  sitemap: {
    hostname: 'https://lunaris.fedyya.net',
    async routes () {
      const $content = _content.$content

      const contents = await $content()
        .only(['title', 'path'])
        .fetch()

      return contents.map(content => {
        return {
          url: content.path,
          changefreq: 'monthly',
          priority: 1
        }
      })
    }
  },

  build: {
    postcss: {
      plugins: {
        'tailwindcss': {}
      },

      preset: {
        stage: 0
      }
    }
  }
}
