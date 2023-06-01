import { useAccountStore } from "~/stores/useAccountStore";
import { useRootStore } from "~/stores/useRootStore";
import { useLocalStorage } from "@vueuse/core";
import { storeToRefs } from "pinia";


export default () => {
  const accountStore = useAccountStore();
  const { user } = storeToRefs(accountStore);

  const rootStore = useRootStore();
  const devMode = computed(() => rootStore.devMode);


  async function logout() {
    if (devMode.value) {
      const data = useLocalStorage("user-data", null)
      data.value = null
    }else{
     //TODO: 
    }
    user.value = { type: "guest" };
  }

  async function getCurrentUser() {
    if (!user.value || user.value.type === "guest") {
      if (devMode.value) {
        const data = useLocalStorage("user-data", null)
        if(data.value){
          user.value = { type: "user", data: data.value , subscription: "tier-littlebookworm"};
        }
      } else {
        try {
          // TODO: 
          const data= {}
          user.value = { type: "user", data,subscription: "tier-littlebookworm" };
        } catch (e) {
          user.value = { type: "guest" };
        }
      }
    }
    return user.value;
  }

  return {
    user,
    logout,
    getCurrentUser,
  };
};
