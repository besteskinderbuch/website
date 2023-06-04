<script setup>
const props=defineProps({
  href: String,
  size: {
    type: String,
    default: "sm",
  },
  theme: {
    type: String,
    default: "dark",
  },
});

const current = useRoute().path === props.href;


const color = computed(() => {
  if (props.theme === "light") {
    return "text-white";
  } else {
    return "text-gray-700";
  }
});

const currentColor = computed(() => {
  if (props.theme === "light") {
    return "border-white text-white";
  } else {
    return "border-gray-300 text-gray-700";
  }
});


</script>

<template>
  <NuxtLink
    :to="href"
    :class="[
      `text-${size}`,
      current
        ? `inline-flex items-center border-b-2  px-1 pt-1 font-medium ${currentColor}`
        : `inline-flex items-center border-b-2 border-transparent px-1 pt-1  font-medium ${color} hover:border-gray-300 hover:text-gray-700`,
    ]"
    :aria-current="current ? 'page' : undefined"
  >
    <slot></slot
  ></NuxtLink>
</template>
