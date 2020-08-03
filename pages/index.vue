<template>
  <div class="index">
    <h1>{{ index.title }}</h1>
    <p><nuxt-link to="pages">一覧を見る</nuxt-link></p>
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
