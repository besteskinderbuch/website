import { useAccountStore } from "~/stores/useAccountStore";
import { useRootStore } from "~/stores/useRootStore";
import { useLocalStorage } from "@vueuse/core";
import { storeToRefs } from "pinia";
import {
  useFirebaseAuth,
  useCurrentUser as getCurrentFirebaseUser,
} from "vuefire";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification
} from "firebase/auth";
import { verify } from "crypto";

export default () => {
  const accountStore = useAccountStore();
  const { user } = storeToRefs(accountStore);

  const rootStore = useRootStore();
  const devMode = computed(() => rootStore.devMode);

  const auth = useFirebaseAuth();

  async function withGoogle() {
    if (!auth) {
      console.error("auth not found");
      return;
    }

    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
  }

function verify(){
  sendEmailVerification()
}


  async function login() {}
  async function createUser(email: string, password: string) {
    if (!auth) {
      console.error("auth not found");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("userCredential", userCredential);
    } catch (e) {
      console.error(e);
    }
  }

  async function logout() {
    if (devMode.value) {
      const data = useLocalStorage("user-data", null);
      data.value = null;
    } else {
      //TODO:
    }
    user.value = { type: "guest" };
  }

  async function getCurrentUser() {
    if (!user.value || user.value.type === "guest") {
      if (devMode.value) {
        const data = useLocalStorage("user-data", null);
        if (data.value) {
          user.value = {
            type: "user",
            data: data.value,
            subscription: "tier-littlebookworm",
          };
        }
      } else {
        try {
          const data = getCurrentFirebaseUser();
          console.log("data", data);
          user.value = {
            type: "user",
            data,
            subscription: "tier-littlebookworm",
          };
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
    createUser,
    login,
  };
};
