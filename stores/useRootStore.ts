import { defineStore } from "pinia";

export const useRootStore = defineStore("root", () => {
  const devMode = ref(process.env.NODE_ENV !== "production")
  return { devMode };
});
