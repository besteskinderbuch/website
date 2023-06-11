<script setup>
import { useContentStore } from '~/stores/useContentStore';

const contentStore = useContentStore();

const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Registrierung - ${contentStore.baseSeoInfo.title}`,
}

const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const route = useRoute()
const redirect = route.query.redirect || '/'

definePageMeta({
  layout: "empty",
});


useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: 'https://bestes-kinderbuch.de' + route.path,
    },
  ],
}))
</script>

<template>
  <div class="flex min-h-full flex-1">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="mb-8">
          <Icon name="material-symbols:arrow-back"></Icon>
          <NuxtLink :to="redirect">zurück</NuxtLink>
        </div>
        <!--  <div>
          <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        </div> -->
        <h1 class="text-3xl font-bold">Bestes-Kinderbuch.de</h1>

        <div class="mt-40">
          <SignupForm></SignupForm>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <nuxt-img provider="imgix" class="absolute inset-0 h-full w-full object-cover" src="/login.png" alt="Märchenwald"
        :modifiers="{ auto: 'format,compress' }" />
    </div>
  </div>
</template>