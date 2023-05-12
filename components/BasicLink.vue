<script setup>
defineProps({
    name: String,
    href: String,
    current: Boolean,
})
</script>

<template>
  <a
    :key="name"
    :href="href"
    :class="[
      current
        ? 'bg-gray-900 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
      'rounded-md px-3 py-2 text-sm font-medium',
    ]"
    :aria-current="current ? 'page' : undefined"
    >{{ name }}</a
  >
</template>
