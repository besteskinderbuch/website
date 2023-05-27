<script setup>
import { onMounted } from "vue";
const { endpoint, init } = useAuth();

onMounted(() => {
  init();
});
</script>

<template>
  <hanko-profile :api="endpoint" />
</template>
