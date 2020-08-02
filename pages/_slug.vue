<template>
  <div class="page">
    <h1 v-html="toWBRHTML(page.title)" />
    <h2>{{ page.published }}</h2>
    <nuxt-content :document="page" />
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 0;
}

h2 {
  margin-top: 0;
  color: var(--accent2);
}
</style>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const page = await $content(params.slug)
      .fetch()
      .catch(e => {
        error({ statusCode: 404, message: "404 Not Found" })
      })

    return { page }
  },

  methods: {
    toWBRHTML (string) {
      return string
        .replace(/_/g, '_<wbr/>')
        .replace('/.', '/.<wbr/>')
        .replace(/=/g, '=<wbr/>')
    }
  },

  head () {
    return {
      title: `${this.page.title} - fedyya LUNARIS`
    }
  }
}
</script>
