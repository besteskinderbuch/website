<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Hilfe",
  description: 'Entdecke unsere Hilfe-Seite auf Bestes-Kinderbuch.de. Hier findest du Antworten auf deine Fragen zu unserem Kinderbuch-Abo. Begleite uns auf dieser magischen Lese-Reise!',
  ogTitle: "bestes-kinderbuch - Hilfe",
  ogDescription: 'Entdecke unsere Hilfe-Seite auf Bestes-Kinderbuch.de. Hier findest du Antworten auf deine Fragen zu unserem Kinderbuch-Abo. Begleite uns auf dieser magischen Lese-Reise!',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})

const breadcrumb= [{name:"Hilfe", href:"/help", current:true}];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <div class="mx-auto max-w-7xl px-6 py-3 sm:py-32 lg:px-8 lg:py-6">
      <div class="mx-auto text-center">
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
          Hilfe
        </h1>
        <p class="mt-10 text-lg leading-8 text-gray-800 text-justify">
          Herzlich willkommen in unserem Hilfe-Bereich! Wir freuen uns, dass du ein Teil unserer magischen Kinder
          Kurzgeschichten-Abo Welt sein möchtest.
          Wir verstehen, dass du möglicherweise Fragen hast, und wir sind hier, um dir dabei zu helfen, Antworten zu
          finden.
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-800 text-justify">
          Ob dein Kind noch in das Alter der vorgelesenen Geschichten fällt oder bereits ein kleiner Bücherwurm mit
          ständigem Lesehunger ist, wir haben ein Abo, das genau auf seine Bedürfnisse zugeschnitten ist. Doch wie
          funktioniert das alles? Welches Abo ist das Beste für dein Kind? Wie oft erscheinen neue Geschichten? Und was,
          wenn du technische Schwierigkeiten hast?
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-800 text-justify">
          Unser FAQ-Bereich ist darauf ausgerichtet, all deine Fragen zu klären und dir ein rundum sorgloses Leseerlebnis
          zu ermöglichen. Tauche ein in unsere Unterstützungsressourcen, erfahre mehr über das Funktionieren unserer
          Plattform und lass dich auf deiner Entdeckungsreise durch die fantastische Welt der Kinderbücher begleiten.
        </p>

      </div>
    </div>
    <LazyManual></LazyManual>
    <LazyFaqLong></LazyFaqLong>
  </Page>
</template>
