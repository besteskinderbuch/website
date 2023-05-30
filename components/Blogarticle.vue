<script setup>
import { useContentStore } from "~/stores/useContentStore";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const contentstore = useContentStore();
const posts = contentstore.posts;

const post = posts.find((post) => post.id === props.id);

const others = posts.filter((post) => post.id !== props.id);
const related = others.slice(0, 5);
</script>

<template>
  <!-- Blog Article -->
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 l lg:gap-x-12">
      <!-- Content -->
      <div class="lg:col-span-2">
        <div class="py-8">
          <div class="space-y-5 lg:space-y-8">
            <NuxtLink class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline"
              to="/blog">
              <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
              Zurück zu allen Blogartikeln
            </NuxtLink>

            <h1 class="text-3xl font-bold lg:text-5xl dark:text-white">
              {{ post.title }}
            </h1>

            <div class="flex items-center gap-x-5">
              <!-- <a
                class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200"
                href="#"
              >
                Company News
              </a> -->
              <p class="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                {{ post.date }}
              </p>
            </div>
            <nuxt-img provider="imgix" :src="post.image.src" :alt="post.image.alt" :modifiers="{ auto: 'format,compress' }"/>

            <div v-html="post.content" class="prose max-w-none"></div>

            <div class="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
              <!-- Badges/Tags -->
              <div>
                <div v-for="tag in post.tags"
                  class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  {{ tag }}
                </div>
              </div>
              <!-- End Badges/Tags -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Content -->

      <!-- Sidebar -->
      <div class="lg:col-span-1 lg:w-full lg:h-full border-l md:border-0 border-primary1/50">
        <div class="sticky top-0 left-0 py-8 lg:pl-8">
          
          <h2 class="mb-10 text-center">Andere Blogartikel</h2>
          <!-- End Avatar Media -->
          <div class="space-y-6">
            <!-- Media -->
            <NuxtLink v-for="post in related" class="group flex items-center gap-x-6" :to="post.href">
              <div class="grow">
                <span
                  class="text-sm text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                  {{ post.title }}
                </span>
              </div>

              <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                <nuxt-img provider="imgix" :src="post.image.src" :alt="post.image.alt" loading="lazy" class="w-full h-full absolute top-0 left-0 object-cover rounded-lg"  :modifiers="{ auto: 'format,compress' }"/>
              </div>
            </NuxtLink>
            <!-- End Media -->
          </div>
        </div>
      </div>
      <!-- End Sidebar -->
    </div>
  </div>
  <!-- End Blog Article -->
</template>
