<template>
  <div class="pages">
    <h1>Pages</h1>
    <p><nuxt-link to="/">（最初の画面に戻る）</nuxt-link></p>
    <section class="card" v-for="page in pages" :key="page.title">
      <p class="subtitle">{{ page.published }}</p>
      <nuxt-link :to="page.path" class="title">{{ page.title }}</nuxt-link>
    </section>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 1rem;
}

.card p {
  margin: 0;
}

.card .title {
  font-size: 1.5rem;
}

.card .subtitle {
  color: var(--accent2);
}
</style>

<script>
export default {
  async asyncData ({ $content }) {
    const pages = await $content()
      .only(['title', 'published', 'path'])
      .sortBy('title', 'asc')
      .fetch()

    return { pages }
  },

  head () {
    return {
      title: 'Pages - fedyya LUNARIS'
    }
  }
}
</script>
