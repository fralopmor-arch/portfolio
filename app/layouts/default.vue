<template>
  <div class="min-h-screen container mx-auto max-w-4xl">
    <header class="flex justify-between items-start md:items-center mt-5">
      <div class="flex items-center md:space-x-12">
        <div class="hidden md:block">
          <NuxtLink
            to="/"
            class="text-xl font-semibold p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >Curro Lopez
          </NuxtLink>
        </div>
        <Menu />
      </div>
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>
    <main class="p-4 mt-8">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s | Curro",
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
/* global UI / dark-mode baseline */
:root {
  color-scheme: light dark;
}
body {
  font-family:
    "Roboto",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial;
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
  margin: 0;
}
a {
  @apply underline-offset-2;
}
</style>
