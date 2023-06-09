<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-1 md:space-x-4">
      <li>
        <div>
          <NuxtLink to="/" class="breadcrumb-link md:max-w-none text-gray-400 hover:text-gray-500">
            <Icon name="material-symbols:other-houses" class="flex-shrink-0" width="1.25rem" height="1.25rem" aria-hidden="true" />
            <span class="sr-only">Startseite</span>
          </NuxtLink>
        </div>
      </li>
      <li v-for="page in data" :key="page.name">
        <div class="flex items-center">
          <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <NuxtLink :to="page.href" class="breadcrumb-link ml-1 md:ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            :aria-current="page.current ? 'page' : undefined">{{ page.name }}</NuxtLink>
        </div>
      </li>
    </ol>
  </nav>
</template>
  
<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>
<style>
.breadcrumb-link {
    text-overflow: ellipsis;
    max-width: 170px;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
