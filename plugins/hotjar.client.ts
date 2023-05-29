import VueHotjar from "vue-hotjar-next";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("process.env.HOTJAR_ID", process.env.HOTJAR_ID);
  if (!process.env.HOTJAR_ID) {
    console.warn("HOTJAR_ID is not set");
    return;
  }
  const id = Number.parseInt(process.env.HOTJAR_ID);
  console.log("id", id);
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  nuxtApp.vueApp.use(VueHotjar, {
    id,
    isProduction: process.env.NODE_ENV !== "production",
  });
});
