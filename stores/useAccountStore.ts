import { defineStore } from "pinia";
import type { User as UserData } from "firebase/auth";

type User = {
  type: "guest" | "user";
  data?: UserData;
  subscription?: string;
};

export const useAccountStore = defineStore("account", () => {
  const user: Ref<User | undefined> = ref();

  const isLoggedIn = computed(() => user.value?.type === "user" && user.value?.data?.emailVerified);

  const wordsPerMin = ref(160);

  return { user, isLoggedIn, wordsPerMin };
});
