<template>
  <article class="content">
    <h1>fedyya LUNARIS</h1>

    <page-list :pages="pages" />
  </article>
</template>

<script>
import PageList from '~/components/PageList.vue'

export default {
  async asyncData ({ $content }) {
    const index = await $content('docs/index').fetch()

    const pages = await $content()
      .only(['title', 'published', 'path'])
      .sortBy('title', 'asc')
      .fetch()

    return { index, pages }
  },

  components: {
    PageList
  }
}
</script>

<style lang="postcss">
h1 {
  @apply mb-16;
  @apply text-4xl font-bold;
}
</style>
