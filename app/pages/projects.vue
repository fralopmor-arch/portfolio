<template>
  <article class="prose dark:prose-invert max-w-none">
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<script setup>
const { data: page } = await useAsyncData("projects-page", () =>
  queryCollection("content").path("/projects").first()
);
</script>
