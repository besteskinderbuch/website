<script setup>
import { storeToRefs } from 'pinia'
import { useContentStore } from "~/stores/useContentStore";
import { useAccountStore } from "~/stores/useAccountStore";

const accountStore = useAccountStore();
const { loggedIn } = storeToRefs(accountStore);

const contentStore = useContentStore();
const freeStories = computed(() => contentStore.freeStories);
const publicStories = computed(() => contentStore.publicStories);

const stories = computed(() => {
  if (loggedIn.value) {
    return freeStories.value.concat(publicStories.value);
  }

  return publicStories.value;
});

</script>
<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Kurzgeschichten
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-800 text-justify">
          Schnapp dir <NuxtLink to="/login" class="text-blue-300">hier</NuxtLink> deinen persönlichen Account und sicher
          dir gleich 5 zusätzliche Geschichten kostenlos, als Bonus zu den zwei, die du bereits hast. Wenn du die
          unglaubliche Vielfalt unserer umfangreichen Geschichtensammlung entdecken möchtest, zögere nicht, eines unserer
          attraktiven Abonnements abzuschließen. Klick <NuxtLink to="/#pricing" class="text-blue-300">hier</NuxtLink> und
          tauche ein in eine Welt voller faszinierender Erzählungen!
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <ClientOnly>
          <StoryTeaser v-for="story in stories" :key="story.id" :href="story.href" :image="story.image"
            :date="story.date" :datetime="story.datetime" :category="story.category" :title="story.title"
            :description="story.description" class="flex flex-col items-start justify-between">
          </StoryTeaser>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

