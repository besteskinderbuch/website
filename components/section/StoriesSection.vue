<script setup>
import { useStoryStore } from '~/stores/useStoryStore';
const { isLoggedIn } = useAuth();

const loggedIn = ref(false);

onMounted(() => {
    watch(isLoggedIn, (newVal) => {
        loggedIn.value = newVal
    }, { immediate: true })
});

const storyStore = useStoryStore();
const freeStories = computed(() => storyStore.freeStories);
const publicStories = computed(() => storyStore.publicStories);

const stories = computed(() => {
  if (loggedIn.value) {
    return freeStories.value.concat(publicStories.value);
  }

  return publicStories.value;
});
</script>
<template>
  <Section>
    <Container>
      <div class="mx-auto text-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Gute Nacht Geschichten zum Vorlesen
        </h1>

        <h2 class="mt-6 text-lg leading-8 text-gray-800 text-justify">
          Bereit für eine Reise in die magische Welt der Fantasie?
        </h2>
        <p v-if="!loggedIn" class="mt-6 text-lg leading-8 text-gray-800 text-justify">
          Hier findest du 2 kostenlose Gute Nacht Geschichten zum Vorlesen.<br/>
          Um 5 weitere kostenlose Bonus Gute Nacht Geschichten genießen zu können, kannst du dir <NuxtLink to="/login" class="text-blue-300">hier</NuxtLink> deinen persönlichen kostenlosen Account erstellen.
        </p>
        <p v-if="!loggedIn" class="mt-6 text-lg leading-8 text-gray-800 text-justify">
          Doch das ist erst der Anfang! Für die Abenteurer, die bereit sind, tiefer in die unendlichen Weiten unserer
          Fantasiewelt einzutauchen, haben wir eine Schatztruhe voller Geschichten, die nur darauf warten, entdeckt zu
          werden. Klick <NuxtLink to="/#pricing" class="text-blue-300">hier</NuxtLink> und wähle das Abonnement, das zu
          dir passt. Denn mit unseren Premium-Abos kannst du die ganze Fülle unserer einzigartigen Geschichtensammlung
          erkunden.<br/>
          Stelle dir vor, du könntest jeden Abend eine neue Geschichte entdecken. Oder sogar zwei! Die Möglichkeiten sind
          grenzenlos und du kannst sie freischalten, indem du in die fesselnde Welt unserer Premium-Abonnements
          eintauchst. Mach den Sprung und tauche ein in ein Meer voller Geschichten, das nie austrocknet. Entdecke,
          träume, lerne und wachse mit Bestes-Kinderbuch.de - denn Geschichten sind der Schlüssel zur Fantasie!
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <StoryTeaser v-for="story in stories" :key="story.id" :data="story"
          class="flex flex-col items-start justify-between">
        </StoryTeaser>
      </div>
    </Container>
  </Section>
</template>

