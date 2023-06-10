<script setup>
import { useContentStore } from '~/stores/useContentStore';

const contentStore = useContentStore();

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Blog - ${contentStore.baseSeoInfo.title}`,
  description: 'Unser Blog voller faszinierender Artikel rund ums Thema Kinder, Gute Nacht Geschichten und mehr. Jetzt anmelden!',
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const breadcrumb = [{ name: "Alle Blogartikel", href: "/blog", current: true }];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <BlogSection></BlogSection>
  </Page>
</template>
