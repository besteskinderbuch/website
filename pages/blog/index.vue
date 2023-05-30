<script setup>
useHead({
  title:"bestes-kinderbuch - Blog",
  meta: [
    { name: 'description', content: 'Entdecke auf bestes-kinderbuch.de unseren Blog voller faszinierender Kindergeschichten. Tauche jede Woche in neue Themen ein und finde Inspiration. Dein Tor zur Welt der Fantasie!' }
  ],
})
</script>
<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <BlogSection></BlogSection>
  </main>
  <Footer></Footer>
</template>
