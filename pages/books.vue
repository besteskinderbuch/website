<script setup>
useHead({
  title:"bestes-kinderbuch - Unsere Bücher",
  meta: [
    { name: 'description', content: 'Entdecken Sie handverlesene Kinder-Kurzgeschichten bei Bestes-Kinderbuch.de. Ideal für Gute-Nacht-Geschichten, Lesespaß fördern oder als perfektes Geschenk!' }
  ],
})
</script>

<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <BookSection></BookSection>
  </main>
  <Footer></Footer>
</template>
