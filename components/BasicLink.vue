<script setup>
defineProps({
  name: String,
  href: String,
  current: Boolean,
  type: String,
  size: {
    type: String,
    default: "lg",
  },
  color: {
    type: String,
    default: "gray-800",
  },
});
</script>

<template>
  <a
    v-if="type == 'button'"
    :href="href"
    :class="[`text-${size}`]"
    class="relative inline-flex items-center gap-x-1.5 rounded-md bg-primary1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
  >
    <slot></slot>
  </a>
  <a
    v-else
    :key="name"
    :href="href"
    :class="[`text-${size}`, `text-${color}`]"
    :aria-current="current ? 'page' : undefined"
  >
    <slot></slot
  ></a>
</template>
