<template>
    <div class="py-10 sm:py-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 space-y-10">
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">In Kürze</h1>
            <p class="mt-6 text-lg leading-8 text-gray-700 text-justify">
                Hier auf unserer Homepage sind wir stets bemüht, die Erwartungen unserer Nutzer zu übertreffen und ihre
                Erfahrung stetig zu verbessern. Daher freuen wir uns, dir einen kleinen Einblick in unsere bevorstehenden
                Pläne zu geben – unsere Roadmap für die nahe Zukunft:</p>
            <nav aria-label="Progress">
                <ol role="list" class="overflow-hidden">
                    <li v-for="(step, stepIdx) in steps" :key="step.name"
                        :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']">
                        <template v-if="step.status === 'current'" condition="step.status === 'current'">
                            <div v-if="stepIdx !== steps.length - 1"
                                class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                            <a :href="step.href" class="group relative flex items-start" aria-current="step">
                                <span class="flex h-9 items-center" aria-hidden="true">
                                    <span
                                        class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                                        <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                                    </span>
                                </span>
                                <span class="ml-4 flex min-w-0 flex-col">
                                    <span class="text-lg leading-8 text-indigo-600">{{ step.name }}</span>
                                    <span class="text-md leading-8 text-gray-700">{{ step.description }}</span>
                                </span>
                            </a>
                        </template>
                        <template v-else>
                            <div v-if="stepIdx !== steps.length - 1"
                                class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                            <div class="group relative flex items-start">
                                <span class="flex h-9 items-center" aria-hidden="true">
                                    <span
                                        class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                                        <span class="h-2.5 w-2.5 rounded-full bg-transparent" />
                                    </span>
                                </span>
                                <span class="ml-4 flex min-w-0 flex-col">
                                    <span class="text-lg leading-8 text-gray-500">{{ step.name }}</span>
                                    <span class="text-md leading-8 text-gray-700">{{ step.description }}</span>
                                </span>
                            </div>
                        </template>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const steps = [
    { name: 'Geschichten für mehrsprachige Kinder und Nicht-Muttersprachler', description: 'Wir erkennen die wachsende Notwendigkeit, Kindern aus unterschiedlichen sprachlichen Hintergründen gerecht zu werden. Daher arbeiten wir daran, unser Angebot auf Geschichten für mehrsprachige Kinder und Nicht-Muttersprachler auszuweiten.', status: 'current' },
    {
        name: 'Neue Abonnementoptionen',
        description: 'Wir planen, noch flexiblere Abo-Modelle einzuführen, um die Bedürfnisse jedes einzelnen Lesers optimal zu bedienen.',
        status: 'upcoming',
    },
    {
        name: 'Helligkeit und Schriftgröße einstellbar',
        description: '',
        status: 'upcoming',
    },
    {
        name: 'Interaktive Elemente',
        description: 'In der Zukunft möchten wir unseren jungen Lesern ein noch spannenderes Leseerlebnis bieten, indem wir interaktive Elemente zu unseren digitalen Geschichten hinzufügen.',
        status: 'upcoming',
    },
    {
        name: 'Verbesserter Audioplayer',
        description: 'Wir sind bestrebt, unseren Audioplayer zu überarbeiten und ihn mit erweiterten Funktionen auszustatten. So wollen wir eine noch komfortablere und anpassungsfähigere Hörerfahrung für unsere Nutzer schaffen.',
        status: 'upcoming',
    },
    {
        name: 'Erweiterter Kundensupport',
        description: 'Kundenzufriedenheit steht für uns an oberster Stelle. Daher arbeiten wir daran, unseren Kundenservice zu verbessern und unsere Reaktionszeiten zu verkürzen, um dir bei Fragen oder Problemen noch schneller zur Seite stehen zu können.',
        status: 'upcoming',
    },
    {
        name: 'Mobile App',
        description: 'Wir wissen, wie wichtig Mobilität in der heutigen Zeit ist. Daher planen wir, eine mobile App zu entwickeln, damit du und deine Kinder unsere Geschichten jederzeit und überall genießen können.',
        status: 'upcoming',
    },
    {
        name: 'Personalisierte Empfehlungen',
        description: 'Wir planen, ein personalisiertes Empfehlungssystem einzuführen, das auf den individuellen Vorlieben und Interessen deines Kindes basiert. So können wir für jeden jungen Leser die perfekten Geschichten vorschlagen.',
        status: 'upcoming',
    },
]
</script>