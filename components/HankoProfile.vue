<script setup>
import { onMounted } from "vue";
const { endpoint, init } = useAuth();

onMounted(() => {
  init();
});
</script>

<template>
  <div>TODO</div>
</template>
