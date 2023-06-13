<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Section>
    <!-- Blog Article -->
    <Container>
      <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 l lg:gap-x-12">
        <!-- Content -->
        <div class="lg:col-span-2">
          <div class="py-8">
            <div class="space-y-5 lg:space-y-8">

              <h1 class="text-3xl font-bold lg:text-5xl dark:text-white">
                {{ data.title }}
              </h1>

              <div class="flex items-center gap-x-5">
                <p class="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  {{ data.date }}
                </p>
              </div>
              <nuxt-img provider="imgix" :src="data.image.src" :alt="data.image.alt"
                :modifiers="{ auto: 'format,compress' }" />

              <div v-html="data.content" class="prose max-w-none"></div>
              <div class="prose max-w-none">
                <p>Folge uns auf <a href="https://www.facebook.com/people/Bestes-Kinderbuch/100093505710759/"
                    target="_blank" rel="noopener noreferrer">Facebook</a> und <a
                    href="https://www.instagram.com/bestes_kinderbuch/" target="_blank"
                    rel="noopener noreferrer">Instagram</a>, um über die neuesten Entwicklungen in der Welt der
                  Kinderliteratur auf dem Laufenden zu bleiben.</p>
              </div>


              <div class="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                <!-- Badges/Tags -->
                <div>
                  <div v-for="tag in data.tags"
                    class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    {{ tag }}
                  </div>
                </div>
                <!-- End Badges/Tags -->
              </div>
            </div>
          </div>
        </div>
        <!-- End Content -->

        <!-- Sidebar -->
        <div class="lg:col-span-1 lg:w-full lg:h-full">
          <div class="sticky top-0 left-0 py-8 lg:pl-8">
           <slot></slot>
          </div>
        </div>
        <!-- End Sidebar -->
      </div>
    </Container>
  </Section>
  <!-- End Blog Article -->
</template>
