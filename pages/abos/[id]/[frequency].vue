<script setup>
const route = useRoute();
const id = route.params.id;
const frequency = route.params.frequency;
</script>

<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <AboNewsletter :id="id" :frequency="frequency"> </AboNewsletter>
  </main>
  <Footer></Footer>
</template>
