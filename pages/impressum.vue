
<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Impressum",
  ogUrl: 'https://besteskinderbuch.de/impressum',
  ogType: 'website',
  description: 'Erwecke die Fantasie deines Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starte heute das Abo!',
  ogTitle: "bestes-kinderbuch - Impressum",
  ogDescription: 'Erwecke die Fantasie deines Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starte heute das Abo!',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
  twitterCard: 'summary_large_image',
  twitterTitle: "bestes-kinderbuch - Impressum",
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})

const breadcrumb= [{name:"Impressum", href:"/impressum", current:true}];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <Impressum></Impressum>
  </Page>
</template>