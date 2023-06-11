<script setup>
import { storeToRefs } from 'pinia'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useContentStore } from "~/stores/useContentStore";
import { useAccountStore } from "~/stores/useAccountStore";


defineProps({
    hidden: {
        type: Boolean,
        default: false,
    },
})
const accountStore = useAccountStore();

const loggedIn = ref(false);
onMounted(() => {
    const { loggedIn: bla } = storeToRefs(accountStore);

    watch(bla, (newVal) => {
        loggedIn.value = newVal
    }, { immediate: true })
});


const user = computed(() => accountStore.user);


const contentStore = useContentStore();
const navigation = contentStore.navigation;
const importantNavigation = contentStore.importantNavigation;
const nonImportantNavigation = contentStore.nonImportantNavigation;
const userNavigation = contentStore.userNavigation;



const fullPath = ref("/")
const route = useRoute()
watch(() => route.fullPath, (newVal) => {
    fullPath.value = newVal
}, { immediate: true })



const signupUrl = computed(() => `/signup?redirect=${fullPath.value}`);
const loginUrl = computed(() => `/login?redirect=${fullPath.value}`);
</script>
<template>
    <Disclosure as="nav"
        class="w-full transition ease-in-out delay-150 transform-gpu translate-y-0 fixed bg-primary1 md:bg-backgroundColor1"
        :class="{ '-translate-y-full': hidden }" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0 mr-4">
                        <NuxtLink to="/">
                            <img class="cursor-pointer block h-8 w-auto md:hidden" src="/logo_lightblue.png"
                                alt="Your Company" />
                        </NuxtLink>
                        <NuxtLink to="/">
                            <img class="cursor-pointer hidden h-8 w-auto md:block" src="/logo_darkblue.png"
                                alt="Your Company" />
                        </NuxtLink>
                    </div>
                    <!-- after Lg -->
                    <div class="hidden md:block">
                        <div class="flex space-x-4">
                            <NavLink v-for="item in navigation" :key="item.name" :href="item.href" size="lg" theme="dark">
                                {{ item.name }}
                            </NavLink>
                        </div>
                    </div>
                    <!-- between sm and lg-->
                    <div class="hidden sm:block md:hidden">
                        <div class="flex space-x-4">
                            <NavLink v-for="item in navigation" :key="item.name" :href="item.href" size="lg" theme="light">
                                {{ item.name }}
                            </NavLink>
                        </div>
                    </div>
                    <!-- Mobil -->
                    <div class="sm:hidden">
                        <div class="flex space-x-4">
                            <NavLink v-for="item in importantNavigation" :key="item.name" :href="item.href" size="lg"
                                theme="light">
                                {{ item.name }}
                            </NavLink>
                        </div>
                    </div>

                </div>

                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex items-center">
                        <template v-if="!loggedIn">
                            <div class="flex space-x-4 items-center">
                                <NavLink class="hidden md:block" :href="signupUrl" name="register" size="lg">Registrieren
                                </NavLink>
                                <BasicLink class="hidden md:block" type="button" :href="loginUrl" name="login">Anmelden
                                </BasicLink>
                            </div>
                        </template>
                        <template v-else>
                            <!-- Profile dropdown -->
                            <Menu as="div" class="relative ml-3 hidden md:block">
                                <div>
                                    <MenuButton
                                        class="flex rounded-full text-sm outline-none ring-2 ring-gray-100 ring-offset-2 ring-offset-gray-800">
                                        <span class="sr-only">Open user menu</span>
                                        <Icon name="material-symbols:person" class="h-6 w-6 text-white sm:text-gray-800">
                                        </Icon>
                                    </MenuButton>
                                </div>
                                <transition enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                        <BasicLink v-if="item.href" size="lg" theme="light" :href="item.href">{{ item.name
}}</BasicLink>
                                        <div v-else @click="item.action()" class="block px-4 py-2 text-sm text-gray-700"
                                            :class="[active ? 'bg-gray-100' : '']">{{ item.name }}</div>
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </template>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <!-- Mobile menu button -->
                    <DisclosureButton
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <DisclosurePanel class="md:hidden" v-slot="{ close }">
            <div class="space-y-1 px-2 pb-3 pt-2 sm:hidden">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <div v-for="item in nonImportantNavigation">
                    <NavLink size="lg" theme="light" @click="close" :key="item.name" :href="item.href"
                        :aria-current="item.current ? 'page' : undefined">{{ item.name }}</NavLink>
                </div>
            </div>
            <div class="border-t border-gray-700 pb-3 pt-4">
                <div v-if="loggedIn" class="flex items-center px-5">
                    <div class="flex-shrink-0">
                        <Icon name="material-symbols:person" class="h-6 w-6 text-white md:text-gray-800"></Icon>
                    </div>
                    <div class="ml-3">
                        <div class="text-base font-medium text-white">{{ user.name }}</div>
                        <div class="text-sm font-medium text-gray-400">{{ user.email }}</div>
                    </div>
                </div>
                <div v-if="loggedIn" class="mt-3 space-y-1 px-2">
                    <template v-for="item in userNavigation">
                        <DisclosureButton v-if="item.action" :key="item.name" @click="item.action()" as="div" :class="[
                            item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium',
                        ]" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>

                        <NavLink v-else size="md" theme="light" @click="close" :href="item.href"
                            :aria-current="item.current ? 'page' : undefined">{{ item.name }}</NavLink>
                    </template>
                </div>

                <div v-else class="mt-3 space-y-1 px-2">
                    <NavLink size="md" theme="light" type="button" :href="loginUrl" name="login" class="w-full">Anmelden
                    </NavLink>
                    <NavLink size="md" theme="light" type="button" :href="signupUrl" name="signup" class="w-full">
                        Registieren
                    </NavLink>
                </div>
            </div>
        </DisclosurePanel>
    </Disclosure></template>
  