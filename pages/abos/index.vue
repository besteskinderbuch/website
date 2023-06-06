<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Abos",
  ogUrl: 'https://besteskinderbuch.de/abos',
  ogType: 'website',
  description: 'Bestes-Kinderbuch.de: Wähle aus vielfältigen Abo-Optionen für maßgeschneiderte Kinder-Kurzgeschichten. Mit 7 Tage Geld-zurück-Garantie. Entdecke jetzt!',
  ogTitle: "bestes-kinderbuch - Abos",
  ogDescription: 'Bestes-Kinderbuch.de: Wähle aus vielfältigen Abo-Optionen für maßgeschneiderte Kinder-Kurzgeschichten. Mit 7 Tage Geld-zurück-Garantie. Entdecke jetzt!',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
  twitterCard: 'summary_large_image',
  twitterTitle: "bestes-kinderbuch - Abos",
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})

const breadcrumb= [{name:"Abos", href:"/abos",current:true}];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <Pricing></Pricing>
  </Page>
</template>
