<template>
  <footer class="bg-primary1" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-10">
      <div class="flex flex-col w-full gap-5">
        <div class="flex flex-col items-center md:flex-row md:justify-between">
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/stories">
              Gute Nacht Geschichten
            </NuxtLink>
          </div>
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/help">
              Häufig gestellte Fragen
            </NuxtLink>
          </div>
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/impressum">
              Impressum
            </NuxtLink>
          </div>
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/dataprivacy">
              Datenschutz
            </NuxtLink>
          </div>
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/roadmap">
              In Kürze/Roadmap
            </NuxtLink>
          </div>
          <div>
            <NuxtLink class="text-sm font-semibold leading-6 text-white" to="/articles">
              Ratgeber
            </NuxtLink>
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
