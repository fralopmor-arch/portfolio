<template>
  <main class="container mx-auto max-w-2xl p-4 prose dark:prose-invert">
    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>

<script setup>
// Fetch the content of content/blog/index.md
const { data: page } = await useAsyncData("blog-index", () => {
  return queryCollection("content").path("/blog").first();
});
</script>
