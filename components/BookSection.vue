<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto lg:text-center">
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
         Bücher
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-700 text-justify">
          Liebst du das Gefühl, ein frisch gedrucktes Buch in den Händen zu halten? Ziehst du den Geruch von Papier und
          Tinte dem digitalen Lesen vor? Dann haben wir genau das Richtige für dich!
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-700 text-justify">
          In unserer gedruckten Bücherkollektion findest du eine handverlesene Auswahl an liebevoll gestalteten
          Kinderbüchern. Jede Geschichte, die wir in unserer digitalen Bibliothek anbieten, wurde mit großer Sorgfalt in
          physischer Form gebracht und wartet nur darauf, von dir entdeckt zu werden.Egal, ob du auf der Suche nach einer Gute-Nacht-Geschichte bist, deinen Kindern die Freude am Lesen näherbringen
          möchtest oder das perfekte Geschenk für einen kleinen Bücherwurm suchst – bei uns findest du garantiert das
          Richtige.
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-700 text-justify">
          Stöbere in unserer Kollektion und wähle dein Lieblingsbuch aus, das dann direkt zu dir nach Hause geschickt
          wird. Das Lesen eines echten Buches ist ein unvergleichliches Erlebnis, und wir sind stolz darauf, es dir und
          deinen Kindern bieten zu können. Viel Spaß beim Entdecken und Lesen!
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <ul class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <li v-for="book in books" :key="book.name" class="flex flex-col bg-white p-8 rounded-2xl">
            <Book :id="book.id" :href="book.href" :image="book.image">
            </Book>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContentStore } from "~/stores/useContentStore";

const contentStore = useContentStore();
const books = computed(() => contentStore.books);

</script>
