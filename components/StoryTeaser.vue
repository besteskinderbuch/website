<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});


const { isLoggedIn } = useAuth();

const loggedIn = ref(false);

onMounted(() => {
  watch(isLoggedIn, (newVal) => {
    loggedIn.value = newVal
  }, { immediate: true })
});

const subscriptionFullfilled = computed(() => loggedIn.value || !props.data.neededSubscription)
</script>
<template>
  <article class="flex flex-col items-start justify-between">
    <NuxtLink v-if="subscriptionFullfilled"  :to="data.href">
      <div class="relative w-full">
        <nuxt-img provider="imgix" :src="data.image.src" :alt="data.image.alt" loading="lazy"
          :modifiers="{ auto: 'format,compress' }"
          class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
      </div>
      <div class="max-w-xl">
        <div class="mt-4 md:mt-8 flex items-center gap-x-4 text-xs">
          <time :datetime="data.datetime" class="text-gray-500">{{
            data.date
          }}</time>
          <ClientOnly>
            <StarRating read-only :show-rating="false" :increment="0.5" :star-size="20" :rating="data.rating" />
          </ClientOnly>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <span class="absolute inset-0" />
            {{ data.title }}
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {{ data.description }}
          </p>
        </div>
      </div>
    </NuxtLink>

    <div v-else>
      <div class="relative w-full">
        <nuxt-img provider="imgix" :src="data.image.src" :alt="data.image.alt" loading="lazy"
          :modifiers="{ auto: 'format,compress' }"
          class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] blur-sm" />
        <div class="absolute flex justify-center items-center inset-0">
          <div
            class="absolute flex flex-col justify-center items-center p-4 space-y-3">
            <BasicLink href="login" type="button">Account erstellen</BasicLink>
          </div>
        </div>
      </div>
      <div class="max-w-xl">
        <div class="mt-4 md:mt-8 flex items-center gap-x-4 text-xs">
          <time :datetime="data.datetime" class="text-gray-500">{{
            data.date
          }}</time>
          <ClientOnly>
            <StarRating read-only :show-rating="false" :increment="0.5" :star-size="20" :rating="data.rating" />
          </ClientOnly>
        </div>
        <div class="group relative">
          <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <span class="absolute inset-0" />
            {{ data.title }}
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {{ data.description }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
