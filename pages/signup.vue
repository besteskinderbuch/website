<script setup>
useHead({
  title:"bestes-kinderbuch - Singup",
  meta: [
    { name: 'description', content: ' Erwecken Sie die Fantasie Ihres Kindes mit Bestes-Kinderbuch.de! Unbegrenzte Zugang zu packenden Kurzgeschichten für Kinder. Starten Sie heute das Abo!' }
  ],
})
</script>

<template>
  <div class="flex min-h-full flex-1">
    <div
      class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
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
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="/login.png"
        alt="Märchenwald"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style>
hanko-auth,
hanko-profile {
  --background-color: #E0FBFC;
}
</style>
