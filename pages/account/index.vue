<script setup>
import { useContentStore } from '~/stores/useContentStore';

const contentStore = useContentStore();

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Mein Bereich - ${contentStore.baseSeoInfo.title}`,
  description: 'Verwalte dein Abo bei Bestes-Kinderbuch.de, bearbeite Einstellungen und aktualisiere deine Kontoinformationen.',
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)
</script>

<template>
  <div class="flex min-h-full flex-1">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <!--  <div>
          <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        </div> -->

        <div class="mt-10">
          <BasicLink type="button" href="/forgotPassword?redirect=/account">Passwort ändern</BasicLink>
        </div>
      </div>
    </div>
   
  </div>
</template>
