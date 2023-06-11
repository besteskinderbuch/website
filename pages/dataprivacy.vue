<script setup>
import { useContentStore } from '~/stores/useContentStore';

const contentStore = useContentStore();

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Datenschutz - ${contentStore.baseSeoInfo.title}`,
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const breadcrumb= [{name:"Datenschutz", href:"/dataprivacy", current:true}];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <DataPrivacy></DataPrivacy>
  </Page>
</template>