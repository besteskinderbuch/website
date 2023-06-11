<script setup>
import { useRootStore } from "~/stores/useRootStore";

const { createUser , sendVerificationMail, update, loginWithGoogle} = useAuth();

const email = ref("");
const firstName = ref("");
const password = ref("")

const emit = defineEmits(['success'])

async function handleSignup() {
  // TODO: FirebaseError: Firebase: Error (auth/email-already-in-use).
  await createUser(email.value, password.value)
  useTrackEvent('sign_up',{
    method: 'password'
  })
  await update(firstName.value)
  await sendVerificationMail()

  emit("success")
}

async function handleGoogleLogin() {
  await loginWithGoogle()
  useTrackEvent('sign_up',{
    method: 'google'
  })

  router.push({ path: "/" });
}

const router = useRouter();

const rootStore = useRootStore()
const devMode = computed(() => rootStore.devMode)
</script>

<template>
  <div class="mt-10" v-if="devMode">
    <div>
      <form @submit.prevent="handleSignup" class="space-y-6">
        <div>
          <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">Vorname</label>
          <div class="mt-2">
            <input id="firstName" v-model="firstName" name="firstName" type="text" autocomplete="given-name" required
              class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-Mail Addresse</label>
          <div class="mt-2">
            <input id="email" v-model="email" name="email" type="email" autocomplete="email" required
              class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Passwort</label>
          <div class="mt-2">
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm leading-6">
            <NuxtLink to="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Account schon vorhanden?</NuxtLink>
          </div>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrieren</button>
        </div>
      </form>
    </div>

    <div class="mt-10">
      <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center text-sm font-medium leading-6">
          <span class="bg-white px-6 text-gray-900">oder</span>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-4">
        <button @click="handleGoogleLogin" type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Registieren mit Google<div></div></button>
      </div>
    </div>
  </div>
</template>
