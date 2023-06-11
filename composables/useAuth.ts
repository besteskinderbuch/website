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
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  applyActionCode,
  updateProfile,
} from "firebase/auth";

export default () => {
  const accountStore = useAccountStore();
  const { user } = storeToRefs(accountStore);

  const rootStore = useRootStore();
  const devMode = computed(() => rootStore.devMode);

  const auth = useFirebaseAuth();

  async function loginWithGoogle() {
    if (!auth) {
      console.error("auth not found");
      return;
    }

    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
  }

  async function verifyEmail(oobCode: string) {
    if (!auth) {
      console.error("auth not found");
      return;
    }

    await applyActionCode(auth, oobCode);
  }

  async function sendVerificationMail() {
    if (!auth) {
      console.error("auth not found");
      return;
    }

    if (!auth.currentUser) {
      console.log("auth.currentUser", auth.currentUser);
      return;
    }

    await sendEmailVerification(auth.currentUser);
  }

  async function loginWithPasswordAndEmail(email: string, password: string) {
    if (!auth) {
      console.error("auth not found");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    } catch (e) {
      console.error(e);
    }
  }

  async function update(displayName: string){
    if (!auth) {
      console.error("auth not found");
      return;
    }

    if (!auth.currentUser) {
      console.log("auth.currentUser", auth.currentUser);
      return;
    }

    await updateProfile(auth.currentUser,{
      displayName,
    })

  }

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
    if (!auth) {
      console.error("auth not found");
      return;
    }
    await signOut(auth);

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
    getCurrentUser,
    createUser,
    update,
    sendVerificationMail,
    verifyEmail,
    loginWithPasswordAndEmail,
    loginWithGoogle,
    logout,
  };
};
