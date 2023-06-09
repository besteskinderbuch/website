<script setup>
import { useContentStore } from '~/stores/useContentStore';

const contentStore = useContentStore();

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Geschichten - ${contentStore.baseSeoInfo.title}`,
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)


const breadcrumb = [{ name: "Gute Nacht Geschichten", href: "/stories", current: true }];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <StoriesSection> </StoriesSection>
  </Page>
</template>
