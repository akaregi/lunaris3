<template>
  <footer class="footer">
    <p>(C) 2020 AKANE AKAGI.</p>
    <p>この作品は<a href="https://creativecommons.org/licenses/by/4.0/">クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a>で提供されます。</p>
  </footer>
</template>

<style lang="postcss" scoped>
.footer {
  @apply my-16;
  @apply text-lg text-gray-500;

  & p {
    @apply m-0;
  }

  & a {
    @apply text-indigo-500;

    &:hover {
      @apply text-indigo-800;
    }
  }
}
</style>
