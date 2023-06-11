
<script setup>
import { useContentStore } from '~/stores/useContentStore';

const contentStore = useContentStore();

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Impressum - ${contentStore.baseSeoInfo.title}`,
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const breadcrumb= [{name:"Impressum", href:"/impressum", current:true}];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <Impressum></Impressum>
  </Page>
</template>