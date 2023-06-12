
<script setup>
import { useArticleStore } from "~/stores/useArticleStore";

const store = useArticleStore();
const posts = computed(() => store.posts);
</script>

<template>
  <Section>
    <Container>
      <div class="mx-auto text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ratgeber
        </h1>
        <p class="mt-2 text-lg leading-8 text-gray-600 text-justify">
          Entdecke unseren Ratgeber, eine wahre Schatzkammer an aufschlussreichen Artikeln, die sich ganz der zauberhaften
          Welt der Kindergeschichten widmen. Jede Woche bereichern wir diese Sammlung mit frischen Beiträgen, um dich
          stets mit neuen Anregungen und Wissen zu versorgen.<br />
          Ob du tiefer in bestimmte Themen eintauchen, mehr über deine Lieblingsgeschichten erfahren oder einfach nur neue
          Inspiration suchen möchtest - unser Ratgeber ist der perfekte Ort dafür.
        </p>
        <p class="mt-2 text-lg leading-8 text-gray-600 text-justify">
          Du möchtest keinen unserer Artikel verpassen? Dann melde dich hier an und bleibe immer auf dem neuesten
          Stand:
        </p>
        <div class="flex w-full justify-center">
          <NewsletterForm type="body" />
        </div>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-28 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogTeaser v-for="post in posts" :key="post.id" :href="post.href" :image="post.image" :date="post.date"
          :datetime="post.datetime" :category="post.category" :title="post.title" :description="post.description"
          class="flex flex-col items-start justify-between" />
      </div>
    </Container>
  </Section>
</template>
