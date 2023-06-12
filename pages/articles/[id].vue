<script setup>
import { useArticleStore } from "~/stores/useArticleStore";
import { useContentStore } from '~/stores/useContentStore';

const route = useRoute();
const id = route.params.id;

const store = useArticleStore();
const posts = store.posts;

const post = posts.find((post) => post.id === id);

const contentStore = useContentStore();
const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Artikel: ${post.title}`,
  type: 'article',
  description: 'Unser Ratgeber ist voller faszinierender Artikel rund ums Thema Kinder, Gute Nacht Geschichten und mehr. Jetzt anmelden!',
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const breadcrumb = [{ name: "Alle Artikel", href: "/articles" }, { name: post.title, href: `/articles/${post.id}`, current: true }];
</script>

<template>
  <Page :breadcrumb="breadcrumb">
    <Blogarticle :id="id"></Blogarticle>
  </Page>
</template>
