
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";
import { useContentStore } from "~/stores/useContentStore";

const contentStore = useContentStore();
const faqs = contentStore.faqs;

function openedFaq(faq) {
  useTrackEvent('faq_opened', {
    id: faq.id,
  })
}
</script>

<template>
  <Section>
    <Container>
      <div class="mx-auto max-w-7xl ">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Häufig gestellte Fragen
          </h2>
          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Disclosure as="div" v-for="faq in faqs" :key="faq.id" class="pt-6" v-slot="{ open }" @click="openedFaq(faq)"
              :data-id="faq.id">
              <dt>
                <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                  <span class="text-base font-semibold leading-7">{{
                    faq.question
                  }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base leading-7 text-gray-600" v-html="faq.answer"></p>
              </DisclosurePanel>
            </Disclosure>
          </dl>

        </div>
        <div class="w-full flex justify-center mt-20">
          <BasicLink href="/help">
            <Icon name="material-symbols:arrow-forward" />weiter zur Hilfe
          </BasicLink>
        </div>
      </div>
    </Container>
  </Section>
</template>
