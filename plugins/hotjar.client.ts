import VueHotjar from "vue-hotjar-next";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  if (!config.public.hotjarId) {
    console.warn("hotjarId is not set");
    return;
  }
  const id = Number.parseInt(config.public.hotjarId, 10);

  nuxtApp.vueApp.use(VueHotjar, {
    id,
    isProduction: !!config.public.hotjarId,
  });
});
