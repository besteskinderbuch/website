import { Hanko } from "@teamhanko/hanko-frontend-sdk";
import { register } from "@teamhanko/hanko-elements";
import { useAccountStore } from "~/stores/useAccountStore";
import { useRootStore } from "~/stores/useRootStore";
import { useLocalStorage } from "@vueuse/core";
import { storeToRefs } from "pinia";

const endpoint = "https://a9e87d58-7368-4dfb-a2c7-2c68db54eef2.hanko.io";
const hanko = new Hanko(endpoint);

const initialized = ref(false);

export default () => {
  const accountStore = useAccountStore();
  const { user } = storeToRefs(accountStore);

  const rootStore = useRootStore();
  const devMode = computed(() => rootStore.devMode);


  function init() {
    if (!initialized.value) {
      register({ shadow: true }).catch((error) => {
        console.error(error);
      });
      initialized.value = true;
    }
  }

  async function logout() {
    if (devMode.value) {
      const data = useLocalStorage("user-data", null)
      data.value = null
    }else{
      await hanko.user.logout();
    }
    user.value = { type: "guest" };
  }

  async function getCurrentUser() {
    if (!user.value || user.value.type === "guest") {
      if (devMode.value) {
        const data = useLocalStorage("user-data", null)
        if(data.value){
          user.value = { type: "user", data: data.value };
        }
      } else {
        try {
          const data = await hanko.user.getCurrent();
          user.value = { type: "user", data };
        } catch (e) {
          user.value = { type: "guest" };
        }
      }
    }
    return user.value;
  }

  return {
    user,
    init,
    endpoint,
    logout,
    getCurrentUser,
  };
};
