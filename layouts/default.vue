<template>
  <main>
    <nuxt />

    <Footer />
  </main>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="postcss">
body {
  @apply
    text-xl font-sans text-gray-800
    antialiased subpixel-antialiased
    leading-normal;
  @apply max-w-screen-sm mr-auto ml-auto;
  @apply bg-gray-100;

  @apply my-16 px-8;
}
</style>
