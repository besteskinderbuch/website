  
<script setup>
import { useContentStore } from '~/stores/useContentStore';
import { useAccountStore } from "~/stores/useAccountStore";

const contentStore = useContentStore();
const title = contentStore.title;
const subtitle = contentStore.subtitle;


const accountStore = useAccountStore();

const loggedIn = ref(false);
onMounted(() => {
    const { isLoggedIn} = useAuth();

    watch(isLoggedIn, (newVal) => {
        loggedIn.value = newVal
    }, { immediate: true })
});
</script>

<template>
  <div class="relative isolate overflow-hidden">
    <div class="min-h-screen md:h-auto relative mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-10">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
        <h1 class="lg:mt-20 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ title }}</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">{{ subtitle }}</p>
        <div class="mt-10 flex items-center gap-x-6">
          <BasicLink v-if="!loggedIn" type="button" href="/login">Direkt loslegen</BasicLink>
          <BasicLink v-else type="button" href="/stories">Zu den Geschichten</BasicLink>
          <BasicLink href="/help" size="md">Erfahre mehr <span aria-hidden="true">→</span></BasicLink>
        </div>
      </div>
      <div class="absolute lg:static top-0 lg:top-auto opacity-30 lg:opacity-100 -z-10 lg:z-auto mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <nuxt-img provider="imgix" src="/heroteaser.png" alt="App screenshot" class="w-[76rem] rounded-md " :modifiers="{ auto: 'format,compress' }" fetchpriority="high"/>
        </div>
      </div>
    </div>
  </div>
</template>
