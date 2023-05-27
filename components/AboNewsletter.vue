<script setup>
const props=defineProps({
  id: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
});

const name = computed(()=>`${props.id}-${props.frequency}`)

</script>
<template>
  <div class="newsletter-section bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex md:flex-row gap-10 justify-between flex-col">
        <div class="max-w-xl text-3xl  tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
          <h2 class="inline sm:block lg:inline xl:block font-bold">Danke für dein Intesse an unserem Abo!</h2>
          <p class="mt-5 text-lg leading-8 text-gray-600">Wir sind leider noch mitten im Aufbau, daher kannst du dieses
            Abo derzeit noch nicht buchen.
            Bei großen Interesse werden wir es höher priorisieren und es in wenigen Tagen/Wochen bereitstellen.
            Trage dich hierfür bitte in diesem Abo Newsletter ein und wir informieren dich sobald es buchbar ist.</p>
        </div>

        <div class="w-full max-w-md lg:col-span-5 lg:pt-2">
          <NewsletterForm type="abo" :name="name"/>
        </div>
      </div>
      <p class="mt-5 text-lg leading-8 text-gray-600">In der Zwischenzeit kannst du <NuxtLink to="/stories"
          class="text-blue-300">hier</NuxtLink> unsere gratis Geschichten lesen. Nach der Erstellung eines kostenlosen
        Accounts hast du sogar Zugriff auf noch mehr.</p>

    </div>
  </div>
</template>
  