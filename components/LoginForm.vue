<script setup>
import { onMounted } from "vue";
import { useRootStore } from "~/stores/useRootStore";

const { endpoint, init } = useAuth();

onMounted(() => {
  init();
});

const router = useRouter();

const rootStore = useRootStore()
const devMode = computed(() => rootStore.devMode)


const emit = defineEmits(['success'])

function handleSuccess() {
  useTrackEvent('login')
  emit("success")
}
</script>

<template>
  <ClientOnly>
    <hanko-auth v-if="!devMode" @hankoAuthSuccess="handleSuccess" :api="endpoint" />
    <FakeLogin v-else @success="handleSuccess"></FakeLogin>
  </ClientOnly>
</template>
