<script setup>
import { onMounted } from "vue";
const { endpoint, init } = useAuth();

onMounted(() => {
  init();
});

const router = useRouter();
const redirectAfterLogin = () => {
  useTrackEvent('login')
  router.push({ path: "/" });
};
</script>

<template>
  <ClientOnly>
    <hanko-auth @hankoAuthSuccess="redirectAfterLogin" :api="endpoint" />
  </ClientOnly>
</template>
