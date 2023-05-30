<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from "~/stores/useAccountStore";
import { useContentStore } from "~/stores/useContentStore";

const route = useRoute();
const id = route.params.id;

const accountStore = useAccountStore();

const contentStore = useContentStore();
const freeStories = computed(() => contentStore.freeStories);
const publicStories = computed(() => contentStore.publicStories);

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
    ogImage: '/heroteaser.png',
    twitterCard: 'summary',
  })
}

onMounted(() => {
  story.value = stories.value.find((s) => s.id === id)
});
</script>

<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <Storyarticle v-if="story" :data="story"></Storyarticle>
  </main>
  <Footer></Footer>
</template>
