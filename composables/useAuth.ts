import { Hanko } from "@teamhanko/hanko-frontend-sdk";
import { register } from "@teamhanko/hanko-elements";
import { useAccountStore } from "~/stores/useAccountStore";

const endpoint = "https://a9e87d58-7368-4dfb-a2c7-2c68db54eef2.hanko.io";
const hanko = new Hanko(endpoint);

const initialized = ref(false);

export default () => {
  const accountStore = useAccountStore();
  const { user } = toRefs(accountStore);

  function init() {
    if (!initialized.value) {
      register({ shadow: true }).catch((error) => {
        console.error(error);
      });
      initialized.value = true;
    }
  }

  async function logout() {
    await hanko.user.logout();
    user.value = { type: "guest" };
  }

  async function getCurrentUser() {
    console.log("getCurrentUser", user.value);
    if (!user.value || user.value.type === "guest") {
  
      try {
        const data = await hanko.user.getCurrent();
        console.log("getCurrentUse request",data);
        user.value = { type: "user", data };
      } catch (e) {
        user.value = { type: "guest" };
      }
    }
    console.log("getCurrentUser end ", user.value);
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
