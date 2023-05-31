<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Geschichten",
  description: 'Entdecke faszinierende Kinder-Kurzgeschichten auf bestes-kinderbuch.de! Sichere dir 5 Gratisgeschichten und entdecke unsere Abo-Optionen.',
  ogTitle: "bestes-kinderbuch - Geschichten",
  ogDescription: 'Entdecke faszinierende Kinder-Kurzgeschichten auf bestes-kinderbuch.de! Sichere dir 5 Gratisgeschichten und entdecke unsere Abo-Optionen.',
  ogImage: '/heroteaser.png',
  twitterCard: 'summary',
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
    <StoriesSection> </StoriesSection>
  </main>
  <LazyFooter></LazyFooter>
</template>
