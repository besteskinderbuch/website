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
const breadcrumb = [{ name: "Alle Blogartikel", href: "/blog" }, { name: post.title, href: `/blog/${post.id}`, current: true }];

</script>

<template>
  <Page :breadcrumb="breadcrumb">
    <Blogarticle :id="id"></Blogarticle>
  </Page>
</template>
