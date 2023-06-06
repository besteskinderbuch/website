<script setup>
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
  <Section>
    <Container v-if="data" class="space-y-4">
      <!-- Content -->

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
            <StarRating read-only :show-rating="false" :increment="0.5" :star-size="20" :rating="data.rating" />
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

    </Container>
  </Section>
  <!-- End Story Article -->
</template>
