<script setup>
import { useContentStore } from "~/stores/useContentStore";

const route = useRoute();
const id = route.params.id;

const contentstore = useContentStore();
const posts = contentstore.posts;

const post = posts.find((post) => post.id === id);
useHead({
  title:`bestes-kinderbuch - ${post.title}`,
  meta: [
    { name: 'description', content: 'Entdecke auf bestes-kinderbuch.de unseren Blog voller faszinierender Kindergeschichten. Tauche jede Woche in neue Themen ein und finde Inspiration. Dein Tor zur Welt der Fantasie!' }
  ],
})
</script>



<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <Blogarticle :id="id"></Blogarticle>
  </main>
  <Footer></Footer>
</template>
