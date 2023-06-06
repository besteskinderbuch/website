const devStage = process.env.NODE_ENV !== "production";

const cookiebot = {
  id: "Cookiebot",
  src: "https://consent.cookiebot.com/uc.js",
  "data-cbid": "1fdf56a9-b6af-4a95-acd2-3666a03175f1",
  "data-blockingmode": "auto",
};

const hotjarWindow = {
  children: `window._hjSettings={hjid:${process.env.HOTJAR_ID},hjsv:6};`,
};

const hotjar = {
  id: "Hotjar",
  src: `https://static.hotjar.com/c/hotjar-${process.env.HOTJAR_ID}.js?sv=6`,
};

const script = [];
if (!devStage) {
  script.push(cookiebot);
  script.push(hotjarWindow);
  script.push(hotjar);
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

  image: {
    imgix: {
      baseURL: "https://besteskinderbuch-8301.imgix.net",
    },
  },

  plugins: [
    "~/plugins/rating.client.ts",
  ],
  components: {
    global: true,
    dirs: ["~/components/section", "~/components/global", "~/components/"],
  },

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "nuxt-gtag",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/robots",
    "nuxt-delay-hydration",
    "nuxt-simple-sitemap",
  ],

  sitemap: {
    siteUrl: "https://bestes-kinderbuch.de",
  },

  delayHydration: {
    mode: "mount",
  },

  robots: {
    rules: [
      {
        UserAgent: "*",
        Allow: "/",
      },
      {
        UserAgent: "*",
        Disallow: "/abos/*",
      }
    ],
  },

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
  runtimeConfig: {
    public: {
      hotjarId: process.env.HOTJAR_ID,
      gtagId: process.env.GTAG_ID,
    },
  },
});
