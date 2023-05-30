<template>
  <footer class="bg-primary1" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-10">
      <div class="flex flex-col w-full gap-5">
        <div class="flex flex-col items-center md:flex-row md:justify-between">
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/stories">
              Kurzgeschichten
            </NuxtLink>
            <!--  <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.stories" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    >{{ items.name }}</a
                  >
                </li>
              </ul> -->
          </div>
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/help">
              Häufig gestellte Fragen
            </NuxtLink>
            <!-- <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul> -->
          </div>
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/impressum">
              Impressum
            </NuxtLink>
            <!-- <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul> -->
          </div>
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/dataprivacy">
              Datenschutz
            </NuxtLink>
            <!-- <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul> -->
          </div>
          <!-- test -->
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/roadmap">
              In Kürze
            </NuxtLink>
            <!--  <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.stories" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    >{{ items.name }}</a
                  >
                </li>
              </ul> -->
          </div>
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/blog">
              Blog
            </NuxtLink>
            <!-- <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    >{{ item.name }}</a
                  >
                </li>
              </ul> -->
          </div>
        </div>
        <div class="pt-5 flex flex-col md:flex-row justify-between items-center border-t gap-5 border-white/10">
          <h3 class="text-gray-100 text-center md:text-left">
            Möchtest du stets auf dem Laufenden bleiben und über unsere frisch veröffentlichten Geschichten informiert werden?<br />
            Dann abonniere unseren Newsletter und erhalte als kleines Dankeschön einen 25% Rabatt auf den ersten Monat eines Abos.
          </h3>
          <div>
            <NewsletterForm type="footer" />
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-5 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-5">
        <!--  <div class="flex space-x-6 md:order-2">
          <a
            v-for="item in navigation.social"
            :key="item.name"
            :href="item.href"
            class="text-gray-500 hover:text-gray-400"
          >
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div> -->
        <p class="mt-5 text-xs leading-5 text-gray-100 md:order-1 md:mt-0">
          &copy; 2023 Reinhard Dortmann. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useContentStore } from "~/stores/useContentStore";

const contentStore = useContentStore();
const navigation = contentStore.footerNavigation;

</script>
<style lang="scss">
.newsletter-form {
  [data-form="db3c30ce-f4eb-11ed-8282-ffc86496b2ad"] .form-container {
    @apply ml-0;
  }
}
</style>
