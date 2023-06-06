<script setup>
import { useAccountStore } from "~/stores/useAccountStore";
import { useRootStore } from "~/stores/useRootStore";

const { getCurrentUser } = useAuth();


const rootStore = useRootStore()
const devMode = computed(() => rootStore.devMode)

if (!devMode.value) {
  let user = null;
  try {
    user = await getCurrentUser();
  } catch (e) {
    console.debug("not logged in");
  }

  if (user) {
    const accountStore = useAccountStore();
    accountStore.user = user;
  }
}

useServerSeoMeta({
  title: "bestes-kinderbuch",
  description: 'Erwecke die Fantasie deines Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starte heute das Abo!',
  ogTitle: "bestes-kinderbuch",
  ogDescription: 'Erwecke die Fantasie deines Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starte heute das Abo!',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})
</script>
<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <HeroSection></HeroSection>
    <LazyFeatureSection></LazyFeatureSection>
    <LazyManual></LazyManual>
    <LazyTestimonials></LazyTestimonials>
    <LazyNewsletter></LazyNewsletter>
    <LazyPricing></LazyPricing>
    <LazyFaq></LazyFaq>
    <LazyBookPreviewSection></LazyBookPreviewSection>
    <LazyBlogPreviewSection></LazyBlogPreviewSection>
  </main>
  <LazyFooter></LazyFooter>
</template>
