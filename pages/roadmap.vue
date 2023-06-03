<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Roadmap",
  description: 'Entdecken Sie die Roadmap von Bestes-Kinderbuch.de. Erleben Sie unseren Weg zur kontinuierlichen Verbesserung und zur Übertreffen Ihrer Erwartungen.',
  ogTitle: "bestes-kinderbuch - Roadmap",
  ogDescription: 'Entdecken Sie die Roadmap von Bestes-Kinderbuch.de. Erleben Sie unseren Weg zur kontinuierlichen Verbesserung und zur Übertreffen Ihrer Erwartungen.',
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
    <Roadmap></Roadmap>
  </main>
  <LazyFooter></LazyFooter>
</template>