<script setup>
useHead({
  title:"bestes-kinderbuch - Geschichten",
  meta: [
    { name: 'description', content: 'Entdecke faszinierende Kinder-Kurzgeschichten auf bestes-kinderbuch.de! Sichere dir 5 Gratisgeschichten und entdecke unsere Abo-Optionen.' }
  ],
})
</script>
<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <StoriesSection> </StoriesSection>
  </main>
  <Footer></Footer>
</template>
