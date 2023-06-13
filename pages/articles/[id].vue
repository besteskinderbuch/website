<script setup>
import { useContentStore } from '~/stores/useContentStore';

const route = useRoute();
const id = route.params.id;

const { articles, getAll } = useArticles()

await useAsyncData(
  `articles`,
  () => getAll()
)

const article = computed(() => articles.value.find((a) => a.id === id))
const others = computed(() => articles.value.filter((a) => a.id !== id))


const related = computed(() => others.value.sort(() => Math.random() - Math.random()).slice(0, 5))

const contentStore = useContentStore();
const seoInfo = {
  ...contentStore.baseSeoInfo,
  title: `Ratgeber: ${article.value.title}`,
  type: 'article',
  description: 'Unser Ratgeber ist voller faszinierender Artikel rund ums Thema Kinder, Gute Nacht Geschichten und mehr. Jetzt anmelden!',
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta) 

const breadcrumb = computed(() => {
  if (!article.value) {
    return []
  }

  return [{ name: "Alle Artikel", href: "/articles" }, { name: article.value.title, href: `/articles/${article.value.id}`, current: true }]
})
</script>

<template>
  <Page  :breadcrumb="breadcrumb">
    <Blogarticle :data="article">
      <!-- Sidebar -->
      <div class="lg:col-span-1 lg:w-full lg:h-full">
        <div class="sticky top-0 left-0 py-8 lg:pl-8">

          <h2 class="mb-10 text-center">Andere Artikel</h2>
          <!-- End Avatar Media -->
          <div class="space-y-6">
            <!-- Media -->
            <NuxtLink v-for="relate in related" class="group flex items-center gap-x-6" :to="relate.href">
              <div class="grow">
                <span
                  class="text-sm text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                  {{ relate.title }}
                </span>
              </div>

              <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                <nuxt-img provider="imgix" :src="relate.image.src" :alt="relate.image.alt" loading="lazy"
                  class="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                  :modifiers="{ auto: 'format,compress' }" />
              </div>
            </NuxtLink>
            <!-- End Media -->
          </div>
        </div>
      </div>
    </Blogarticle>
  </Page>
</template>
