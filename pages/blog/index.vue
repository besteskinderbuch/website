<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Blog",
  description: 'Entdecke auf bestes-kinderbuch.de unseren Blog voller faszinierender Kindergeschichten. Tauche jede Woche in neue Themen ein und finde Inspiration. Dein Tor zur Welt der Fantasie!',
  ogTitle: "bestes-kinderbuch - Blog",
  ogDescription: 'Entdecke auf bestes-kinderbuch.de unseren Blog voller faszinierender Kindergeschichten. Tauche jede Woche in neue Themen ein und finde Inspiration. Dein Tor zur Welt der Fantasie!',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})

const breadcrumb = [{ name: "Alle Blogartikel", href: "/blog", current: true }];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <BlogSection></BlogSection>
  </Page>
</template>
