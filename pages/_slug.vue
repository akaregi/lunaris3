<template>
  <main>
    <h1 v-html="toWBRHTML(page.title)" />
    <h2>{{ page.published }}</h2>
    <nuxt-content :document="page" />
  </main>
</template>

<style scoped>
h1 {
  margin-bottom: 0;
}

h2 {
  margin-top: 0;
}
</style>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content(params.slug).fetch()

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
