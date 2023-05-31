<script setup>
import { useContentStore } from "~/stores/useContentStore";

const route = useRoute();
const id = route.params.id;

const contentstore = useContentStore();
const posts = contentstore.posts;

const post = posts.find((post) => post.id === id);
useServerSeoMeta({
  title: `bestes-kinderbuch - ${post.title}`,
  description: 'Entdecke auf bestes-kinderbuch.de unseren Blog voller faszinierender Kindergeschichten. Tauche jede Woche in neue Themen ein und finde Inspiration. Dein Tor zur Welt der Fantasie!',
  ogTitle: `bestes-kinderbuch - ${post.title}`,
  ogDescription: 'Entdecke auf bestes-kinderbuch.de unseren Blog voller faszinierender Kindergeschichten. Tauche jede Woche in neue Themen ein und finde Inspiration. Dein Tor zur Welt der Fantasie!',
  ogImage: '/heroteaser.png',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})
</script>



<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <Blogarticle :id="id"></Blogarticle>
  </main>
  <LazyFooter></LazyFooter>
</template>
