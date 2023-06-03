
<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Impressum",
  description: 'Erwecken Sie die Fantasie Ihres Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starten Sie heute das Abo!',
  ogTitle: "bestes-kinderbuch - Impressum",
  ogDescription: 'Erwecken Sie die Fantasie Ihres Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starten Sie heute das Abo!',
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
    <Impressum></Impressum>
  </main>
  <LazyFooter></LazyFooter>
</template>