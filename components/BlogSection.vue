
<script setup>
import { useContentStore } from "~/stores/useContentStore";

const contentStore = useContentStore();
const posts = computed(() => contentStore.posts);
</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Blog
        </h1>
        <p class="mt-2 text-lg leading-8 text-gray-600 text-justify">
          Entdecke unseren Blog, eine wahre Schatzkammer an aufschlussreichen Artikeln, die sich ganz der zauberhaften
          Welt der Kindergeschichten widmen. Jede Woche bereichern wir diese Sammlung mit frischen Beiträgen, um dich
          stets mit neuen Anregungen und Wissen zu versorgen.<br />
          Ob du tiefer in bestimmte Themen eintauchen, mehr über deine Lieblingsgeschichten erfahren oder einfach nur neue
          Inspiration suchen möchtest - unser Blog ist der perfekte Ort dafür.
        </p>
        <p class="mt-2 text-lg leading-8 text-gray-600 text-justify">
          Du möchtest keinen unserer Blogartikel verpassen? Dann melde dich hier an und bleibe immer auf dem neuesten
          Stand:
        </p>
        <div class="flex w-full justify-center">
          <NewsletterForm type="body" />
        </div>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogTeaser v-for="post in posts" :key="post.id" :href="post.href" :image="post.image" :date="post.date"
          :datetime="post.datetime" :category="post.category" :title="post.title" :description="post.description"
          class="flex flex-col items-start justify-between" />
      </div>
    </div>
</div></template>
