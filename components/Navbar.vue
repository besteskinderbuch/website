<template>
  <Disclosure as="nav" class="bg-primary1 md:bg-transparent" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-12 justify-between my-4">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="/icon.png"
              alt="Your Company"
            />
          </div> -->
          <div class="hidden md:flex md:space-x-8">
            <NavLink v-for="item in navigation" :key="item.name" :href="item.href" size="lg">{{ item.name }}</NavLink>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <!--  <button
              type="button"
              class="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <PlusIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
              New Job
            </button> -->
          </div>
          <div class="md:ml-4 md:flex md:flex-shrink-0 md:items-center space-x-5">
            <template v-if="!loggedIn">
                <BasicLink class="hidden md:block" href="/login" name="register" size="md">Registrieren</BasicLink>
                <BasicLink class="hidden md:block" type="button" href="/login" name="login">Anmelden</BasicLink>
            </template>
            <template v-else>
              <!--   <button
              type="button"
              class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>  -->

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton
                    class="flex rounded-full text-sm outline-none ring-2 ring-gray-100 ring-offset-2 ring-offset-gray-800">
                    <span class="sr-only">Open user menu</span>
                    <Icon name="material-symbols:person" class="h-6 w-6 text-white md:text-gray-800"></Icon>
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-200"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a v-if="item.href" :href="item.href" :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]">{{ item.name }}</a>
                    <div v-else @click="item.action()" class="block px-4 py-2 text-sm text-gray-700"
                      :class="[active ? 'bg-gray-100' : '']">{{ item.name }}</div>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </template>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[
          item.current
            ? 'bg-gray-900 text-white'
            : 'text-gray-100 hover:bg-gray-700 hover:text-white',
          'block rounded-md px-3 py-2 text-base font-medium',
        ]" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
      <div v-if="!loggedIn" class="border-t border-gray-700 pb-3 pt-4">
        <div  class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <div>
            <BasicLink type="button" href="/login" name="login" class="w-full">Einloggen</BasicLink>
          </div>
          <div>
            <BasicLink type="button" href="/signup" name="signup" class="w-full">Registieren</BasicLink>
          </div>
        </div>

        <!-- <div class="flex items-center px-5 sm:px-6">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">{{ user.name }}</div>
            <div class="text-sm font-medium text-gray-400">
              {{ user.email }}
            </div>
          </div>
          <button
            type="button"
            class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
       <div class="mt-3 space-y-1 px-2 sm:px-3">
          <DisclosureButton
            v-for="item in userNavigation"
            :key="item.name"
            as="a"
            :href="item.href"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >{{ item.name }}</DisclosureButton
          >
        </div> -->
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

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

const accountStore = useAccountStore();

const { loggedIn } = storeToRefs(accountStore);

const contentStore = useContentStore();
const navigation = contentStore.navigation;
const userNavigation = contentStore.userNavigation;
</script>
