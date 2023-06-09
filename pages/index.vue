<script setup>
import { useAccountStore } from "~/stores/useAccountStore";
import { useRootStore } from "~/stores/useRootStore";
import { useContentStore } from '~/stores/useContentStore';

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

const contentStore = useContentStore();

const seoMeta = contentStore.createSeoMeta(contentStore.baseSeoInfo)
useSeoMeta(seoMeta)
</script>
<template>
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
</template>
