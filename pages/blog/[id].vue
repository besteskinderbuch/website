<script setup>
import { useBlogStore } from "~/stores/useBlogStore";
import { useContentStore } from '~/stores/useContentStore';

const route = useRoute();
const id = route.params.id;

const blogStore = useBlogStore();
const posts = blogStore.posts;

const post = posts.find((post) => post.id === id);

const contentStore = useContentStore();
const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Blogartikel: ${post.title}`,
  type: 'article',
  description: 'Unser Blog voller faszinierender Artikel rund ums Thema Kinder, Gute Nacht Geschichten und mehr. Jetzt anmelden!',
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const breadcrumb = [{ name: "Alle Blogartikel", href: "/blog" }, { name: post.title, href: `/blog/${post.id}`, current: true }];
</script>

<template>
  <Page :breadcrumb="breadcrumb">
    <Blogarticle :id="id"></Blogarticle>
  </Page>
</template>
