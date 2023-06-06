<script setup>
useServerSeoMeta({
  title: "bestes-kinderbuch - Anmeldung",
  ogType: 'website',
  ogUrl: 'https://bestes-kinderbuch.de/login',
  description: 'Erwecke die Fantasie deines Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starte heute das Abo!',
  ogTitle: "bestes-kinderbuch - Anmeldung",
  ogDescription: 'Erwecke die Fantasie deines Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starte heute das Abo!',
  ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
  twitterCard: 'summary_large_image',
  twitterTitle: "bestes-kinderbuch - Anmeldung",
})

useHead({
  htmlAttrs: {
    lang: 'de',
  },
})

const redirect = useRoute().query.redirect || '/'

const router = useRouter()
function handleSuccess() {
  router.push(redirect)
}
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
          <LoginForm @success="handleSuccess"></LoginForm>
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
