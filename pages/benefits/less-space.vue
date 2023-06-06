<script setup>
useServerSeoMeta({
    title: "bestes-kinderbuch - Hilfe",
    description: 'Entdecke unsere Hilfe-Seite auf Bestes-Kinderbuch.de. Hier findest du Antworten auf deine Fragen zu unserem Kinderbuch-Abo. Begleite uns auf dieser magischen Lese-Reise!',
    ogTitle: "bestes-kinderbuch - Hilfe",
    ogDescription: 'Entdecke unsere Hilfe-Seite auf Bestes-Kinderbuch.de. Hier findest du Antworten auf deine Fragen zu unserem Kinderbuch-Abo. Begleite uns auf dieser magischen Lese-Reise!',
    ogImage: 'https://besteskinderbuch-8301.imgix.net/buchtanz.png?ar=2:1&fit=crop&w=1456',
    twitterCard: 'summary_large_image',
})

useHead({
    htmlAttrs: {
        lang: 'de',
    },
})
</script>
<template>
    <Page>
        <div class="mx-auto max-w-7xl px-6 py-3 sm:py-32 lg:px-8 lg:py-6">
            <div class="mx-auto text-center">
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                    Platzsparend
                </h1>
                <p class="mt-10 text-lg leading-8 text-gray-800 text-justify">
                    Herzlich willkommen in unserem Hilfe-Bereich! Wir freuen uns, dass du ein Teil unserer magischen Kinder
                    Kurzgeschichten-Abo Welt sein möchtest.
                    Wir verstehen, dass du möglicherweise Fragen hast, und wir sind hier, um dir dabei zu helfen, Antworten
                    zu finden.
                </p>
            </div>
        </div>
    </Page>
</template>
