<script setup>
import { useRootStore } from "~/stores/useRootStore";

useServerSeoMeta({
  title: "bestes-kinderbuch - Mein Bereich",
  ogUrl: 'https://besteskinderbuch.de/account',
  ogType: 'website',
  description: 'Verwalte dein Abo bei Bestes-Kinderbuch.de, bearbeite Einstellungen und aktualisiere deine Kontoinformationen.',
  ogTitle: "bestes-kinderbuch - Mein Bereich",
  ogDescription: 'Verwalte dein Abo bei Bestes-Kinderbuch.de, bearbeite Einstellungen und aktualisiere deine Kontoinformationen.',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
  twitterCard: 'summary_large_image',
  twitterTitle: "bestes-kinderbuch - Mein Bereich",
})

const { devMode } = useRootStore()

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})
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
