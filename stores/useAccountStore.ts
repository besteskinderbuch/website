import { defineStore } from "pinia";

import type { User as Userdata } from "@teamhanko/hanko-frontend-sdk";


type User = {
  type: "guest" | "user";
  data?: Userdata;
}

export const useAccountStore = defineStore("account", () => {
  const user: Ref<User | undefined>= ref();

  const loggedIn = computed(() => user.value && user.value.type === "user");

  return { user, loggedIn };
});
