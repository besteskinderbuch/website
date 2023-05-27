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

const story = computed(()=>stories.value.find((s) => s.id === id))

useHead({
  title:`bestes-kinderbuch - ${story.value.title}`,
})


</script>
<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <Storyarticle :id="id"></Storyarticle>
  </main>
  <Footer></Footer>
</template>
