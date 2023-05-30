<template>
  <div class="bg-green-400 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
      <!--   <h2 class="text-base font-semibold leading-7 text-primary1">
          Immer was zum lesen
        </h2> -->
        <h2
          class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl"
        >
        Vorteile deines Geschichten-Abos
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-800">
          Träumst du davon, deinem Kind täglich vor dem Schlafengehen eine Gute-Nacht-Geschichte zu erzählen? Fühlst du dich jedoch durch den hohen Preis und den Platzbedarf von Büchern eingeschränkt? Dann haben wir mit unserem Geschichten-Abo die perfekte Lösung für dich.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="flex flex-col"
          >
            <dt
              class="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-800"
            >
               <Icon
                :name="feature.icon"
                class="h-5 w-5 flex-none text-backgroundColor1 text-backgroundColor1"
                aria-hidden="true"
              /> 
              {{ feature.name }}
            </dt>
            <dd
              class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-800"
            >
              <p class="flex-auto">{{ feature.description }}</p>
             <!--  <p class="mt-6">
                <a
                  :href="feature.href"
                  class="text-sm font-semibold leading-6 text-indigo-400"
                  >Learn more <span aria-hidden="true">→</span></a
                >
              </p> -->
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContentStore } from "~/stores/useContentStore";

const contentStore = useContentStore();
const features = contentStore.features;
</script>
