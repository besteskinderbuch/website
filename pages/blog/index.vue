<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Blog",
  description: 'Entdecke auf bestes-kinderbuch.de unseren Blog voller faszinierender Kindergeschichten. Tauche jede Woche in neue Themen ein und finde Inspiration. Dein Tor zur Welt der Fantasie!',
  ogTitle: "bestes-kinderbuch - Blog",
  ogDescription: 'Entdecke auf bestes-kinderbuch.de unseren Blog voller faszinierender Kindergeschichten. Tauche jede Woche in neue Themen ein und finde Inspiration. Dein Tor zur Welt der Fantasie!',
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
    <BlogSection></BlogSection>
  </main>
  <LazyFooter></LazyFooter>
</template>
