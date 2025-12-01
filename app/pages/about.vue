<template>
  <article class="prose dark:prose-invert max-w-none">
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<script setup>
const { data: page } = await useAsyncData("about", () => {
  return queryCollection("content").path("/about").first();
});
</script>
