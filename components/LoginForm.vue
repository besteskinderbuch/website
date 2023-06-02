<script setup>
import { useRootStore } from "~/stores/useRootStore";


const { login } = useAuth();

const router = useRouter();
const redirectAfterLogin = () => {
  useTrackEvent('login')
  router.push({ path: "/" });
};

const rootStore = useRootStore()
const devMode = computed(() => rootStore.devMode)
</script>

<template>
  <ClientOnly>
    <button v-if="devMode" @click="login">anmelden</button>
    <FakeLogin v-else></FakeLogin>
  </ClientOnly>
</template>
