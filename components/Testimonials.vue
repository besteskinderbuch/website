<template>
  <div class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#0f7200] to-[#4690c9]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        " />
    </div>
    <div
      class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      aria-hidden="true">
      <div
        class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#0f7200] to-[#4690c9] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        " />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Andere sind auch überzeugt
        </h2>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <figure
          class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
          <blockquote class="p-12 text-xl leading-8 tracking-tight text-gray-900">
            <p>{{ `“${featuredTestimonial.body}”` }}</p>
          </blockquote>
          <figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
            <nuxt-img provider="imgix" class="h-10 w-10 flex-none rounded-full bg-gray-50"
              :src="featuredTestimonial.author.image.src" loading="lazy" :alt="featuredTestimonial.author.image.alt"  :modifiers="{ auto: 'format,compress' }"/>
            <div class="flex-auto">
              <div class="font-semibold">
                {{ featuredTestimonial.author.name }}
              </div>
            </div>
          </figcaption>
        </figure>
        <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx"
          class="space-y-8 xl:contents xl:space-y-0">
          <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[
            (columnGroupIdx === 0 && columnIdx === 0) ||
              (columnGroupIdx === testimonials.length - 1 &&
                columnIdx === columnGroup.length - 1)
              ? 'xl:row-span-2'
              : 'xl:row-start-1',
            'space-y-8',
          ]">
            <figure v-for="testimonial in column" :key="testimonial.author.handle"
              class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote class="text-gray-900">
                <p>{{ `“${testimonial.body}”` }}</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
               <!--  <nuxt-img provider="imgix" class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl"
                  :alt="testimonial.author.imageAlt" loading="lazy" :modifiers="{ auto: 'format,compress' }" /> -->
                <div>
                  <div class="font-semibold">{{ testimonial.author.name }}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContentStore } from "~/stores/useContentStore";

const contentStore = useContentStore();
const testimonials = contentStore.testimonials;
const featuredTestimonial = contentStore.featuredTestimonial;
</script>
