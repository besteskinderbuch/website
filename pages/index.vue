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
  description: 'Erwecken Sie die Fantasie Ihres Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starten Sie heute das Abo!',
  ogTitle: "bestes-kinderbuch",
  ogDescription: 'Erwecken Sie die Fantasie Ihres Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starten Sie heute das Abo!',
  ogImage: '/heroteaser.png',
  twitterCard: 'summary',
})
</script>
<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <HeroSection></HeroSection>
    <FeatureSection></FeatureSection>
    <Manual></Manual>
    <Testimonials></Testimonials>
    <Newsletter></Newsletter>
    <Pricing></Pricing>
    <Faq></Faq>
    <BookPreviewSection></BookPreviewSection>
    <BlogPreviewSection></BlogPreviewSection>
  </main>
  <Footer></Footer>
</template>
