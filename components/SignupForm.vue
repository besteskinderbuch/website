<script setup>
import { onMounted } from "vue";
const { endpoint, init } = useAuth();

onMounted(() => {
  init();
});

const router = useRouter();
const redirectAfterLogin = () => {
  useTrackEvent('sign_up')
  router.push({ path: "/" });
};
</script>

<template>
  <ClientOnly>
    <div>TODO</div>
  </ClientOnly>
</template>
