<script setup>
import StarRating from 'vue-star-rating'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const audioContainer = templateRef('audioContainer')
onMounted(() => {
  if (props.data.audio?.src) {
    const sound = document.createElement('audio');
    sound.id = 'audio-player';
    sound.controls = 'controls';
    sound.src = props.data.audio.src;
    sound.type = 'audio/mpeg';
    audioContainer.value.appendChild(sound);

    audioContainer.value.addEventListener('play', () => {
      useTrackEvent("play", {
        story: props.data.id,
      })
    })
    audioContainer.value.addEventListener('pause', () => {
      useTrackEvent("pause", {
        story: props.data.id,
      })
    })
    audioContainer.value.addEventListener('ended', () => {
      useTrackEvent("ended", {
        story: props.data.id,
      })
    })
  }
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div v-if="data">
      <!-- Content -->
        <NuxtLink class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline"
          to="/stories">
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
          Zurück zu allen Stories
        </NuxtLink>

        <h1 class="text-3xl font-bold lg:text-5xl">
          {{ data.title }}
        </h1>

        <div class="flex items-center gap-x-5">
          <!-- <a
                class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200"
                href="#"
              >
                Company News
              </a> -->
          <p class="text-xs sm:text-sm text-gray-800">
            {{ data.date }}
          </p>
          <div class="leading-none pb-1">
            <ClientOnly>
              <StarRating read-only :show-rating="false" :increment="0.5" star-size="20" :rating="data.rating" />
            </ClientOnly>
          </div>
        </div>

        <nuxt-img provider="imgix" :src="data.image.src" :alt="data.image.alt" :modifiers="{ auto: 'format,compress' }" />


        <div ref="audioContainer">

        </div>

        <div v-html="data.content" class="prose max-w-none"></div>

        <div class="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
          <!-- Badges/Tags -->
          <div>
            <div v-for="tag in data.tags"
              class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-primary1 text-gray-100">
              {{ tag }}
            </div>
          </div>
          <!-- End Badges/Tags -->
        </div>

    </div>
  </div>
  <!-- End Story Article -->
</template>
