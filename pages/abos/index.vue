<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Abos",
  description: 'Bestes-Kinderbuch.de: Wähle aus vielfältigen Abo-Optionen für maßgeschneiderte Kinder-Kurzgeschichten. Mit 7 Tage Geld-zurück-Garantie. Entdecke jetzt!',
  ogTitle: "bestes-kinderbuch - Abos",
  ogDescription: 'Bestes-Kinderbuch.de: Wähle aus vielfältigen Abo-Optionen für maßgeschneiderte Kinder-Kurzgeschichten. Mit 7 Tage Geld-zurück-Garantie. Entdecke jetzt!',
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
    <Pricing></Pricing>
  </main>
  <LazyFooter></LazyFooter>
</template>
