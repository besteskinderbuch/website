// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("hanko-"),
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
});
