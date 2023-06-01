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
    <div v-if="!devMode">TODO</div>
    <FakeLogin v-else></FakeLogin>
  </ClientOnly>
</template>
