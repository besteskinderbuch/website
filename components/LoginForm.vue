<script setup>
import { onMounted } from "vue";
import { useRootStore } from "~/stores/useRootStore";

const { endpoint, init } = useAuth();

onMounted(() => {
  init();
});

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
    <hanko-auth v-if="!devMode" @hankoAuthSuccess="redirectAfterLogin" :api="endpoint" />
    <FakeLogin v-else></FakeLogin>
  </ClientOnly>
</template>
