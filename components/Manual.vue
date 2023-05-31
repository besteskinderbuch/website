<template>
  <div class="bg-green-300">
    <div class="mx-auto max-w-7xl px-6 py-3 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
          Wie funktioniert es?
        </h2>
      </div>

      <nav aria-label="Progress" class="mt-10">
        <ol role="list" class="divide-y rounded-md md:flex md:divide-y-0 md:divide-x divide-gray-800">
          <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative md:flex md:flex-1 flex-col">
            <NuxtLink v-if="step.href" :to="step.href" class="flex items-center px-6 py-4 text-sm font-medium"
              aria-current="step">
              <span
                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-800">
                <span class="text-gray-800">{{ step.id }}</span>
              </span>
              <span class="ml-4 text-xl font-medium text-gray-800">{{ step.name }}</span>
            </NuxtLink>
            <div v-else class="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
              <span
                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-800">
                <span class="text-gray-800">{{ step.id }}</span>
              </span>
              <span class="ml-4 text-xl font-medium text-gray-800">{{ step.name }}</span>
            </div>
            <div class="p-5 flex-1 flex justify-between flex-col">
              <template v-if="stepIdx === 0">
                <p class="mx-4"> Finde <a href="/#pricing" class="text-gray-100 font-bold">hier</a> das Abo, das wie für
                  dich gemacht ist. Klick hier und entdecke das Angebot, das perfekt zu dir passt!</p>
                <nuxt-img provider="imgix" src="/demo/register.png" loading="lazy" alt="signup form" :modifiers="{ auto: 'format,compress' }" class="rounded-lg mx-4 mt-4"/>
              </template>
              <template v-else-if="stepIdx === 1">
                <p class="mx-4">Entdecke <a href="/stories" class="text-gray-100 font-bold">hier</a> die spannendsten und
                  herzerwärmendsten Geschichten, die dein Kind lieben wird. Stöbere jetzt durch unsere Sammlung und finde
                  die perfekte Geschichte!</p>
                <nuxt-img provider="imgix" src="/demo/search.png" loading="lazy" class="rounded-lg mx-4 mt-4"
                  :modifiers="{ auto: 'format,compress' }" alt="multiple storyteaser" />
              </template>
              <template v-else-if="stepIdx === 2">
                <p class="mx-4">Verschönere den Tag deines Kindes und schick es mit unseren faszinierenden Geschichten auf
                  eine unvergessliche Traumreise. Lass die Fantasie deines Kindes aufblühen und zaubere ihm ein Lächeln
                  ins Gesicht.</p>
                <nuxt-img provider="imgix" src="/demo/example.png" loading="lazy" class="rounded-lg  mx-4 mt-4"
                  :modifiers="{ auto: 'format,compress' }" alt="example story content"/>
              </template>

            </div>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    id: '01', name: 'Anmelden', href: '/#pricing'
  },
  {
    id: '02', name: 'Geschichten finden', href: '/stories'
  },
  {
    id: '03', name: 'Traumreise beginnen'
  },
]
</script>