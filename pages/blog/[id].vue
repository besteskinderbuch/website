<script setup>
import { useContentStore } from "~/stores/useContentStore";

const route = useRoute();
const id = route.params.id;

const contentstore = useContentStore();
const posts = contentstore.posts;

const post = posts.find((post) => post.id === id);
useHead({
  title:`bestes-kinderbuch - ${post.title}`,
})
</script>



<template>
  <Navbar></Navbar>
  <main class="flex-1">
    <Blogarticle :id="id"></Blogarticle>
  </main>
  <Footer></Footer>
</template>
