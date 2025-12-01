<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{ active: link.id === activeId }"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks
        v-if="link.children?.length"
        :links="link.children"
        :level="level + 1"
        :active-id="activeId"
      />
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();
const props = defineProps({
  links: { type: Array, default: () => [] },
  level: { type: Number, default: 0 },
  activeId: { type: String, default: null },
});
</script>

<style scoped>
a.active {
  font-weight: 600;
}
</style>
