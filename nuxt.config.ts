// https://nuxt.com/docs/api/configuration/nuxt-config

const devStage = process.env.NODE_ENV !== "production";

const cookiebot = {
  id: "Cookiebot",
  src: "https://consent.cookiebot.com/uc.js",
  "data-cbid": "1fdf56a9-b6af-4a95-acd2-3666a03175f1",
  "data-blockingmode": "auto",
};

const script = [];
if (!devStage) {
  script.push(cookiebot);
  script.push({
    async: true,
    src: "https://static.hotjar.com/c/hotjar-3509475.js?sv=6"
  });
}



export default defineNuxtConfig({
  app: {
    head: {
      script,
    },
  },

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
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "nuxt-gtag",
    "nuxt-icon",
    '@vueuse/nuxt',
  ],

  i18n: {
    vueI18n: "./i18n.config.ts",
  },

  gtag: {
    id: process.env.GTAG_ID,
    initialConsent: true,
  },

  devtools: {
    enabled: false,
  },
});
