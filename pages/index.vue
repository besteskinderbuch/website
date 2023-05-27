<script setup>
import { useAccountStore } from "~/stores/useAccountStore";
const { getCurrentUser } = useAuth();

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

useHead({
  title:"bestes-kinderbuch",
})
</script>
<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <HeroSection></HeroSection>
    <FeatureSection></FeatureSection>
    <Manual3></Manual3>
    <Testimonials></Testimonials>
    <Newsletter></Newsletter>
    <Pricing></Pricing>
    <Faq></Faq>
    <BookPreviewSection></BookPreviewSection>
    <BlogPreviewSection></BlogPreviewSection>
  </main>
  <Footer></Footer>
</template>
