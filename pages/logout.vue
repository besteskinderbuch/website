<script setup>
import { useAccountStore } from "~/stores/useAccountStore";

const { logout } = useAuth();

onMounted(async () => {
  try {
    await logout();
  } catch (e) {
    console.error(e);
  }
});


const accountStore = useAccountStore();
accountStore.user = null;
</script>

<template></template>
