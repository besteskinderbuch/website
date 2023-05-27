<template>
  <div class="bg-orange-300">
  <div class="mx-auto max-w-7xl px-6 py-3 sm:py-32 lg:px-8 lg:py-40">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2
        class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl"
      >
        Wie funktioniert es?
      </h2>
    </div>
    <div class="mt-10 flex justify-between gap-10 flex-col md:flex-row">
      <div class="flex-1 space-y-5 flex flex-col">
        <h3>Schritt 1: Anmelden</h3>
        <div
          class="p-5 inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 flex-1  flex justify-between flex-col"
        >
        <p>Schließe
          <NuxtLink to="/#pricing" class="text-white">hier</NuxtLink> das Abo
          ab, welches am besten zu dir passt</p>
          <img src="/demo/register.png" class="rounded-lg"/>
        </div>
      
      </div>
      <div class="flex-1 space-y-5 flex flex-col">
        <h3>Schritt 2: Geschichten durchstöbern</h3>
        <div
          class="p-5 inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 flex-1 flex justify-between flex-col"
        >
          <p>Finde
          <NuxtLink to="/stories" class="text-white">hier</NuxtLink> die
          beste Geschichten für dein Kind</p>
          <img src="/demo/search.png" class="rounded-lg"/>
        </div>
      </div>
      <div class="flex-1 space-y-5 flex flex-col">
        <h3>Schritt 3: Traumreise erleben</h3>
        <div
          class="p-5 inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 flex-1  flex justify-between flex-col"
        >
        <p>Mach dein Kind glücklich in dem du es mit unseren Geschichten auf eine
          Traumreise schickst</p>
          <img src="/demo/example.png" class="rounded-lg"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
