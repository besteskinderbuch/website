<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
       <!--  <h2 class="text-base font-semibold leading-7 text-secondary1">
          Immer was zum lesen
        </h2> -->
        <h2
          class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl"
        >
          Du magst lieber gedruckte Bücher zum anfassen?
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-700">
          Dann kannst du dir hier eins aus unserer Kollektion aussuchen.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <ul
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <li v-for="book in books" :key="book.name" class="flex flex-col bg-white p-8 rounded-2xl">
            <Book
            :id="book.id"
              :href="book.href"
              :imageUrl="book.imageUrl"
              :imageAlt="book.imageAlt"
            >
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
const books = computed(()=>contentStore.books);

</script>
