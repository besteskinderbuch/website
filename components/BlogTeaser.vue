<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});

</script>
<template>
  <article class="flex flex-col items-start justify-between">
    <NuxtLink :to="data.href">
      <div class="relative w-full">
        <nuxt-img provider="imgix" :src="data.image.src" :alt="data.image.alt"
          class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" loading="lazy"
          :modifiers="{ auto: 'format,compress' }" />
        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
      <div class="max-w-xl">
        <div class="mt-4 md:mt-8 flex items-center gap-x-4 text-xs">
          <time :datetime="data.datetime" class="text-gray-500">{{
            data.date
          }}</time>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <span class="absolute inset-0">
              {{ data.title }}
            </span>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {{ data.description }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
