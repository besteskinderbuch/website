<script setup>
const { createUser } = useAuth();
import { useRootStore } from "~/stores/useRootStore";


async function signup() { 
  await createUser("dennis.maass.privat@googlemal.com", "123456")
  }

const router = useRouter();
const redirectAfterLogin = () => {
  useTrackEvent('sign_up')
  router.push({ path: "/" });
};


const rootStore = useRootStore()
const devMode = computed(() => rootStore.devMode)
</script>

<template>
  <ClientOnly>
    <button v-if="devMode" @click="signup">registieren</button>
  </ClientOnly>
</template>
