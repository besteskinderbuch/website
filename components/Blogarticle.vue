<script setup>
import { useBlogStore } from "~/stores/useBlogStore";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const blogStore = useBlogStore();
const posts = blogStore.posts;

const post = posts.find((post) => post.id === props.id);

const others = posts.filter((post) => post.id !== props.id);

const related = ref([])
related.value = others.sort(() => Math.random() - Math.random()).slice(0, 5)

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
                {{ post.title }}
              </h1>

              <div class="flex items-center gap-x-5">
                <p class="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  {{ post.date }}
                </p>
              </div>
              <nuxt-img provider="imgix" :src="post.image.src" :alt="post.image.alt"
                :modifiers="{ auto: 'format,compress' }" />

              <div v-html="post.content" class="prose max-w-none"></div>
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
                  <div v-for="tag in post.tags"
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
        <div class="lg:col-span-1 lg:w-full lg:h-full border-l md:border-0 border-primary1/50">
          <div class="sticky top-0 left-0 py-8 lg:pl-8">

            <h2 class="mb-10 text-center">Andere Blogartikel</h2>
            <!-- End Avatar Media -->
            <div class="space-y-6">
              <!-- Media -->
              <NuxtLink v-for="post in related" class="group flex items-center gap-x-6" :to="post.href">
                <div class="grow">
                  <span
                    class="text-sm text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                    {{ post.title }}
                  </span>
                </div>

                <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                  <nuxt-img provider="imgix" :src="post.image.src" :alt="post.image.alt" loading="lazy"
                    class="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                    :modifiers="{ auto: 'format,compress' }" />
                </div>
              </NuxtLink>
              <!-- End Media -->
            </div>
          </div>
        </div>
        <!-- End Sidebar -->
      </div>
    </Container>
  </Section>
  <!-- End Blog Article -->
</template>
