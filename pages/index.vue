<template>
  <div class="index">
    <h1>{{ index.title }}</h1>
    <nuxt-link to="pages">一覧を見る</nuxt-link>
    <nuxt-content :document="index" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const index = await $content('docs/index').fetch()
    return { index }
  }
}
</script>
