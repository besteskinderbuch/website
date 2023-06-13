<template>
  <Section>
    <Container>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Aus dem Ratgeber
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Hier findest du viele interessante Artikel rund um das Thema Kindergeschichten.
          Und jede Woche kommen Neue dazu! Wenn du nichts verpassen willst, trag dich <NuxtLink to="/articles">hier
          </NuxtLink>
          in unseren Newsletter ein
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogTeaser v-for="article in previewArticles" :key="article.id" :data="article"
          class="flex flex-col items-start justify-between">
        </BlogTeaser>
      </div>
      <div class="w-full flex justify-center mt-20">
        <BasicLink href="/articles">
          <Icon name="material-symbols:arrow-forward" />alle Artikel
        </BasicLink>
      </div>
    </Container>
  </Section>
</template>

<script setup>
const { previewArticles, getAll } = useArticles()


await useAsyncData(
  'articles',
  () =>  getAll()
)




</script>
