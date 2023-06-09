<script setup>
import { useRootStore } from "~/stores/useRootStore";
import { useContentStore } from '~/stores/useContentStore';

const contentStore = useContentStore();

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Mein Bereich - ${contentStore.baseSeoInfo.title}`,
  description: 'Verwalte dein Abo bei Bestes-Kinderbuch.de, bearbeite Einstellungen und aktualisiere deine Kontoinformationen.',
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const { devMode } = useRootStore()
</script>

<template>
  <div class="flex min-h-full flex-1">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <!--  <div>
          <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        </div> -->

        <div class="mt-10">
          <HankoProfile v-if="!devMode"></HankoProfile>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <nuxt-img provider="imgix" class="absolute inset-0 h-full w-full object-cover" src="/login.png" alt="Märchenwald"
        :modifiers="{ auto: 'format,compress' }" />
    </div>
  </div>
</template>

<style>
hanko-auth,
hanko-profile {
  --background-color: #E0FBFC;
}
</style>
