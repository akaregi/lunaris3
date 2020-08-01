<template>
  <main>
    <h1>fedyya LUNARIS</h1>
    <section class="card" v-for="page in pages" :key="page.title">
      <p class="subtitle">{{ page.published }}</p>
      <nuxt-link class="title" :to="page.path">{{ page.title }}</nuxt-link>
    </section>
  </main>
</template>

<style scoped>
.card {
  margin-bottom: 1rem;
}

.card p {
  margin: 0;
}

.card a {
  text-decoration: none;
}

.card .title {
  font-size: 1.5rem;
}
</style>

<script>
export default {
  async asyncData ({ $content }) {
    const pages = await $content()
      .only(['title', 'published'])
      .sortBy('title', 'asc')
      .fetch()

    return { pages }
  }
}
</script>
