<template>
  <div>
    <section class="card" v-for="page in pages" :key="page.title">
      <p class="date">{{ page.published }}</p>
      <nuxt-link :to="page.path" class="title">{{ page.title }}</nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  props: ['pages'],

  async asyncData ({ $content }) {
    const pages = await $content()
      .only(['title', 'published', 'path'])
      .sortBy('title', 'asc')
      .fetch()

    return { pages }
  }
}
</script>

<style lang="postcss">
.card {
  @apply my-4;

  & .title {
    @apply text-2xl font-bold text-indigo-600;
  }

  & .date {
    @apply m-0;
    @apply text-gray-500;
  }
}
</style>
