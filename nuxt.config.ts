
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
  routeRules: {
    '/': { prerender: true },
    '/stories': { ssr: true },
    '/stories/*': { ssr: true },
    '/articles': { prerender: true },
    '/articles/*': { prerender: true },
    '/login': { prerender: true },
    '/signup': { prerender: true },
    '/impressum': { prerender: true },
    '/dataprivacy': { prerender: true },
    '/books': { prerender: true },
    '/forgotPassword': { prerender: true },
    '/help': { prerender: true },
    '/roadmap': { prerender: true },
    '/benefits': { prerender: true },
    '/abos': { prerender: true },
    '/abos/*': { prerender: true },
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  app: {
    head: {
      script,
      htmlAttrs: {
        lang: "de",
      },
      link: [
        {
          rel: "preconnect",
          href: "https://consent.cookiebot.com/",
        },
        {
          rel: "preconnect",
          href: " https://consentcdn.cookiebot.com",
        },
        {
          rel: "preconnect",
          href: "https://static.hotjar.com/",
        },
        {
          rel: "preconnect",
          href: "https://script.hotjar.com/",
        },
        {
          rel: "preconnect",
          href: "https://apis.google.com/",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
      meta: [
        {
          name: "msapplication-TileColor",
          content: "#da532c",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
    },
  },

  css: ["~/assets/css/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    imgix: {
      baseURL: "https://besteskinderbuch-8301.imgix.net",
    },
  },

  plugins: ["~/plugins/rating.client.ts", "~/plugins/notifications.client.ts"],
  components: {
    global: true,
    dirs: ["~/components/section", "~/components/global", "~/components/"],
  },

  modules: [
    "@pinia/nuxt",
    "nuxt-gtag",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "nuxt-delay-hydration",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
    '@vueuse/nuxt',
  ],

  robots: {
    sitemap: `${process.env.PUBLIC_SITE_URL}/sitemap.xml`,
    indexable: true,
    siteUrl: process.env.PUBLIC_SITE_URL,
  },

  sitemap: {
    siteUrl: process.env.PUBLIC_SITE_URL,
  },

  delayHydration: {
    mode: "mount",
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
      siteUrl: process.env.PUBLIC_SITE_URL || "https://bestes-kinderbuch.de",
      authDomain: process.env.AUTH_DOMAIN || "bestes-kinderbuch.firebaseapp.com",
    },
  },
});
