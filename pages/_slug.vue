<template>
  <article class="content prose">
    <h1 class="title" v-html="toWBRHTML(page.title)" />
    <h2 class="date">{{ page.published }}</h2>

    <nuxt-content :document="page" />
  </article>
</template>

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

<style lang="postcss">
.content {
  @apply pt-8;
}

.nuxt-content {
  @apply my-16;
}

.prose {
  @apply text-xl;

  & .title {
    @apply m-0;
    @apply text-4xl font-bold;
  }

  & .date {
    @apply m-0;
    @apply text-3xl text-gray-500;
  }
}
</style>
