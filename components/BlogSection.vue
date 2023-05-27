
<script setup>
import { useContentStore } from "~/stores/useContentStore";

const contentStore = useContentStore();
const posts = computed(() => contentStore.posts);
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Aus dem Blog
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Hier findest du viele interessante Blogartikel rund um das Thema Kindergeschichten.<br />
          Und jede Woche kommen Neue dazu! Wenn du nichts verpassen willst, trag dich hier rein:
        </p>
        <div class="flex w-full justify-center">
          <NewsletterForm type="body" />
        </div>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogTeaser v-for="post in posts" :key="post.id" :href="post.href" :imageUrl="post.imageUrl" :date="post.date"
          :datetime="post.datetime" :category="post.category" :title="post.title" :description="post.description"
          class="flex flex-col items-start justify-between" />
      </div>
    </div>
  </div>
</template>
