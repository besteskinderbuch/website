<script setup>
const props = defineProps({
  id: String,
  image: Object,
  imageAlt: String,
  href: String,
});

function track() {
  useTrackEvent('select_promotion', { promotion_name: "book", promotion_id: props.id })
}
</script>

<template>
  <a :href="href" class="h-full flex flex-col justify-between" target="_blank" @click="track">
    <div class="mx-auto">
      <nuxt-img provider="imgix" :src="image.src" :alt="image.alt" class="w-auto h-72" loading="lazy" :modifiers="{ auto: 'format,compress' }"/>
    </div>
    <div class="flex justify-center">
      <div class="hover:bg-white rounded-sm mt-5">
        <Icon name="AmazonIcon" width="5em" />
      </div>
    </div>
  </a>
</template>
