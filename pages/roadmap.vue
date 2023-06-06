<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Roadmap",
  description: 'Entdecke die Roadmap von Bestes-Kinderbuch.de. Erlebe unseren Weg zur kontinuierlichen Verbesserung und zur Übertreffen deiner Erwartungen.',
  ogTitle: "bestes-kinderbuch - Roadmap",
  ogDescription: 'Entdecke die Roadmap von Bestes-Kinderbuch.de. Erlebe unseren Weg zur kontinuierlichen Verbesserung und zur Übertreffen deiner Erwartungen.',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})

const breadcrumb= [{name:"Roadmap", href:"/roadmap", current:true}];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <Roadmap></Roadmap>
  </Page>
</template>