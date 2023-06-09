<script setup>
import { useContentStore } from "~/stores/useContentStore";

const contentStore = useContentStore();

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Abos - ${contentStore.baseSeoInfo.title}`,
  description: 'Wähle aus verschiedenen Gute Nacht Geschichten Abos. Mit 7 Tage Geld-zurück-Garantie.',
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const breadcrumb= [{name:"Abos", href:"/abos",current:true}];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <Pricing></Pricing>
  </Page>
</template>
