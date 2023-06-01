<script setup>
const route = useRoute();
const id = route.params.id;
const frequency = route.params.frequency;

useServerSeoMeta({
  title: `bestes-kinderbuch - Abo - ${id}/${frequency}`,
  description: 'Bestes-Kinderbuch.de: Wähle aus vielfältigen Abo-Optionen für maßgeschneiderte Kinder-Kurzgeschichten. Mit 30 Tage Geld-zurück-Garantie. Entdecke jetzt!',
  ogTitle: `bestes-kinderbuch - Abo - ${id}/${frequency}`,
  ogDescription: 'Bestes-Kinderbuch.de: Wähle aus vielfältigen Abo-Optionen für maßgeschneiderte Kinder-Kurzgeschichten. Mit 30 Tage Geld-zurück-Garantie. Entdecke jetzt!',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop',
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
    <AboNewsletter :id="id" :frequency="frequency"> </AboNewsletter>
  </main>
  <LazyFooter></LazyFooter>
</template>
