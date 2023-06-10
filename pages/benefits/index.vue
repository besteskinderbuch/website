<script setup>
import { useContentStore } from "~/stores/useContentStore";

const contentStore = useContentStore();

const seoInfo = {
    ...contentStore.baseSeoInfo,
    title: `Vorteile - ${contentStore.baseSeoInfo.title}`,
    description: 'Finde heraus was die Vorteile unseres Gute Nacht Geschichen Abos sind.',
}
const seoMeta = contentStore.createSeoMeta(seoInfo)
useSeoMeta(seoMeta)

const features = contentStore.features;

const breadcrumb = [{ name: "Vorteile", href: "/benefits", current: true }];
</script>
<template>
    <Page :breadcrumb="breadcrumb">
        <div class="mx-auto max-w-7xl px-6 py-3 sm:py-32 lg:px-8 lg:py-6">
            <div class="mx-auto text-center">
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                    Vorteile deines Gute Nacht Geschichten Abos gegenüber Büchern
                </h1>
                <p class="mt-10 text-lg leading-8 text-gray-800 text-justify">
                    Herzlich willkommen auf unserer Vorteile-Seite! Hier bei bestes-kinderbuch.de sind wir stolz darauf,
                    eine Welt voller Wunder und Abenteuer anzubieten - und das ganz einfach mit einem Klick. Unser
                    Gute Nacht Geschichten Abo ist mehr als nur ein Zugang zu Kinderbüchern, es ist ein Schlüssel zu einer
                    Welt, die
                    die Kreativität und Vorstellungskraft deines Kindes auf eine besondere Weise erweitert. Aber was macht
                    unser Abo so besonders? Warum solltest du dich für digital entscheiden? Lass uns dir die zahlreichen
                    Vorteile unseres Abos aufzeigen.
                </p>


                <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                    <article v-for="feature in features" :key="feature.name"
                        class="relative isolate flex flex-col gap-8 lg:flex-row">
                        <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                            <nuxt-img provider="imgix" :src="feature.image.src" :alt="feature.image.alt"
                                class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" loading="lazy"
                                :modifiers="{ auto: 'format,compress' }" />

                            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div>
                            <h2>
                                {{ feature.name }}</h2>
                            <p class="mt-10 text-lg leading-8 text-gray-800 text-justify">
                                {{ feature.longDescription }}
                            </p>
                        </div>
                    </article>
                </div>


                <p class="mt-10 text-lg leading-8 text-gray-800 text-justify">
                    Wir hoffen, dass diese Vorteile dir die Entscheidung erleichtern, dich für unser Gute Nacht Geschichten
                    Abo zu entscheiden. Wir
                    freuen uns darauf, dich und dein Kind auf dieser wunderbaren Reise der Vorstellungskraft und Kreativität
                    zu begleiten.
                </p>
            </div>
    </div>
</Page></template>
