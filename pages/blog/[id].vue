<script setup>
import { useBlogStore } from "~/stores/useBlogStore";

const route = useRoute();
const id = route.params.id;

const blogStore = useBlogStore();
const posts = blogStore.posts;

const post = posts.find((post) => post.id === id);
useServerSeoMeta({
  title: `bestes-kinderbuch - ${post.title}`,
  ogType: 'article',
  description: 'Entdecke auf bestes-kinderbuch.de unseren Blog voller faszinierender Kindergeschichten. Tauche jede Woche in neue Themen ein und finde Inspiration. Dein Tor zur Welt der Fantasie!',
  ogTitle: `bestes-kinderbuch - ${post.title}`,
  ogDescription: 'Entdecke auf bestes-kinderbuch.de unseren Blog voller faszinierender Kindergeschichten. Tauche jede Woche in neue Themen ein und finde Inspiration. Dein Tor zur Welt der Fantasie!',
  ogImage: `https://besteskinderbuch-8301.imgix.net${post.image.src}?auto=format,compress&ar=2:1&fit=crop&w=1456`,
  twitterCard: 'summary_large_image',
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
