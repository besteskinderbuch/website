<script setup>
import { useContentStore } from '~/stores/useContentStore';

const contentStore = useContentStore();

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Bücher - ${contentStore.baseSeoInfo.title}`,
  description: 'Entdecke handverlesene Gute-Nacht-Geschichten und vieles mehr. Ideal zum Lesespaß fördern oder als perfektes Geschenk!',

}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const breadcrumb = [{ name: "Unsere Bücher", href: "/books", current: true }];
</script>

<template>
  <Page :breadcrumb="breadcrumb">
    <BookSection></BookSection>
  </Page>
</template>
