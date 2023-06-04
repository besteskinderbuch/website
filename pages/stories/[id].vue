<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from "~/stores/useAccountStore";
import { useStoryStore } from "~/stores/useStoryStore";

const route = useRoute();
const id = route.params.id;

const accountStore = useAccountStore();

const storyStore = useStoryStore();
const freeStories = computed(() => storyStore.freeStories);
const publicStories = computed(() => storyStore.publicStories);

const { loggedIn } = storeToRefs(accountStore);

const stories = computed(() => {
  if (loggedIn.value) {
    return freeStories.value.concat(publicStories.value);
  }

  return publicStories.value;
});

const story = ref(stories.value.find((s) => s.id === id))
if (story.value) {
  useServerSeoMeta({
    title: `bestes-kinderbuch - ${story.value.title}`,
    description: 'Entdecke faszinierende Kinder-Kurzgeschichten auf bestes-kinderbuch.de! Sichere dir 5 Gratisgeschichten und entdecke unsere Abo-Optionen.',
    ogTitle: `bestes-kinderbuch - ${story.value.title}`,
    ogDescription: 'Entdecke faszinierende Kinder-Kurzgeschichten auf bestes-kinderbuch.de! Sichere dir 5 Gratisgeschichten und entdecke unsere Abo-Optionen.',
    ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
    twitterCard: 'summary_large_image',
  })
}

onMounted(() => {
  story.value = stories.value.find((s) => s.id === id)
});

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})
</script>

<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <Storyarticle v-if="story" :data="story"></Storyarticle>
  </main>
  <LazyFooter></LazyFooter>
</template>
