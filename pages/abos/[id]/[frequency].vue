<script setup>
const route = useRoute();
const id = route.params.id;
const frequency = route.params.frequency;

useHead({
  title:`bestes-kinderbuch - Abo - ${id}/${frequency}`,
  meta: [
    { name: 'description', content: 'Bestes-Kinderbuch.de: Wähle aus vielfältigen Abo-Optionen für maßgeschneiderte Kinder-Kurzgeschichten. Mit 30 Tage Geld-zurück-Garantie. Entdecke jetzt!' }
  ],
})
</script>

<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <AboNewsletter :id="id" :frequency="frequency"> </AboNewsletter>
  </main>
  <Footer></Footer>
</template>
