
<script setup>
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/20/solid";
import { useContentStore } from "~/stores/useContentStore";

const contentStore = useContentStore();
const tiers = contentStore.tiers;
const frequencies = contentStore.frequencies;

const frequency = ref(frequencies[0]);

const { isLoggedIn, user } = useAuth();

const loggedIn = ref(false);
onMounted(() => {
  watch(isLoggedIn, (newVal) => {
    loggedIn.value = newVal
  }, { immediate: true })
});
</script>

<template>
  <Section color="bg-blue-600" id="pricing">
    <Container>
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
          Preispläne für die Gute Nacht Geschichten-Abos
        </h2>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
        Entdecke die passende Abo-Option, maßgeschneidert für deine individuellen Bedürfnisse.<br />
        Wir legen großen Wert auf deine Zufriedenheit und bieten daher eine <b>7 Tage Geld-zurück-Garantie</b>.
        Das heißt, wenn du mit deinem Abo nicht zufrieden bist, bekommst du dein Geld innerhalb der ersten 7 Tage
        zurück.<br />
        Aber beeil dich, dieses unschlagbare Angebot gilt nur für kurze Zeit.
      </p>
      <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
        Wenn dir etwas an unserern Abo-Optionen nicht gefällt, schreib uns einfach eine E-Mail an <a
          href="mailto:besteskinderbuch@gmail.com">besteskinderbuch@gmail.com</a> und wir werden versuchen eine Lösung zu
        finden.
      </p>
      <div class="mt-16 flex justify-center">
        <RadioGroup v-model="frequency"
          class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-gray-800">
          <RadioGroupLabel class="sr-only">Zahlungsrythmus</RadioGroupLabel>
          <RadioGroupOption as="template" v-for="option in frequencies" :key="option.value" :value="option"
            v-slot="{ checked }">
            <div class="flex justify-center items-center cursor-pointer rounded-full px-2.5 py-1" :class="[
              checked ? 'bg-secondary1' : '',
            ]">
              <span>{{ option.label }}{{ option.additionalInfo }}</span>
            </div>
          </RadioGroupOption>
        </RadioGroup>
      </div>
      <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="tier in  tiers " :key="tier.id" :class="[
          tier.mostPopular
            ? 'bg-white/5 ring-2 ring-secondary1'
            : 'ring-2 ring-gray-100/30',
          'rounded-3xl p-8 xl:p-10',
        ]">
          <div class="flex items-center justify-between gap-x-4">
            <h3 :id="tier.id" class="text-lg font-semibold leading-8 text-gray-100">
              {{ tier.name }}
            </h3>
            <p v-if="tier.mostPopular"
              class="rounded-full bg-secondary1 px-2.5 py-1 text-xs font-semibold leading-5 text-gray-800">
              am beliebtesten
            </p>
          </div>
          <p class="mt-4 text-sm leading-6 text-gray-300">
            {{ tier.description }}
          </p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span v-if="tier.price[frequency.value].discounted" class="text-4xl font-bold tracking-tight text-gray-100">{{
              tier.price[frequency.value].discounted
            }}
            </span>

            <span class="text-4xl font-bold tracking-tight text-gray-100"
              :class="{ 'diagonal-line-through': !!tier.price[frequency.value].discounted }">
              {{ tier.price[frequency.value].current }}
            </span>

            <span v-if="!tier.isFree" class="text-sm font-semibold leading-6 text-gray-100">{{
              frequency.priceSuffix
            }}</span>
          </p>
          <span v-if="loggedIn && tier.id === user.subscription"
            class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            :class="[tier.mostPopular ? 'bg-secondary1 text-white shadow-sm focus-visible:outline-secondary1' : 'bg-white/10 text-white  focus-visible:outline-white']">
            <span>Dein aktuelles Abo</span>
          </span>

          <NuxtLink v-else :to="tier.href[frequency.value]" :aria-describedby="tier.id"
            class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            :class="[tier.mostPopular ? 'bg-secondary1 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-secondary1' : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white']">
            <span v-if="!tier.isFree">Kaufen</span>
            <span v-else>Kostenlos registrieren</span>
          </NuxtLink>
          <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
            <li v-for=" feature  in  tier.features[frequency.value] " :key="feature" class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-white" aria-hidden="true" />
              {{ feature }}
            </li>
            <li v-for=" feature  in  tier.features.always " :key="feature" class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-white" aria-hidden="true" />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>

      <div class="isolate mx-auto mt-10 max-w-md lg:mx-0 lg:max-w-none ">
        <div
          class="mt-8 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-100/30 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
          <div class="lg:min-w-0 lg:flex-1">
            <h3 class="text-lg font-semibold leading-8 text-gray-100">Enterprise</h3>
            <p class="mt-1 text-sm leading-6 text-gray-300">Du möchtest noch mehr Geschichten und Features haben?</p>
          </div>

          <a href="mailto:besteskinderbuch@gmail.com?subject=Enterprise Abo" aria-describedby="enterprise"
            class="block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white">
            Sales kontaktieren
          </a>
        </div>
      </div>

    </Container>
  </Section>
</template>

<style>
.diagonal-line-through {
  font-size: 14px;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 50%;
    right: 0;
    border-top: 3px solid;
    border-color: red;

    transform: rotate(-5deg);
  }
}
</style>
