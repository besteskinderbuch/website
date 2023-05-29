import VueHotjar from "vue-hotjar-next";

export default defineNuxtPlugin((nuxtApp) => {
  if (!process.env.HOTJAR_ID) {
    return;
  }
  const id = Number.parseInt(process.env.HOTJAR_ID);
  nuxtApp.vueApp.use(VueHotjar, {
    id,
    isProduction: process.env.NODE_ENV !== "production",
  });
});
