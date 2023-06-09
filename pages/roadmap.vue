<script setup>
import { useContentStore } from '~/stores/useContentStore';

const contentStore = useContentStore();

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `In Kürze/Roadmap - ${contentStore.baseSeoInfo.title}`,
  description: 'Hier erfährst du was wir als nächstes Planen: Unser Weg zur kontinuierlichen Verbesserung und zur Übertreffen deiner Erwartungen.',
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const breadcrumb = [{ name: "Roadmap", href: "/roadmap", current: true }];
</script>
<template>
  <Page :breadcrumb="breadcrumb">
    <Roadmap></Roadmap>
  </Page>
</template>