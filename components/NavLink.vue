<script setup>
const props = defineProps({
  href: String,
  size: {
    type: String,
    default: "sm",
  },
  theme: {
    type: String,
    default: "dark",
  },
  border: {
    type: Boolean,
    default: true,
  },
});

const route = useRoute()
const current = computed(() => route.path === props.href)

const textClasses = computed(() => {
  if (current) {
    if (props.theme === "light") {
      return "text-white";
    } else {
      return "text-gray-700";
    }
  }
  return "";
});

const borderClasses = computed(() => {
  if (!props.border) {
    return ""
  }

  const classes = ["border-b-2"]
  if (props.theme === "light") {
    classes.push("hover:border-white")
  } else {
    classes.push("hover:border-gray-700")
  }

  if (current.value) {
    if (props.theme === "light") {
      classes.push("border-white")
    } else {
      classes.push("border-gray-700")
    }
  } else {
    classes.push("border-transparent")
  }


  return classes
});



</script>

<template>
  <NuxtLink :to="href" class="inline-flex items-center font-medium px-1 pt-1" :class="[
    `text-${size}`,
    borderClasses,
    textClasses,
  ]" :aria-current="current ? 'page' : undefined">
    <slot></slot>
  </NuxtLink>
</template>
