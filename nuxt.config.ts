// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
