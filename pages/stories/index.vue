<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Geschichten",
  description: 'Entdecke faszinierende Kinder-Kurzgeschichten auf bestes-kinderbuch.de! Sichere dir 5 Gratisgeschichten und entdecke unsere Abo-Optionen.',
  ogTitle: "bestes-kinderbuch - Geschichten",
  ogDescription: 'Entdecke faszinierende Kinder-Kurzgeschichten auf bestes-kinderbuch.de! Sichere dir 5 Gratisgeschichten und entdecke unsere Abo-Optionen.',
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
    <StoriesSection> </StoriesSection>
  </main>
  <LazyFooter></LazyFooter>
</template>
