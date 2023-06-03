<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from "~/stores/useAccountStore";
import { useStoryStore } from '~/stores/useStoryStore';

const accountStore = useAccountStore();
const { loggedIn } = storeToRefs(accountStore);

const storyStore = useStoryStore();
const freeStories = computed(() => storyStore.freeStories);
const publicStories = computed(() => storyStore.publicStories);

const stories = computed(() => {
  if (loggedIn.value) {
    return freeStories.value.concat(publicStories.value);
  }

  return publicStories.value;
});

onMounted(() => {

})

watch(stories, (newVal, oldVal) => {
  console.log("newVal", newVal?.length)
  console.log("oldVal", oldVal?.length)
}, {
  immediate: true
})
</script>
<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Kurzgeschichten
        </h1>
        <p v-if="!loggedIn" class="mt-6 text-lg leading-8 text-gray-800 text-justify">
          Bereit für eine Reise in die magische Welt der Fantasie? Klick <NuxtLink to="/login" class="text-blue-300">hier
          </NuxtLink> und erhalte deinen eigenen, persönlichen Account, welcher dir sofortigen Zugang zu sieben
          zauberhaften Geschichten schenkt – das sind 5 kostenlose Bonusgeschichten zusätzlich zu den zwei, die du schon
          genießen kannst!
        </p>
        <p v-if="!loggedIn" class="mt-6 text-lg leading-8 text-gray-800 text-justify">
          Doch das ist erst der Anfang! Für die Abenteurer, die bereit sind, tiefer in die unendlichen Weiten unserer
          Fantasiewelt einzutauchen, haben wir eine Schatztruhe voller Geschichten, die nur darauf warten, entdeckt zu
          werden. Klick <NuxtLink to="/#pricing" class="text-blue-300">hier</NuxtLink> und wähle das Abonnement, das zu
          dir passt. Denn mit unseren Premium-Abos kannst du die ganze Fülle unserer einzigartigen Geschichtensammlung
          erkunden.
        </p>
        <p v-if="!loggedIn" class="mt-6 text-lg leading-8 text-gray-800 text-justify">
          Stelle dir vor, du könntest jeden Abend eine neue Geschichte entdecken. Oder sogar zwei! Die Möglichkeiten sind
          grenzenlos und du kannst sie freischalten, indem du in die fesselnde Welt unserer Premium-Abonnements
          eintauchst. Mach den Sprung und tauche ein in ein Meer voller Geschichten, das nie austrocknet. Entdecke,
          träume, lerne und wachse mit Bestes-Kinderbuch.de - denn Geschichten sind der Schlüssel zur Fantasie!
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <ClientOnly>
          <StoryTeaser v-for="story in stories" :key="story.id" :data="story"
            class="flex flex-col items-start justify-between">
          </StoryTeaser>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

