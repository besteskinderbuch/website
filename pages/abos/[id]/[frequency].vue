<script setup>
const route = useRoute();
const id = route.params.id;
const frequency = route.params.frequency;

useServerSeoMeta({
  title: `bestes-kinderbuch - Abo - ${id}/${frequency}`,
  ogUrl: `https://besteskinderbuch.de/abos/${id}/${frequency}`,
  ogType: 'website',
  description: 'Bestes-Kinderbuch.de: Wähle aus vielfältigen Abo-Optionen für maßgeschneiderte Kinder-Kurzgeschichten. Mit 7 Tage Geld-zurück-Garantie. Entdecke jetzt!',
  ogTitle: `bestes-kinderbuch - Abo - ${id}/${frequency}`,
  ogDescription: 'Bestes-Kinderbuch.de: Wähle aus vielfältigen Abo-Optionen für maßgeschneiderte Kinder-Kurzgeschichten. Mit 7 Tage Geld-zurück-Garantie. Entdecke jetzt!',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
  twitterCard: 'summary_large_image',
  twitterTitle: `bestes-kinderbuch - Abo - ${id}/${frequency}`,
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})

const aboName = id.charAt(0).toUpperCase() + id.slice(1);
const frequencyName = {
  "monthly": "monatlich",
  "yearly": "jährlich",
};
const aboFrequency = frequencyName[frequency];

const breadcrumb= [{name:"Abos", href:"/abos"}, {name:aboName, href:`/abos/${id}`}, {name:aboFrequency, href:`/abos/${id}/${frequency}`, current:true}];
</script>

<template>
  <Page :breadcrumb="breadcrumb">
    <AboNewsletter :id="id" :frequency="frequency"> </AboNewsletter>
  </Page>
</template>
