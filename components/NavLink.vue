<script setup>
const props=defineProps({
  href: String,
  size: {
    type: String,
    default: "sm",
  },
});

const current = useRoute().path === props.href;
</script>

<template>
  <NuxtLink
    :to="href"
    :class="[
      `text-${size}`,
      current
        ? 'inline-flex items-center border-b-2 border-primary1 px-1 pt-1 font-medium text-gray-900'
        : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1  font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
    ]"
    :aria-current="current ? 'page' : undefined"
  >
    <slot></slot
  ></NuxtLink>
</template>
