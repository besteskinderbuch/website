import { defineStore } from "pinia";

import type { User as Userdata } from "@teamhanko/hanko-frontend-sdk";

type User = {
  type: "guest" | "user";
  data?: Userdata;
  subscription?: string;
}

export const useAccountStore = defineStore("account", () => {
  const user: Ref<User | undefined>= ref();

  const loggedIn = computed(() => user.value && user.value.type === "user");

  const wordsPerMin= ref(160);

  return { user, loggedIn };
});
