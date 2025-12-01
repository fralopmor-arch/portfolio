<template>
  <article class="prose dark:prose-invert max-w-none">
    <ContentRenderer v-if="page" :value="page" />
    <div v-else class="prose">
      <h1>Document not found (404)</h1>
      <p>The index page could not be found.</p>
    </div>
  </article>
</template>

<script setup>
const { data: page } = await useAsyncData("home-page", () =>
  queryCollection("content").path("/").first()
);
</script>
