<script setup>
import { storeToRefs } from "pinia";
import { useContentStore } from "~/stores/useContentStore";

const route = useRoute();
const id = route.params.id;
const frequency = route.query.frequency || "monthly";

const contentStore = useContentStore();

const { tiers } = storeToRefs(contentStore);
const tier = computed(() => tiers.value.find((f) => f.id === id))
const tierName = computed(() => tier.value.name)

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Gute Nacht Geschichten Abo: ${tierName.value}`,
  description: `${tier.value.description}`,
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const breadcrumb = [{ name: "Abos", href: "/abos" }, { name: tierName.value, href: `/abos/${id}`, current: true }];
</script>

<template>
  <Page :breadcrumb="breadcrumb">
    <AboNewsletter :id="id" :frequency="frequency"> </AboNewsletter>
  </Page>
</template>
