<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Unsere Bücher",
  description: 'Entdecke handverlesene Kinder-Kurzgeschichten bei Bestes-Kinderbuch.de. Ideal für Gute-Nacht-Geschichten, Lesespaß fördern oder als perfektes Geschenk!',
  ogTitle: "bestes-kinderbuch - Unsere Bücher",
  ogDescription: 'Entdecke handverlesene Kinder-Kurzgeschichten bei Bestes-Kinderbuch.de. Ideal für Gute-Nacht-Geschichten, Lesespaß fördern oder als perfektes Geschenk!',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})


const breadcrumb= [{name:"Unsere Bücher", href:"/books", current:true}];
</script>

<template>
  <Page :breadcrumb="breadcrumb">
    <BookSection></BookSection>
  </Page>
</template>
