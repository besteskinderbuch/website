import { useAccountStore } from "~/stores/useAccountStore";
import { useRootStore } from "~/stores/useRootStore";
import { useLocalStorage } from "@vueuse/core";
import { storeToRefs } from "pinia";
import {
  useFirebaseAuth,
  getCurrentUser as getCurrentFirebaseUser,
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
  sendPasswordResetEmail as sendPasswordResetEmailFirebase,
  confirmPasswordReset as confirmPasswordResetFirebase,
} from "firebase/auth";

export default () => {
  const accountStore = useAccountStore();
  const { user , isLoggedIn } = storeToRefs(accountStore);

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

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential) {
      console.error("credential not found");
      return;
    }
    const token = credential.accessToken;
    user.value = { type: "user", data: result.user };
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
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      user.value = { type: "user", data: result.user };
    } catch (e) {
      console.error(e);
    }
  }

  async function update(displayName: string) {
    if (!auth) {
      console.error("auth not found");
      return;
    }

    if (!auth.currentUser) {
      console.log("auth.currentUser", auth.currentUser);
      return;
    }

    await updateProfile(auth.currentUser, {
      displayName,
    });
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


  async function sendPasswordResetEmail(email:string) {
    if (!auth) {
      console.error("auth not found");
      return;
    }

    await sendPasswordResetEmailFirebase(auth, email);
  }

  async function confirmPasswordReset(oobCode:string, newPassword:string) {
    if (!auth) {
      console.error("auth not found");
      return;
    }

    await confirmPasswordResetFirebase(auth, oobCode, newPassword);
  }


  async function getCurrentUser() {
    if (!user.value || user.value.type === "guest") {
     
      try {
        const data = await getCurrentFirebaseUser();
        if (!data) {
          user.value = { type: "guest" };
          return user.value;
        }
        user.value = {
          type: "user",
          data,
          subscription: "tier-littlebookworm",
        };
      } catch (e) {
        console.error(e);
        user.value = { type: "guest" };
      }
    }
    return user.value;
  }
  
  return {
    user,
    isLoggedIn,
    getCurrentUser,
    createUser,
    update,
    sendVerificationMail,
    verifyEmail,
    loginWithPasswordAndEmail,
    loginWithGoogle,
    logout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
};
