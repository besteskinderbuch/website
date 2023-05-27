<template>
  <footer class="bg-primary1" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-10">
      <div class="flex flex-col w-full gap-5">
        <div class="flex flex-col items-center md:flex-row md:justify-between">
          <div>
            <a class="text-sm font-semibold leading-6 text-white" href="/stories">
              Kurzgeschichten
            </a>
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
            <a class="text-sm font-semibold leading-6 text-white" href="/help">
              Häufig gestellte Fragen
            </a>
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
            <a class="text-sm font-semibold leading-6 text-white" href="/impressum">
              Impressum
            </a>
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
            <a class="text-sm font-semibold leading-6 text-white" href="/dataprivacy">
              Datenschutz
            </a>
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
            <a class="text-sm font-semibold leading-6 text-white" href="/roadmap">
              In Kürze
            </a>
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
            <a class="text-sm font-semibold leading-6 text-white" href="/blog">
              Blog
            </a>
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
            Du willst regelmäßig über unsere Neuigkeiten informiert werden? <br />
            Dann melde dich zum Newsletter an und sichere dir damit einen Monat gratis
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
