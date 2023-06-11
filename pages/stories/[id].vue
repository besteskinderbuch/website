<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from "~/stores/useAccountStore";
import { useStoryStore } from "~/stores/useStoryStore";
import { useContentStore } from '~/stores/useContentStore';

const route = useRoute();
const id = route.params.id;


const storyStore = useStoryStore();
const freeStories = computed(() => storyStore.freeStories);
const publicStories = computed(() => storyStore.publicStories);

const loggedIn = ref(false);
onMounted(() => {
    const { isLoggedIn} = useAuth();

    watch(isLoggedIn, (newVal) => {
        loggedIn.value = newVal
    }, { immediate: true })
});

const stories = computed(() => {
  if (loggedIn.value) {
    return freeStories.value.concat(publicStories.value);
  }

  return publicStories.value;
});

const contentStore = useContentStore();

const story = ref(stories.value.find((s) => s.id === id))
if (story.value) {
  const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Gute Nacht Geschichte: ${story.value.title}`,
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)
}

onMounted(() => {
  story.value = stories.value.find((s) => s.id === id)
});

const breadcrumb= [{name:"Gute Nacht Geschichten", href:"/stories"}, {name:story.value?.title, href:`/stories/${id}`, current:true}];
</script>

<template>
  <Page :breadcrumb="breadcrumb">
    <Storyarticle v-if="story" :data="story"></Storyarticle>
  </Page>
</template>
